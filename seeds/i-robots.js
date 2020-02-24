
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('robots').del()
    .then(function () {
      // Inserts seed entries
      return knex('robots').insert([
        {id: 1, name: 'Izzy', number:'200841901',email:'hi@gmail.com'},
        {id: 2, name: 'Claire', number:'0204819108',email:'you@gmail.com'},
        {id: 3, name: 'Henry', number:'0221488091',email:'good@gmail.com'}
      ]);
    });
};
