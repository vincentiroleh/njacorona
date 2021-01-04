const axios = require('axios');

module.exports = {
    async onGet(req, res) {
        try {
            const response = await axios.get(process.env.MYAPI); // making a http request to https://covidnigeria.herokuapp.com/api
            res.render('home', { data: response.data.data })
        } catch (error) { throw new Error(error) }
    }
}
