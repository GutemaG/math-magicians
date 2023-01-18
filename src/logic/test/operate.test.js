import operate from '../operate';

describe('Testing operator logic', () => {
  test('Adding two numbers', () => {
    const fNum = 20;
    const sNum = 10;
    const result = operate(fNum, sNum, '+');
    expect(Number(result)).toEqual(30);
  });

  test('Dividing two numbers', () => {
    const fNum = 20;
    const sNum = 10;
    const result = operate(fNum, sNum, '÷');
    expect(Number(result)).toEqual(2);
  });

  test('testing unknown operation', () => {
    const fNum = 20;
    const sNum = 10;
    // const result = operate(fNum, sNum, '#');
    expect(() => operate(fNum, sNum, '#')).toThrow();
  });

  test('testing division by zero', () => {
    const fNum = 20;
    const sNum = 0;
    // const result = operate(fNum, sNum, '#');
    expect(operate(fNum, sNum, '÷')).toEqual('Can\'t divide by 0.');
  });
});
