import reducer from '../reducer';

describe('myNewReducer reducer', () => {
  it('returns default state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });
});
