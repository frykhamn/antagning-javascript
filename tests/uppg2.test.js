const { uppg2 } = require('../uppg2.js');

describe('uppg2', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should print "Hampus"', () => {
    uppg2();
    expect(consoleSpy).toHaveBeenCalledWith('Hampus');
  });
});