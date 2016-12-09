const db = require('../db');

module.exports = (app) => {

  //Route for login
    app.route('/api/login')
        .post((req, res, next) => {
          var userName=req.body.userName;
          var password=req.body.password;
          if (checkuser(userName,password)) {
            // console.log(userName);
            // console.log(password);
            let output = checkuser(userName,password);
            res.status(200).json({
              "message": "Login successfully"
            });
          }else{
            res.status(401).json({
              "message": "Login failed"
            });
          }
        });

    //Route for logout
    app.route('/api/logout')
        .post((req, res, next)=>{
          res.status(200).json({
              "message": "Logout successfully"
            });
        });
};

/*@parameter:
  userName: the username from request
  password: the password from request

  @return
  true: if authentification is successful
  false: if not
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
