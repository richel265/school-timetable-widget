import { SchoolDay } from './school-day';

describe('SchoolDay', () => {
  it('should create an instance', () => {
    expect(new SchoolDay(-1,[''],true)).toBeTruthy();
  });
});
