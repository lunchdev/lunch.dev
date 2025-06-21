---
title: Transform arrays elements with .map()
---

`.map` is an array method.

But it can't be called alone.
It requires a fuction.

`.map` uses this function, when creating the new array, to transform each element.

```js
const array = [1, 2, 3, 4, 5];

array.map(x => x.toString());
// ["1", "2", "3", "4", "5"]
```

So it's used to transform data to UI elements.

```js
const array = [1, 2, 3];

array.map(x => `<li>${x}</li>`);
// [
//     "<li>1</li>",
//     "<li>2</li>",
//     "<li>3</li>",
// ]
```

`.map` can only change element contents and does not impact the array length.  
To create arrayws with fewer items, see `.filter`.

<section>
    <h2>Take it further</h2>

</section>

