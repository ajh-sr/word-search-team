import WordSearch, {Direction} from "../word-search";

const grid = [
  'jefblpepre',
  'camdcimgtc',
  'oivokprjsm',
  'pbwasqroua',
  'rixilelhrs',
  'wolcqlirpc',
  'screeaumgr',
  'alxhpburyi',
  'jalaycalmp',
  'clojurermt',
];

describe('getRelativeCoordinates', () => {
  test('it works!', () => {
    const expectedResults = [
      { position: { x: 0, y: 0}, direction: Direction.UP },
      { position: { x: 0, y: 0}, direction: Direction.DOWN },
      { position: { x: 0, y: 0}, direction: Direction.LEFT },
      { position: { x: 0, y: 0}, direction: Direction.RIGHT },
      { position: { x: 0, y: 0}, direction: Direction.UP_LEFT },
      { position: { x: 0, y: 0}, direction: Direction.UP_RIGHT },
      { position: { x: 0, y: 0}, direction: Direction.DOWN_LEFT },
      { position: { x: 0, y: 0}, direction: Direction.DOWN_RIGHT },
    ]
    const wordSearch = new WordSearch(grid)

    expect(wordSearch.getRelativeCoordinates({ x: 1, y: 1 }, 1)).toEqual(expectedResults)
  })
});
