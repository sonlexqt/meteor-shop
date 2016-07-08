Template.nav.helpers({
  vendors : function(){
    return Vendors.find();
  },
  isAdmin: function(){
  	res = false;
  	if (Meteor.user() && Meteor.user().isAdmin) res = true;
  	return res;
  }
});