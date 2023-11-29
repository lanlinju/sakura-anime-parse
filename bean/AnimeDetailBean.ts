import AnimeBean from "./AnimeBean";
import EpisodeBean from "./EpisodeBean";

export default class AnimeDetailBean {
    constructor(
        public anime:AnimeBean,
        public desc:string,
        public score:string,
        public tags:Array<string>,
        public updateTime:string,
        public episode:Array<EpisodeBean>,
        public relatedAnimes: Array<AnimeBean>
    ){
        this.anime = anime
        this.desc = desc
        this.score = score
        this.tags = tags
        this.updateTime = updateTime
        this.episode = episode
        this.relatedAnimes = relatedAnimes
    }
}