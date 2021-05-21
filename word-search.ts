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

const move = {
  [Direction.UP]: ({ x, y }: Point): Point => ({ x, y: y - 1}),
  [Direction.DOWN]: ({ x, y }: Point): Point => ({ x, y: y + 1}),
  [Direction.LEFT]: ({ x, y }: Point): Point => ({ x: x - 1, y }),
  [Direction.RIGHT]: ({ x, y }: Point): Point => ({ x: x + 1, y }),
  [Direction.UP_LEFT]: ({ x, y }: Point): Point => ({ x: x - 1, y: y - 1}),
  [Direction.UP_RIGHT]: ({ x, y }: Point): Point => ({ x: x + 1, y: y - 1}),
  [Direction.DOWN_LEFT]: ({ x, y }: Point): Point => ({ x: x - 1, y: y + 1}),
  [Direction.DOWN_RIGHT]: ({ x, y }: Point): Point => ({ x: x + 1, y: y + 1}),
}

export default class WordSearch {
  constructor(private grid: string[]) {}

  public find(words: string[]): Result {
    return words.reduce((acc, word) => ({ ...acc, [word]: this.findWord(word) }), {});
  }

  private findWord(word: string, rowIndex: number = 0, colIndex: number = 0): RelativeCoordinate {

  }

  private getRelativeCoordinates(pos: Point, totalWordlength: number) {

  }
}
