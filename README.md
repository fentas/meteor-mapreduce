[![](https://api.travis-ci.org/fentas/meteor-mapreduce.svg)](https://travis-ci.org/fentas/meteor-mapreduce)

# fentas:mapreduce

A simple package to add proper mapReduce support for Meteor. This package exposes `.mapReduce` method on `Mongo.Collection` instances.

> this only works on server side and there is no oberserving support or reactivity built in

## Usage

Add to your app with
```
meteor add fentas:mapreduce
```

Then simply use `.mapReduce` function like below.

```js
var metrics = new Mongo.Collection('metrics');
function map() {
  emit(1, {
    v: this.value
  })
}
function reduce(key, value) {
  return Math.max.apply(null, value)
}
var result = metrics.mapReduce(map, reduce, {out: {inline: 1}});
```

## Why?

There are few other mapReduce packages out there. All of them written with some complex hacks and there are some easy way to do things.
They also don't work with custom Mongo drivers as well.

And this package is short and simple. (~20 LOC)
