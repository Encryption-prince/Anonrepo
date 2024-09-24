const express = require('express');
const bodyParser = require('body-parser');

const {PORT} =require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
const {User,Role} = require('./models/index');
const app = express();
const cors = require("cors");

app.use(cors());

const verifyToken = require('./middlewares/verifyToken.js');  // Import the token verification middleware
const router = express.Router();

// Example protected route
router.get('/protected-endpoint', verifyToken, (req, res) => {
  // If token is valid, you can access the user data (from req.user)
  res.json({
    message: 'You are authenticated',
    user: req.user,  // Contains user information like uid, email, etc.
  });
});

module.exports = router;


const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded.apply({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async()=>{
        console.log(`Server Started on Port : ${PORT}`);
        //if(process.env.DB_SYNC) {
           //  db.sequelize.sync({alter: true});
        // }
        //db.sequelize.sync({alter: true});
        // const u1 = await User.findByPk(2);
        // const r1 = await Role.findByPk(1);
        //u1.addRole(r1);
    });
}

prepareAndStartServer();