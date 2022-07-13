const sum = arg1 => arg2 => (arg2 !== undefined) ? sum(arg1 + arg2) : arg1;

console.log(sum(1)(2)(3)());
