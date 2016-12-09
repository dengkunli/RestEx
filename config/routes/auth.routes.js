const db = require('../db');

/*@parameter:
  username: the username
  database: the database
*/
function checkuser(userName, password){
  let result = false;
  // console.log(db.users);
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].userName == userName && db.users[i].password == password) {
      result = true;
    }
  }
  return result;
}

module.exports = (app) => {
    app.route('/api/login')
        .post((req, res, next) => {
          var userName=req.body.userName;
          var password=req.body.password;

          if (checkuser(userName,password)) {
            console.log(userName);
            console.log(password);
            let output = checkuser(userName,password);
            res.status(200).send("Login successfully");
          }else{
            res.status(401).send("Login fail");
          }
        });
};
