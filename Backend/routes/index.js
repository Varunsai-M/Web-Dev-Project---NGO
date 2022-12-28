var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
var User      = mongoose.model('Users');
var express = require('express');
var router    = express.Router();
var upload    = require('./upload');
var mongoose  = require('mongoose');
var Photo     = mongoose.model('Photos');


//var crypto    = require('crypto'), hmac, signature;
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize }   = require('express-validator/filter');

   /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: '  | Registration From | '});
   })
   
  /* POST user registration page. */
  router.post('/register',[ 
   
    check('full_name','Name cannot be left blank')
    .isLength({ min: 1 }),

    check('address','Address cannot be left blank')
    .isLength({ min: 1 }),
   
    check('email')
    .isEmail().withMessage('Enter a valid email address')
    .trim()
    .normalizeEmail()
    .custom(value => {
        return findUserByEmail(value).then(_User => {
          //if user email already exists throw an error
      })
    }),

    /*check('password')
    .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
    .matches(/\d/).withMessage('Password must contain one number')
    .custom((value,{req, loc, path}) => {
      if (value !== req.body.cpassword) {
          // throw error if passwords do not match
          throw new Error("Passwords don't match");
      } else {
          return value;
      }
  }),*/

    check('dob','Date of birth cannot be left blank')
    .isLength({ min: 1 }),

    check('pin_code','Pin code must be of 6 digits in length')
    .isLength(6),

    check('personal_ph_no','Do not include +91 as the phone number must have a maximum 10 characters')
    .isLength({ min: 10 }),



    check('Employer_Name_1','Employers name is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Emps_Ph_no_1','Employers phone number is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Office_Address_1','Previous office address is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Reason_for_Leaving_1','Reason for Leaving is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Position_at_1','Previous jobs designation is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Salary_at_1_job','Previous jobs salaryis a Compulsory field ')
    .isLength({ min: 1 }),

    check('May_we_contact_E1','May we contact radio button is a Compulsory field ')
    .isLength({ min: 1 }),

    check('No_of_years_you_worked_in_1st_company','Number of years worked is a Compulsory field ')
    .isLength({ min: 1 }),


    
    check('Name_R1','Referals name is a Compulsory field ')
    .isLength({ min: 1 }),
    
    check('Position_R1','Referals position is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Email_Address_R1','Referals email id is a Compulsory field ')
    .isLength({ min: 1 }),

    check('Phone_Number_R1','Referals phone number is a Compulsory field ')
    .isLength({ min: 1 }),

    check('List_skills_you_want_to_mention','List_skills_you_want_to_mention Compulsory field ')
    .isLength({ min: 1 }),
  
    check('Highest_Qualification','Highest_Qualification is a Compulsory field ')
    .isLength({ min: 1 }),
  
    check('Work_Options','Working from home or office is a Compulsory field ')
    .isLength({ min: 1 }),
  
    check('Preferred_distance_of_workplace','Distance from workplace is a Compulsory field ')
    .isLength({ min: 1 }),
  
    check('Preferred_Mode_of_travel','Private/pblic transprt option si a Compulsory field ')
    .isLength({ min: 1 }),

    check('Expected_Salary_Range','Expectant salary range is a Compulsory field ')
    .isLength({ min: 1 }),
  
    check('Position_Applying_For','Position you are applying for is a Compulsory field ')
    .isLength({ min: 1 }),
  
    // check('Submit_a_copy_of_your_resume','Resume upload is a Compulsory field ')
    // .isLength({ min: 1 }),
  
    // check('Upload_photograph','Photo is a Compulsory field')
    // .isLength({ min: 1 }),


   ], function(req, res, next) {

      const errors = validationResult(req);

    if (!errors.isEmpty()) {     
        
       res.json({status : "error", message : errors.array()});

    } else {

        var document = {
            full_name:   req.body.full_name, 
            email:       req.body.email, 
            address:       req.body.address,
            dob:         req.body.dob, 
            pin_code:     req.body.pin_code, 
            personal_ph_no:       req.body.personal_ph_no,
            // Sunday:     req.body.Sunday, 
            // Monday:     req.body.Monday,
            // Tuesday:     req.body.Tuesday,
            // Wednesday:     req.body.Wednesday,
            // Thursday:     req.body.Thursday,
            // Friday:     req.body.Friday,
            // Saturday:     req.body.Saturday,
            Nine_am_to_5pm:     req.body.Nine_am_to_5pm,
            Three_pm_to_11pm:     req.body.Three_pm_to_11pm,
            Nine_pm_to_Five_am:     req.body.Nine_pm_to_Five_am,
            Twelve_am_to_8am:     req.body.Twelve_am_to_8am,
            Any_time:     req.body.Any_time,

            Employer_Name_1:     req.body.Employer_Name_1,
            Emps_Ph_no_1:     req.body.Emps_Ph_no_1,
            Office_Address_1:     req.body.Office_Address_1,
            Reason_for_Leaving_1:     req.body.Reason_for_Leaving_1,
            Position_at_1:     req.body.Position_at_1,
            Salary_at_1_job:     req.body.Salary_at_1_job,
            May_we_contact_E1:        req.body.May_we_contact_E1,
            No_of_years_you_worked_in_1st_company:     req.body.No_of_years_you_worked_in_1st_company,
           
            Name_R1:     req.body.Name_R1,
            Position_R1:     req.body.Position_R1,
            Email_Address_R1:     req.body.Email_Address_R1,
            Phone_Number_R1:     req.body.Phone_Number_R1,


            List_skills_you_want_to_mention:     req.body.List_skills_you_want_to_mention,
            Highest_Qualification:     req.body.Highest_Qualification,
            Work_Options:     req.body.Work_Options,
            Preferred_distance_of_workplace:     req.body.Preferred_distance_of_workplace,
            Preferred_Mode_of_travel:     req.body.Preferred_Mode_of_travel,
            Expected_Salary_Range:     req.body.Expected_Salary_Range,
            Position_Applying_For:     req.body.Position_Applying_For,


            Submit_a_copy_of_your_resume:     req.body.Submit_a_copy_of_your_resume,
            Upload_photograph:     req.body.Upload_photograph,

            // Submit_a_copy_of_your_resume:     "6231733c96ae530140286fbf",
            // Upload_photograph:     "6231733c96ae530140286fbf",

          };
        
        var user = new User(document); 
        user.save(function(error){
          console.log(user);
          if(error){ 
            throw error;
          }
          res.json({message : "Data saved successfully.", status : "success"});
       });    
    }
});

function findUserByEmail(email){

  if(email){
      return new Promise((resolve, reject) => {
        User.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
          })
      })
    }
 }

 //Adding from file upload
 router.post('/upload', function(req, res) {

  upload(req, res,(error) => {
      if(error){
         res.redirect('/?msg=3');
      }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');

        }else{
             
            /**
             * Create new record in mongoDB
             */
            var fullPath = "files/"+req.file.filename;
            // console.log(req.file.filename);
            
            
            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Photo(document); 
          photo.save(function(error){
            if(error){ 
              throw error;
            } 
          // res.json({message : "Data saved successfully.", status : "success"});
          // res.end();
          // res.redirect('/?msg=1');
         });
      }
    }
  });    
});


module.exports = router;