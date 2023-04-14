module.exports = {
    ensureAuthenticated: function(req, rep, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Connectez-vous pour accéder au site');
        rep.redirect('/');
    },
    forwardAuthenticated: function(req, rep, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        rep.redirect('/usagers');
    }
}