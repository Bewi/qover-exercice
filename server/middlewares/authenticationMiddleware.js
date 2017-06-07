const repositories = require('../repositories');

module.exports = (userid, password, done) => {
    repositories.userRepository.queryUser(userid).then((userDoc) => {
        if (!userDoc) {
            return done(null, false);
        }

        if (userDoc.password === password) {
            return done(null, userid);
        }

        return done(null, false);
    }).catch(done);
};
