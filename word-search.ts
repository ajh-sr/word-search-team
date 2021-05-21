enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  UP_LEFT,
  UP_RIGHT,
  DOWN_LEFT,
  DOWN_RIGHT,
}

type Point = {
  x: number,
  y: number,
}

type RelativeCoordinate = {
  position: Point,
  direction: Direction
}

type Answer = {
  [word: string]: {
    start: number[],
    end: number[],
  }
}

export default class WordSearch {
  public find(board: string[]) {
    throw new Error('Implement this function')
    console.log(board)
  }

}
