// //////////////////// part 1
// Meteor.subscribe('products-by-vendor', {$gte: ""})

// //////////////////// part 2
// Meteor.subscribe('cart', {$ne: ''});

// //////////////////// part 3
// Meteor.call('updateCart', cart);

// //////////////////// part 4
// Meteor.call('updateUser', Meteor.userId(), {
//    $set: {isAdmin: true}
// });

// Meteor.call('updateUser', Meteor.userId(), {
//    $unset: {isAdmin: ''}
// });

// Meteor.call('updateUser', Meteor.userId(), {
//    $inc: {'profile.temp': 1}
// });

// Meteor.call('updateUser', Meteor.userId(), {
//    $rename: {'profile.temp': 'isAdmin'}
// });

// //////////////////// part 5
// Meteor.subscribe('vendors', {
// 	$where: "d = new Date; do { c = new Date; } while (c - d < 10000);"
// });

// d = new Date;
// do { c = new Date; }
// while (c - d < 10000);

