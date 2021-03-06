export enum Direction {
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

  public findWord(word: string, rowIndex: number = 0, colIndex: number = 0): RelativeCoordinate | undefined {
    let startPoint = this.findFirstLetter(word[0], rowIndex, colIndex)
    if(typeof startPoint == 'undefined') return undefined

    let relativeCoordinates = this.getRelativeCoordinates(startPoint, word.length)
    // if(typeof relativeCoordinates == 'undefined') return undefined


    let endPoint = this.findEnd(word.slice(1), rowIndex, colIndex)

    if(typeof endPoint !== 'undefined') return {startPoint, endPoint}





  }

  private findEnd(endWord: string, relativeCoordinates: RelativeCoordinate[]): Point | undefined {
    for (let i = 0; i < endWord.length; i++) {
      let firstEndWordLetter;
      for (let j = 0; j < relativeCoordinates.length; j++) {
        if(this.grid[relativeCoordinates[j].position.x][relativeCoordinates[j].position.y] === endWord[i]) {
          firstEndWordLetter = { position: { x: relativeCoordinates[j].position.x, y: relativeCoordinates[j].position.y }, direction: relativeCoordinates[j].direction };
        }
      }
      if(firstEndWordLetter) {
        if(endWord[i+1] === this.grid[move[firstEndWordLetter.direction](firstEndWordLetter.position).x][move[firstEndWordLetter.direction](firstEndWordLetter.position).y]) {
// TO finish
        }
      }
    }
  }


  public getRelativeCoordinates(pos: Point, totalWordlength: number) {
    const { x, y } = pos;
    const remainingLength = totalWordlength - 1;
    const fitsWithinTopBound = y - remainingLength >= 0;
    const fitsWithinBottomBound = y + remainingLength <= this.grid.length - 1;
    const fitsWithinLeftBound = x - remainingLength >= 0;
    const fitsWithinRightBound = x + remainingLength <= this.grid[y].length - 1;
    const result: RelativeCoordinate[] = [];

    if (fitsWithinTopBound) {
      result.push({ position: move[Direction.UP](pos), direction: Direction.UP });
    }

    if (fitsWithinBottomBound) {
      result.push({ position: move[Direction.DOWN](pos), direction: Direction.DOWN });
    }

    if (fitsWithinLeftBound) {
      result.push({ position: move[Direction.LEFT](pos), direction: Direction.LEFT });
    }

    if (fitsWithinRightBound) {
      result.push({ position: move[Direction.RIGHT](pos), direction: Direction.RIGHT });
    }

    if (fitsWithinTopBound && fitsWithinLeftBound) {
      result.push({ position: move[Direction.UP_LEFT](pos), direction: Direction.UP_LEFT });
    }

    if (fitsWithinTopBound && fitsWithinRightBound) {
      result.push({ position: move[Direction.UP_RIGHT](pos), direction: Direction.UP_RIGHT });
    }

    if (fitsWithinBottomBound && fitsWithinLeftBound) {
      result.push({ position: move[Direction.DOWN_LEFT](pos), direction: Direction.DOWN_LEFT });
    }

    if (fitsWithinBottomBound && fitsWithinRightBound) {
      result.push({ position: move[Direction.DOWN_RIGHT](pos), direction: Direction.DOWN_RIGHT });
    }

    return !result.length ? undefined : result;
  }
}
