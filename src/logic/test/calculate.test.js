import calculate from '../calculate';

describe('Testing calculator logic', () => {
  test('Button AC', () => {
    const buttonName = 'AC';
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('operations with zero', () => {
    const buttonName = '0';
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({});
  });

  test('If there is an operation and there is a next and this one is different than zero, update next', () => {
    const buttonName = '1';
    const obj = {
      total: null,
      next: '2',
      operation: !null,
    };
    const result = {
      total: null,
      next: obj.next + buttonName,
      operation: !null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('If there is an operation and there isn\'t any next, update next', () => {
    const buttonName = '1';
    const obj = {
      total: null,
      next: null,
      operation: !null,
    };
    const result = {
      total: null,
      next: buttonName,
      operation: !null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('If there is no operations and there is a next and this one is different than zero, update next and clear the value', () => {
    const buttonName = '1';
    const obj = {
      total: !null,
      next: '2',
      operation: null,
    };
    const result = {
      total: null,
      next: obj.next + buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('If there is no operation and there isn\'t any next, update next and clear the value', () => {
    const buttonName = '1';
    const obj = {
      total: !null,
      next: null,
      operation: null,
    };
    const result = {
      total: null,
      next: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button decimal point if there is a next that has already a decimal point', () => {
    const buttonName = '.';
    const obj = {
      total: null,
      next: '0.',
      operation: null,
    };
    const result = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button decimal point if there is a next', () => {
    const buttonName = '.';
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const result = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button decimal point if there is no a next but has a operation', () => {
    const buttonName = '.';
    const obj = {
      total: null,
      next: null,
      operation: !null,
    };
    const result = {
      total: null,
      next: '0.',
      operation: !null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button decimal point if there is no a next, there is no operation but there is a total and this total has a decimal point', () => {
    const buttonName = '.';
    const obj = {
      total: '1.',
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({});
  });

  test('Button decimal point if there is no next, there is no operation but there is a total', () => {
    const buttonName = '.';
    const obj = {
      total: '1',
      next: null,
      operation: null,
    };
    const result = {
      total: '1',
      next: `${obj.total}.`,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button decimal point if there is no next, there is no operation and there is no total', () => {
    const buttonName = '.';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button equal if there is next and there is operation', () => {
    const buttonName = '=';
    const obj = {
      total: '2',
      next: '1',
      operation: '+',
    };
    const result = {
      total: '3',
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button equal if there is no operation', () => {
    const buttonName = '=';
    const obj = {
      total: '2',
      next: '1',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({});
  });

  test('Button +/- if there is next', () => {
    const buttonName = '+/-';
    const obj = {
      total: null,
      next: '1',
      operation: null,
    };
    const result = {
      total: null,
      next: '-1',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button +/- if there is no next but there is total', () => {
    const buttonName = '+/-';
    const obj = {
      total: '1',
      next: null,
      operation: null,
    };
    const result = {
      total: '-1',
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('Button +/- if there is no next and there is no total', () => {
    const buttonName = '+/-';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({});
  });

  test('User pressed an operation after pressing =', () => {
    const buttonName = '+';
    const obj = {
      total: !null,
      next: null,
      operation: null,
    };

    const result = {
      total: !null,
      next: null,
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('User pressed an operation button and there is an existing operation when there is a total but there is no next', () => {
    const buttonName = '+';
    const obj = {
      total: !null,
      next: null,
      operation: !null,
    };

    const result = {
      total: !null,
      next: null,
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('User pressed an operation button and there is an existing operation when there is no a total', () => {
    const buttonName = '+';
    const obj = {
      total: null,
      next: null,
      operation: !null,
    };

    const result = {
      total: 0,
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('User pressed an operation button and there is an existing operation when there is a total and next', () => {
    const buttonName = '+';
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };

    const result = {
      total: '3',
      next: null,
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('The user hasn\'t typed a number yet, just save the operation', () => {
    const buttonName = '+';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = {
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });

  test('The user hasn\'t typed a number yet, just save the operation but there is a next so save the operation and shift next into total', () => {
    const buttonName = '+';
    const obj = {
      total: null,
      next: '1',
      operation: null,
    };

    const result = {
      total: obj.next,
      next: null,
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(result);
  });
});
