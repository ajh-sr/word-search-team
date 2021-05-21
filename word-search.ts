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

  public find(words: string[]): Answer {
    return words.reduce((acc, word) => ({ ...acc, [word]: this.findWord(word) }), {});
  }

  private findWord(word: string, rowIndex: number = 0, colIndex: number = 0): RelativeCoordinate | undefined {
    let startPoint = findFirstLetter(word[0], rowIndex, colIndex)

    let relativeCoordinates = this.getRelativeCoordinates(startPoint, word.length)
    if(typeof relativeCoordinates == 'undefined') return undefined

    for(let relCoord in relativeCoordinates) {
      let endPoint = this.findEnd(word.slice(1),relCoord)
      if(endPoint) {
        return endPoint
      }
    }
  }

  private findEnd(endWord: string, rowIndex: number = 0, colIndex: number = 0): RelativeCoordinate {
    for (let i = 0; i < endWord.length; i++) {


    }
  }

  private getRelativeCoordinates(pos: Point, totalWordlength: number) {

  }
}
