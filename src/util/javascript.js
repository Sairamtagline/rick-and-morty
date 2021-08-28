export const equal = (obj1, obj2 = 0) => obj1 === obj2;

export const ternary = (bool, truth, faulty) => (bool ? truth : faulty);

export const notEqual = (obj1, obj2) => !equal(obj1, obj2);

export const length = (obj) => obj.length;

export const greaterThan = (obj1, obj2) => obj1 > obj2;

export const location = window.location.pathname;
