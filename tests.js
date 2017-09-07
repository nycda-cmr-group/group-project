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
      tables.Comments.create({
        post_id: post.id
      }).then(function(post) {
        tables.Tags.create({
          post_id: post.id
        })
      })
    })
  }
})
