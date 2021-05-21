import WordSearch from "../word-search"

describe('findFirstLetter', () => {
  const board = [
    'ABCD',
    'EFGH',
    'IJKL',
    'ABCD',
  ]
  const wordSearch = new WordSearch(board);

  describe('without starting point', () => {
    it('return undefined for letter "Z"', () => {
      expect(wordSearch.findFirstLetter('Z')).toEqual(undefined)
    })

    it('return the point of first letter "C"', () => {
      expect(wordSearch.findFirstLetter('C')).toEqual({x: 2, y: 0})
    })
  });

  describe('with starting point of (2, 0)', () => {
    const startingPoint = [2 , 0];
    it('return undefined for letter "E"', () => {
      expect(wordSearch.findFirstLetter('E', ...startingPoint)).toEqual(undefined)
    })

    it('return the point of second "C"', () => {
      expect(wordSearch.findFirstLetter('C', ...startingPoint)).toEqual({x: 2, y: 3})
    })
  });
})