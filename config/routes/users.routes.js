const db = require('../db');

module.exports = (app) => {

   //user ...........
    app.route('/api/users')
        .get((req, res, next) => {
            res.status(200).json(db.users);
        });


    app.route('/api/users')
        .post((req, res, next) => {
            let flag=true;
            for(let i=0;i<db.users.length;i++){
                if(db.users[i]['userId']==req.body['userId']){
                    flag=false;
                    res.status(400).send();
                }
            }
            if(flag){
                db.users.push(req.body);
                res.status(200).send();
            }

            console.log(db.users);

        });

    // user Id ................
    app.route('/api/users/:id')
        .get((req, res, next) => {
            //console.log(req.params.id);
            let flag=false;
            let i=0;
            for(i;i<db.users.length;i++){
                if(db.users[i]['userId']==req.params.id){
                    flag=true;
                    break;
                }
            }
            if(flag==true){
                res.status(200).json(db.users[i]);
            }else{
                res.status(404).send();
            }
        });


    app.route('/api/users/:id')
        .delete((req, res, next) => {
            //console.log(req.params.id);
            let flag=false;
            for(let i=0;i<db.users.length;i++){
                if(db.users[i]['userId']==req.params.id){
                    flag=true;
                    db.users.splice(i, 1);
                    break
                }
            }
            if(flag){
                res.status(200).send();
            }else{
                res.status(404).send();
            }
            console.log(db.users);
        });


    app.route('/api/users/:id')
        .put((req, res, next) => {
            //console.log(req.params.id);
            let flag=false;
            for(let i=0;i<db.users.length;i++){
                if(db.users[i]['userId']==req.params.id){
                    flag=true;
                    db.users.splice(i, 1);
                    db.users.splice(i,0,req.body);
                    break
                }
            }
            if(flag){
                res.status(200).send();
            }else{
                res.status(404).send();
            }
            console.log(db.users);
        });


    app.route('/api/users/:id')
        .patch((req, res, next) => {
            //console.log(req.params.id);
            let flag=false;
            for(let i=0;i<db.users.length;i++){
                if(db.users[i]['userId']==req.params.id){
                    flag=true;

                    console.log(req.body);

                    for (let attr in db.users[0]){
                        if(req.body.hasOwnProperty(attr)){
                            db.users[i][attr]  = req.body[attr];
                        }
                    }
                    break
                }
            }
            if(flag){
                res.status(200).send();
            }else{
                res.status(404).send();
            }

        });



};

