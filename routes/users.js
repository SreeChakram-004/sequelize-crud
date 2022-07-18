var express = require('express');
var router = express.Router();

/* GET users listing. */
const Users = require('../models').user;

// router.get('/', function(req, res, next) {
//   res.send('get user');
// });

//create a user
router.post("/",async(req,res)=>{
  console.log(req.body);
 const user  = await Users.create(req.body);
 console.log(user);
  res.send("created user");
});


//get a user 
router.get("/getUsers",async(req,res)=>{
  console.log(req.body);
  const userslist = await Users.findAll(req.body);
  res.send(userslist);
});

//post bulk users
router.post('/bulkUsers', async(req, res) => {
	const user=await Users.bulkCreate(req.body);
  console.log(user);
  res.send('created bulk users');
});

//get single user
router.get('/singleUser/:id', async(req, res) => {
  const id = req.params.id;
	const user=await Users.findByPk(id);
  console.log(user);
  res.send(user);
});

//update a user
router.put('/singleUser/:id', async(req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const user  = await Users.update(req.body,{where : { id: id}});
 console.log(user);
  res.send("updated user");
//  Users.update(req.body, {
//   where: { id: id }
// })
//   .then(num => {
//     if (num == 1) {
//       res.send({
//         message: "Tutorial was updated successfully."
//       });
//     } else {
//       res.send({
//         message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//       });
//     }
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Error updating Tutorial with id=" + id
//     });
//   });
});

//delete a user
router.delete('/:id', async(req, res) => {
  const id = req.params.id;
	const user=await Users.destroy({where: { id: id }});
  console.log(user);
  res.send('users deleted');
});

//get all users after deleting
router.get('/getAllUsers',async(req,res)=>{
  console.log(req.body);
  const userslist = await Users.findAll(req.body);
  res.send(userslist);
});


module.exports = router;
