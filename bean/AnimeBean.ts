export default class AnimeBean {
    title: string
    img: string
    url: string
    episode: string 
    constructor(title: string, img: string, url: string, episode: string = '') {
        this.title = title
        this.img = img
        this.url = url
        this.episode = episode
    }
}

