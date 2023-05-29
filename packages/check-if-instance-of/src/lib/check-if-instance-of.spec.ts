import { checkIfInstanceOf } from './check-if-instance-of';

describe('checkIfInstanceOf', () => {
  it('date', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toEqual(true);
  });

  it('class and inheritance', () => {
    const func = () => {
      class Animal {}
      class Dog extends Animal {}
      return checkIfInstanceOf(new Dog(), Animal);
    };
    expect(func()).toEqual(true);
  });

  it('constructor check', () => {
    expect(checkIfInstanceOf(Date, Date)).toEqual(false);
  });

  it('number', () => {
    expect(checkIfInstanceOf(5, Number)).toEqual(true);
  });
});
