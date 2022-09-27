import {getTabLink} from './helpers';


describe('helpers', () => {
  describe('getTabLink', () => {
    it('should create a link starting with categories/', () => {
      expect(getTabLink('something')).toEqual('categories/something');
    });

    it('should create the root link', () => {
      expect(getTabLink('all')).toEqual('/');
    });
  });
});