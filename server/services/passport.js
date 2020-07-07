const passport = require('passport');
const keys= require('../config/keys');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id, done)=>{
   User.findById(id).then(user=>{
       done(null, user);
   })
});

passport.use(new googleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    async (accessToken, refreshToken, profile, done)=>{
        const existingUser = await User.findOne({googleId: profile.id})
                if(existingUser){
                    done(null,existingUser);
                }
                else{
                   const user = await new User({googleId: profile.id}).save().then(
                        done(null,user)
                    );
                }   
    })  
);

 