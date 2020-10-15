const passport = require('passport');

const users = require('../db/queries/users');

// its something we need if we use sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(err, id);
});

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },async (accessToken, refreshToken, profile, cb) => {
    const email = profile.emails[0].value;
    let user = await users.findByEmail(email);

    const googleUser = {
      display_name: profile.displayName,
      email,
      google_id: profile.id,
      image_url: profile.photos[0].value,
      role_id: 1,
    };

    console.log(googleUser);
    if (user) {
      // update the user but not change the role_id
      console.log('updating...');
      googleUser.role_id = user.role_id;
      [user] = await users.update(user.id, googleUser);
    } else {
      console.log('creating...');
      // insert the user
      [user] = await users.insert(googleUser);
    }
    console.log(user);
    return cb(null, user);
  }
));