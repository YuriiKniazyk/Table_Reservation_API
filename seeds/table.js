exports.seed = (knex) => {
    return knex('table').select('id')
        .then(results => {
            if(results.length === 0)
                return knex('table').insert([
                    {id:1,tableCount: 2, personCount: 2},
                    {id:2,tableCount: 4, personCount: 4},
                    {id:3,tableCount: 2, personCount: 6},
                    {id:4,tableCount: 1, personCount: 8},
                    {id:5,tableCount: 1, personCount: 16}
                ]);
        });
};
