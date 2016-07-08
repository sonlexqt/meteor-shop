Meteor.startup(function(){
  // TODO XIN
  console.log('* Initializing StripeWrapper ...');
  var StripeWrapper = function(){
    this.runCharge = function(checkout){
      var stripe = Meteor.npmRequire("stripe")(Meteor.settings.stripeSecretKey);
      //process the charge...
      var stripeCall = Async.runSync(function(done){
        var charge = {
          amount: checkout.total,
          currency: "usd",
          source: checkout.token.id,
          description: checkout.description
        };
        // TODO XIN
        console.log('* charge');
        console.log(charge);
        stripe.charges.create(charge, done);
      });
      // TODO XIN
      console.log('* stripeCall.result');
      console.log(stripeCall.result);
      return stripeCall.result;
    };

    this.refundCharge = function(charge_id){
      //extra credit for you...
    };
  };

  StripeService = new StripeWrapper();

});