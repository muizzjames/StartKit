import { defaultAction } from '../actions';
import { DEFAULT_ACTION } from '../../action-types';

describe('myNewReducer actions', () => {
  it('creates a default action', () => {
    const expectedAction = {
      type: DEFAULT_ACTION,
    };
    expect(defaultAction()).toEqual(expectedAction);
  });
});

