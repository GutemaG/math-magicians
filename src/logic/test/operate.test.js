import operate from '../operate';

describe('Testing operator logic', () => {
  const fNum = 20;
  const sNum = 10;
  test('Adding two numbers', () => {
    const result = operate(fNum, sNum, '+');
    expect(Number(result)).toEqual(30);
  });
  test('Subtract two numbers', () => {
    const result = operate(fNum, sNum, '-');
    expect(Number(result)).toEqual(10);
  });

  test('Dividing two numbers', () => {
    const result = operate(fNum, sNum, '÷');
    expect(Number(result)).toEqual(2);
  });
  test('Multiply two numbers', () => {
    const result = operate(fNum, sNum, 'x');
    expect(Number(result)).toEqual(200);
  });

  test('testing unknown operation', () => {
    expect(() => operate(fNum, sNum, '#')).toThrow();
  });

  test('testing division by zero', () => {
    expect(operate(fNum, 0, '÷')).toEqual('Can\'t divide by 0.');
  });

  test('get module correctly', () => {
    expect(Number(operate(fNum, 2, '%'))).toEqual(0);
  });
  test('should not get module of zero', () => {
    expect(operate(fNum, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
