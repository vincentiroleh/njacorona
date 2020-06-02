const request = require('request');

class AppController {
    static home(req, res) {
        res.status(200);
        const url = process.env.MYAPI;
        request(url, { json: true }, (err, response, body) => {
            if (err) {
                console.error(err);
            } else {
                const data = body.data;
                const states = data.states;
                res.render('home', { data, states });
            }
        })
    }
}

module.exports = AppController;