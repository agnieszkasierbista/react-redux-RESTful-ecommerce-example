import {currencySwitcherReducer} from './reducers';
import {toggleIsExtended} from './actions';

describe('reducers', () => {
  describe('currencySwitcher', () => {
    it('abc', () => {
      expect(currencySwitcherReducer({}, toggleIsExtended())).toEqual({});
    });
  });
});