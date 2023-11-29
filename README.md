# sakura-anime-parse
樱花动漫网站数据爬取

## 1.getHomeAllData返回数据形式大致如下

```Json
[
  HomeBean {
    title: '最新更新',
    moreUrl: '/new/',
    data: [
      [AnimeBean],
      [AnimeBean],
      [AnimeBean],
      [AnimeBean]
    ]
  },
  HomeBean {
    title: '日本动漫',
    moreUrl: '/japan/',
    data: [
      [AnimeBean],
      [AnimeBean],
      [AnimeBean],
      [AnimeBean]
    ]
  },
  HomeBean {
    title: '国产动漫',
    moreUrl: '/china/',
    data: [
      [AnimeBean],
      [AnimeBean],
      [AnimeBean],
      [AnimeBean]
    ]
  }
]
```

## 2.getAnimeDetail返回数据形式如下

```json
Map(7) {
  '周一' => [
    AnimeBean {
      title: '米奇与达利',
      img: '',
      url: '/show/5994.html',
      episode: '第9集'
    },
    AnimeBean {
      title: '鸭乃桥论的禁忌推理',
      img: '',
      url: '/show/6027.html',
      episode: '第9集'
    }
  ],
  '周二' => [
    AnimeBean {
      title: '圣剑学院的魔剑使',
      img: '',
      url: '/show/5989.html',
      episode: '第9集'
    }
  ],
  '周三' => [
    AnimeBean {
      title: '16bit的感动 ANOTHER LAYER',
      img: '',
      url: '/show/6007.html',
      episode: '第8集'
    }
  ],
  '周四' => [
    AnimeBean {
      title: 'KAMIERABI',
      img: '',
      url: '/show/6008.html',
      episode: '第8集'
    }
  ],
  '周五' => [
    AnimeBean {
      title: '葬送的芙莉莲',
      img: '',
      url: '/show/6018.html',
      episode: '第12集'
    }
  ],
  '周六' => [
    AnimeBean {
      title: '宝可梦 地平线',
      img: '',
      url: '/show/5894.html',
      episode: '第30集'
    }
  ],
  '周日' => [
    AnimeBean {
      title: '偶像大师 百万现场',
      img: '',
      url: '/show/6053.html',
      episode: '第8集'
    }
  ]
}
```



## 3.getAnimeDetail()函数的返回数据形式

```json
AnimeDetailBean {
  anime: AnimeBean {
    title: '海贼王 红发歌姬',
    img: 'http://css.yhdmtu.xyz/news/2023/03/08/20230308065315771.jpg',
    url: '',
    episode: ''
  },
  desc: '\n' +
    '《海贼王 红发歌姬》令全世界为之疯狂的歌姬·乌塔，她的身世成谜，歌声却被誉为“来自别的次元”。为了欣赏她的歌声，路飞率领的草帽一伙，以及世界各地的歌迷都汇聚在会场之中。全世界备受瞩目的歌声即将在此回荡。而故事就在乌塔是“杰克斯的女儿”这一令人震惊的发现中拉开帷幕！',
  score: '5.0',
  tags: [ '2023', '日本', '奇幻热血战斗', '日语剧场' ],
  updateTime: '全集',
  episode: [ EpisodeBean { name: '全集', url: '/v/5842-1.html' } ],
  relatedAnimes: [
    AnimeBean {
      title: '黑暗集会',
      img: 'http://css.yhdmtu.xyz/news/2023/07/10/20230710081422792.jpg',
      url: '/show/5963.html',
      episode: ''
    },
    AnimeBean {
      title: '偶像大师 百万现场',
      img: 'http://css.yhdmtu.xyz/news/2023/10/07/20230225.jpg',
      url: '/show/6053.html',
      episode: ''
    },
    AnimeBean {
      title: '暴食狂战士',
      img: 'http://css.yhdmtu.xyz/news/2023/09/27/20230927085806569.jpg',
      url: '/show/6009.html',
      episode: ''
    }
  ]
}
```

## 4.getSearchData函数的返回数据形式

```json
[
  AnimeBean {
    title: '航海王总集篇',
    img: 'http://css.yhdmtu.xyz/news/2023/10/07/202210091665281205.jpg',
    url: '/show/6051.html',
    episode: ''
  },
  AnimeBean {
    title: '海贼王 红发歌姬',
    img: 'http://css.yhdmtu.xyz/news/2023/03/08/20230308065315771.jpg',
    url: '/show/5842.html',
    episode: ''
  },
  AnimeBean {
    title: '海贼王女',
    img: 'http://css.yhdmtu.xyz/acg/2021/06/17/20210617061602864.jpg',
    url: '/show/5281.html',
    episode: ''
  }
]
```

## 5.getVideoUrl函数的返回数据形式

```json
"https://s16.larksuitecdn.com/oUEu9BbDuQJQlCgJRI.........."//视频地址
```

## 6.VScode运行ts

```
1.npm install typescript -g
2.npm install ts-node -g
3.安装Code Runner插件
4.生成tsconfig.json文件
tsc --init

```

