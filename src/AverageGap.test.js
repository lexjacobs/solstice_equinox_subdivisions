import { computeAverageDifference } from './AverageGap';

it('computes averages as expected', () => {
  var testArray = [ { timestamp: 1 }, { timestamp: 2 }, { timestamp: 3 } ];
  var actual = computeAverageDifference(testArray);
  expect(actual).toBe(1);
  testArray = [ { timestamp: 1 }, { timestamp: 5 } ];
  actual = computeAverageDifference(testArray);
  expect(actual).toBe(4);
  testArray = [ { timestamp: 1 } ];
  actual = computeAverageDifference(testArray);
  expect(actual).toBe(NaN);
});
