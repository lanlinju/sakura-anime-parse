import AnimeBean from "./AnimeBean"

export default class HomeBean {
    title: string
    moreUrl: string
    data: Array<AnimeBean>

    constructor(title: string, moreUrl: string, data: Array<AnimeBean>) {
        this.title = title
        this.moreUrl = moreUrl
        this.data = data
    }
}
