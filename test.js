Tinytest.add('method signature', function(test) {
  var coll = new Mongo.Collection(Random.id());
  test.equal(typeof coll.mapReduce, 'function');
});

Tinytest.add("let's mapReduce", function(test) {
  var coll = new Mongo.Collection(Random.id());
  coll.insert({resTime: 20});
  coll.insert({resTime: 40});

  var result = coll.mapReduce(
    function() { emit(1, { time: this.resTime }); },
    function(key, values) { return Array.sum(values); },
    {out: {inline: 1}}
  );

  test.equal(result, [{_id: 1, value: {time: 60}}]);
});

Tinytest.add("aggregate on Meteor.users", function(test) {
  var coll = Meteor.users;
  coll.remove({});
  coll.insert({resTime: 20});
  coll.insert({resTime: 40});

  var result = coll.mapReduce(
    function() { emit(1, { time: this.resTime }); },
    function(key, values) { return Array.sum(values); },
    {out: {inline: 1}}
  );

  test.equal(result, [{_id: 1, value: {time: 60}}]);
});
