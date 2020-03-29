const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_ig = request.headers.authorization;

        const incidents =  await connection('incidents')
            .where('ong_id', ong_ig)
            .select('*');

        return response.json(incidents);
    }
};