const express = require('express');
const application = express();
const bodyParser = require('body-parser');
const testexpress = require('supertest');
const session = require('express-session');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');

application.use(bodyParser.json());
application.use(cookieParser());

const user = [{
    user: 'melloDee',
    password: 'qwer1234'
}];
const storage = {
    session: [],
   users:[{name: 'melloDee',
    password: 'qwer1234'}] 
};


application.get('/api', function (request, response) {


    response.json('hello');
});


application.post('/api/registration', function (request, response) {
    var user = {
        name: request.body.name,
        password: request.body.password
    }
    //hash the password
    // storage.users.push(name);

    response.json(request.body);
});

application.get('/signin', (request, response) => {
    response.render('signin');
});


application.post('/api/login', function (request, response) {

    var name = request.body.name;
    var password = request.body.password;
    var user = storage.users.find(user => {
        return user.name === name && user.password === password
    })

    if (!user) {
        response.json({status:'thou shall not pass'});
    } else {
        // var sessionId = storage.sessionId;
        //storage.sessionId++;
        //storage.sessions.push(user);
        // response.cookie('session', sessionId);
        //response.render('/', user);
        response.json({status: 'success'});

    }

});




application.get('/api/logout', function (request,response) {
   var currentUser = Parse.User.logout();
       res.redirect('/api',{status:'later!' });


});
   
// application.post('/api/users/cards', function (request,response) {


//    response.json();
// });

// application.post('/api/users/cards', function (request,response) {


//    response.json();
// });

// application.post('/api/users/cards', function (request,response) {


//    response.json();
// });

// application.delete('/api/users/cards', function (request,response) {


//    response.json();
// });



module.exports = application;