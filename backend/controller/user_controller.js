const User = require('../models/user')

module.exports = {

 get (req, res, next) {
    // query.<parameter whatever you want to name it>
    // those query.pagesize or query.page are coming from the URL so it
    // is treated as string so we have to convert the url back into integer
    // by adding the plus sign

    // we run the localhost on the backend
    // http://localhost:3000/api/users?pagesize=2&page=1&something=cool
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const userQuery = User.find();
    let fetchedUsers;
    // select
    if(pageSize && currentPage){
      //
      userQuery
      // we skip the items that we've already querried
      // i.e: pageSize = 10 * (1-1) then we query 0 item
      // so one to 10 * 2 then we skip first 2 pages and go on to query the next page
      .skip(pageSize * (currentPage - 1))
      // narrow down the ammount of pageSize
      .limit(pageSize);

    }
    // down here is to fetch all users
   userQuery.then(documents => {
     fetchedUsers = documents;
      return User.count();
      })
      .then(count => {
        res.status(200).json({
          message: "Users fetched successfully!",
          users: fetchedUsers,
          maxUsers: count
      })
    })
  },
  create(req, res, next) {
  const userProps = req.body;

  User.create(userProps)
    .then(user => res.send(user))
    .catch(next)
},

edit(req, res, next) {
  const userId = req.params.id;
  const userProps = req.body;

  User.findByIdAndUpdate({ _id: userId }, userProps)
    .then(() => User.findById({ _id: id }))
    .then(user => res.send(user))
    .catch(next);
},

delete(req, res, next) {
  const userId = req.params.id;

  User.findByIdAndRemove({ _id: userId })
    .then(user => res.status(204).send(user))
    .catch(next);
}
};
