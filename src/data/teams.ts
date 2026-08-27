export interface Team {
  name: string
  tag: string
  region: string
  record: string
}

export const TEAMS_BY_GAME: Record<string, Team[]> = {
  fifa: [
    { name: 'Wraft Strikers', tag: 'WKR', region: 'EU', record: '24W – 6L' },
    { name: 'Wraft Reserves', tag: 'WRS', region: 'EU', record: '11W – 9L' },
  ],
  cod: [
    { name: 'Wraft Vanguard', tag: 'WVG', region: 'NA', record: '18W – 5L' },
    { name: 'Wraft Nightshift', tag: 'WNS', region: 'EU', record: '15W – 8L' },
  ],
  valorant: [
    { name: 'Wraft Prime', tag: 'WPR', region: 'NA', record: '30W – 4L' },
    { name: 'Wraft Academy', tag: 'WAC', region: 'NA', record: '9W – 7L' },
    { name: 'Wraft EU', tag: 'WEU', region: 'EU', record: '21W – 10L' },
  ],
  pubg: [
    { name: 'Wraft Squad One', tag: 'WSQ', region: 'ASIA', record: '#3 Ranked' },
    { name: 'Wraft Ghosts', tag: 'WGH', region: 'EU', record: '#7 Ranked' },
  ],
}
