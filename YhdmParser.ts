import axios from "axios";
import * as cheerio from 'cheerio';
import HomeBean from "./bean/HomeBean";
import AnimeBean from "./bean/AnimeBean";
import AnimeDetailBean from "./bean/AnimeDetailBean";
import EpisodeBean from "./bean/EpisodeBean";

const BASE_URL = 'http://www.yinghuacd.com/'
let TABS = Array("周一", "周二", "周三", "周四", "周五", "周六", "周日")

let request = axios.create({ baseURL: BASE_URL })
async function getHtml(url: string): Promise<string> {
    let { data: html } = await axios.get(url)
    return html
}

async function getHomeAllData(source: string): Promise<Array<HomeBean>> {
    const $ = cheerio.load(source)
    let titles = $('div.firs > div.dtit')
    let data = $("div.firs > div.img")
    let homeBeanList = Array<HomeBean>()
    titles.each(function (i, el) {
        let title = $(el).find("h2 > a").text()
        let moreUrl = $(el).find("h2 > a").attr("href") ?? ""
        let animes = data.eq(i).find("ul > li")
        let animeBeanList = Array<AnimeBean>()
        animes.each(function (i, anime) {
            let animeInfo = $(anime).find("a")
            let animeTitle = animeInfo.eq(1).text()
            let url = animeInfo.eq(1).attr("href") ?? ""
            let img = animeInfo.eq(0).find("img").attr("src") ?? ""
            let episode = animeInfo.eq(2).text()
            animeBeanList.push(new AnimeBean(animeTitle, img, url, episode))
        })
        homeBeanList.push(new HomeBean(title, moreUrl, animeBeanList))
    });
    return homeBeanList
}

async function getWeekData(source: string): Promise<Map<string, Array<AnimeBean>>> {
    const $ = cheerio.load(source)
    let elements = $('div.tlist > ul')
    let weekMap = new Map<string, Array<AnimeBean>>()
    elements.each((i, elem) => {
        let dayList = Array<AnimeBean>()
        $(elem).find('li').each((i, el) => {
            let anime = $(el).find('a')
            let title = anime.eq(1).text()
            let url = anime.eq(1).attr('href') ?? ''
            let episode = anime.eq(0).text()
            dayList.push(new AnimeBean(title, '', url, episode))
        })
        weekMap.set(TABS[i], dayList)
    })
    return weekMap
}

async function getAnimeDetail(source: string): Promise<AnimeDetailBean> {
    const $ = cheerio.load(source)
    let title = $('h1').text()
    let desc = $('div.info').text()
    let score = $('div.score > em').text()
    let img = $('div.thumb > img').attr('src') ?? ''
    let updateTime = $('div.sinfo > p').last().text()
    let tags = Array<string>()
    let tagInfoList = $("div.sinfo > span").filter((i, el,) => (i != 5 && i != 3))
    tagInfoList.each((i, el) => {
        let tag = $(el).find('a').text().toUpperCase()
        tags.push(tag)
    })
    let episodes = getAnimeEpisodes($)
    let relatedAnimes = getRelatedAnimes($)
    return new AnimeDetailBean(new AnimeBean(title, img, ''), desc, score, tags, updateTime, episodes, relatedAnimes)
}

function getAnimeEpisodes($: cheerio.CheerioAPI): Array<EpisodeBean> {
    let dramaElements = $('div.movurl > ul > li')
    let episodes = Array<EpisodeBean>()
    dramaElements.each((i, el) => {
        let name = $(el).find('a').text()
        let url = $(el).find('a').attr('href') ?? ""
        episodes.push(new EpisodeBean(name, url))
    })
    return episodes
}

function getRelatedAnimes($: cheerio.CheerioAPI): Array<AnimeBean> {
    let elems = $('div.pics > ul > li')
    let relatedAnimes = Array<AnimeBean>()
    elems.each((i, el) => {
        let title = $(el).find('h2 > a').text()
        let img = $(el).find('img').attr('src') ?? ""
        let url = $(el).find('h2 > a').attr('href') ?? ""
        relatedAnimes.push(new AnimeBean(title, img, url))
    })
    return relatedAnimes
}

async function getSearchData(source: string): Promise<Array<AnimeBean>> {
    return getAnimeList(source)
}

function getAnimeList(source: string): Array<AnimeBean> {
    const $ = cheerio.load(source)
    let elements = $('div.lpic > ul > li')
    let animeList = Array<AnimeBean>()
    elements.each((i, el) => {
        let title = $(el).find('h2').text()
        let url = $(el).find('h2 > a').attr('href') ?? ''
        let img = $(el).find('img').attr('src') ?? ''
        animeList.push(new AnimeBean(title, img, url))
    })
    return animeList
}

async function getVideoUrl(source: string): Promise<string> {
    const $ = cheerio.load(source)
    let elements = $('div.playbo > a')
    let regex = /changeplay\('(.*)\$mp4'\);/
    let url = elements.eq(0).attr('onclick')?.replace(regex, '$1') ?? ''
    return url
}

let homeUrl = "http://www.yinghuacd.com/"
let detailUrl = "http://www.iyinghua.io/show/5989.html"
let searchUrl = "http://www.yinghuacd.com/search/海贼王/"
let videoUrl = "http://www.iyinghua.io/v/5989-2.html"

async function main() {
    let homeHtml = await getHtml(homeUrl)
    console.log(await getHomeAllData(homeHtml))
    console.log(await getWeekData(homeHtml))

    let detailHtml = await getHtml(detailUrl)
    console.log(await getAnimeDetail(detailHtml))

    let searchHtml = await getHtml(searchUrl)
    console.log(await getSearchData(searchHtml))

    let videoHtml = await getHtml(videoUrl)
    console.log(await getVideoUrl(videoHtml))
}

main()



