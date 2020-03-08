const pipe1 = (f, g) => (...args) => g(f(...args))
exports.pipe = (...fns) => fns.reduce(pipe1)

