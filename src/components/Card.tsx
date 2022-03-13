// カードアイテム
export type Item = {
  id: number
  title: string
  image: string
  url: string
}

export const Card: Item[] = [
  {
    id: 0,
    title: 'Ultimate search',
    image: 'https://app.tanukizzan.com/images/ultimate-card.jpg',
    url: 'https://app.tanukizzan.com/ultimate-search/'
  },
  {
    id: 1,
    title: 'GATY search',
    image: 'https://app.tanukizzan.com/images/gaty-card.png',
    url: 'https://app.tanukizzan.com/gaty-search/'
  },
  {
    id: 2,
    title: 'HowTo search',
    image: 'https://app.tanukizzan.com/images/howto-card.png',
    url: 'https://app.tanukizzan.com/howto-search/'
  },
  {
    id: 3,
    title: 'HashTag search',
    image: 'https://app.tanukizzan.com/images/hashtag-card.png',
    url: 'https://app.tanukizzan.com/hashtag-search/'
  },
  {
    id: 4,
    title: 'Simple search',
    image: 'https://app.tanukizzan.com/images/simple-card.jpg',
    url: 'https://app.tanukizzan.com/simple-search/'
  },
  {
    id: 5,
    title: 'AI風アシスタント',
    image: 'https://app.tanukizzan.com/images/assistant-card.png',
    url: 'https://app.tanukizzan.com/assistant/'
  },
  {
    id: 6,
    title: 'オウム・ガエシくん',
    image: 'https://app.tanukizzan.com/images/text-talk-card.jpg',
    url: 'https://app.tanukizzan.com/text-talk/'
  },
  {
    id: 7,
    title: 'Music Start!',
    image: 'https://app.tanukizzan.com/images/music-start-card.jpg',
    url: 'https://app.tanukizzan.com/music-start/'
  },
  {
    id: 8,
    title: 'douze -12-',
    image: 'https://app.tanukizzan.com/images/douze-card.jpg',
    url: 'https://app.tanukizzan.com/douze/'
  },
  {
    id: 9,
    title: '除夜の鐘',
    image: 'https://app.tanukizzan.com/images/joya-card.png',
    url: 'https://app.tanukizzan.com/joya/'
  },
  {
    id: 10,
    title: '縦書き巻物風サイト',
    image: 'https://app.tanukizzan.com/images/tategaki-card.jpg',
    url: 'https://app.tanukizzan.com/vertical-writing/'
  },
  {
    id: 11,
    title: 'あのロゴジェネレーター',
    image: 'https://app.tanukizzan.com/images/logo-gene-card.jpg',
    url: 'https://app.tanukizzan.com/logo-generator/'
  },
  {
    id: 12,
    title: 'エヴァ風フォントジェネレーター',
    image: 'https://app.tanukizzan.com/images/eva-card.jpg',
    url: 'https://app.tanukizzan.com/eva-font/'
  },
  {
    id: 13,
    title: 'ポモドーロチャイム',
    image: 'https://app.tanukizzan.com/images/pomodoro-card.jpg',
    url: 'https://app.tanukizzan.com/pomodoro/'
  },
  {
    id: 14,
    title: 'ランダムカラーピッカー',
    image: 'https://app.tanukizzan.com/images/random-card.png',
    url: 'https://app.tanukizzan.com/random-color/'
  },
]

// リンクボタン
export type Link = {
  title: string
  url: string
}

export const linkBtn: Link[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/tanukizzan',
  },
  {
    title: 'Qiita',
    url: 'https://qiita.com/Tanukizzan'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCb4HwLN4NNHs3sL7FGVLbOw'
  },
  {
    title: 'SoundCloud',
    url: 'https://soundcloud.com/tanukizzan'
  },
  {
    title: 'note',
    url: 'https://note.com/tanukizzan'
  },
  {
    title: 'Blog',
    url: 'https://tanukizzan.com'
  }
]
