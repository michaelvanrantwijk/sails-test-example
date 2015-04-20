var Sails = require('sails');

before(function(done) {
  Sails.lift({
    log: {
      level: 'error'
    }
    // configuration for testing purposes
  }, function(err) {
    if (err) return done(err);

    done(err);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});

