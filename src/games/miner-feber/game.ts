import { persistentMap } from '@nanostores/persistent';

export interface GameI {
  bulletLv: number,
  bulletSpeed: number,
  gold: number,
  level: number,
  maxRocks: number,
  shootCooldown: number,
  spawnedRocks: number,
  state: 'playing' | 'paused' | 'gameover' | 'win' | 'menu',
}

// @ts-ignore-next-line
export const game = persistentMap<GameI>('game:', {
  bulletLv: 1,
  bulletSpeed: 4,
  gold: 0,
  level: 1,
  maxRocks: 2,
  shootCooldown: 80,
  spawnedRocks: 0,
  state: 'menu',
})
