if(Meteor.isServer){
  Meteor.methods({
    updateUser : function(userId, updateObject){
      return Meteor.users.update({_id: userId}, updateObject);
    }
  });
}