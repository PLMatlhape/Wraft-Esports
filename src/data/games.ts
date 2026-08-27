export interface Game {
  id: string
  name: string
  mode: string
  players: string
}

export const GAMES: Game[] = [
  { id: 'fifa', name: 'FIFA', mode: 'Sports Sim', players: '1v1 / 11v11' },
  { id: 'cod', name: 'Call of Duty', mode: 'Tactical FPS', players: '5v5' },
  { id: 'valorant', name: 'Valorant', mode: 'Tactical Shooter', players: '5v5' },
  { id: 'pubg', name: 'PUBG', mode: 'Battle Royale', players: '1–100' },
]
