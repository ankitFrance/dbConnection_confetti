const express = require('express');
const router = express.Router();
const multer  = require('multer')
const Report = require('../model/report')



     


router.get('/', (req, res)=> {
    res.render('index')
})




router.post('/feedback',  async(req, res)=>{
   
  const formData = req.body;
 

  const ReportForm = new Report({

  

      Name: formData.name,
      Role: formData.role,

   
   
  });
  console.log(formData)
  await ReportForm.save();
  return  res.render('feedback.ejs')
})






module.exports = router; 