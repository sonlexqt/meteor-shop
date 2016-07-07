Meteor.publish("featured-products", function(){
  return Products.featured();
});

Meteor.publish("vendors", function(query){
console.log(query);
  return Vendors.find(query || {});
});

Meteor.publish("products-by-vendor", function(slug){
  return Products.find({"vendor.slug" : slug})
});

// Meteor.subscribe('vendors', {
// 	$where: "d = new Date; do { c = new Date; } while (c - d < 10000);"
// });

/*
db.products.find({
	"vendor.slug": {$gte: ""}
});
*/

Meteor.publish("products-by-sku", function(sku){
  return Products.find({sku : sku});
});

Meteor.publish("cart", function(key){
  return Carts.find({userKey : key});
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {
  		_id: 1,
  		emails: 1,
  		profile: 1,
  		username: 1,
  		isAdmin: 1
  	}
  });
});
