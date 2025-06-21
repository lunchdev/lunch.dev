---
title: TBD: .reduce()
---

```js
const array = [1, 2, 3, 4, 5];

// error
array.reduce();
```

```js
// first value
array.reduce((first) => first);
// => 1
// (But why does it stay `1`? Because the first value is never modified.)
```

```js
// count
array.reduce((first) => first + 1);
// => 5
// (
```

```js
// previous and current value
array.reduce((prev, current) => prev + current);
// => 15
```

```js
// seeding an initial value
array.reduce((prev, current) => prev + current, 100);
// => 115
```

```js
// to avoid confusion, most refer to these ase "accumulator" and "current"/"item"/"element"
array.reduce((acc, item) => prev + current, 100);
// => 115
```

```js
// 
array.reduce((acc, item) => prev + current, 100);
// => 115
```
