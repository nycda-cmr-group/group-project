const tables = require('./models/index');

tables.Users.create({
  email_username: 'test@test.com',
  password: 'asdf'
}).then(function(user) {
  if (!user) {
    throw new Error('model not created')
  } else {
    tables.Posts.create({
      user_id: user.id
    }).then(function(post) {
      console.log(post)
    })
  }
})

// const post = tables.Posts.create({
//
// })
