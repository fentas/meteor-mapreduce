wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.mapReduce = function(map, reduce, options) {
  var coll;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    coll = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    coll = this._getCollection();
  }
  return wrapAsync(coll.mapReduce.bind(coll))(map, reduce, options);
}
