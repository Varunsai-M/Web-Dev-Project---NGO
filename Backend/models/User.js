//const { text } = require('body-parser');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new Schema({

  full_name: { type: String,  required: [true, 'Full name must be provided'] },

  address: { type: String,  required: [true, 'Address is a required field'] },
  email:    { 
    
    type: String,     

    Required:  'Email address cannot be left blank.',
    validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: {unique: true, dropDups: true}
    },

  //password: { type: String , required: [true,  'Password cannot be left blank']},

  dob: { type: Date , required: [true, 'Date of birth must be provided']},

  pin_code: { type:String,  required: [true, 'Pin code is a required field'] },

  personal_ph_no: { type:String,  required: [true, 'Personal phone number is a required field'] },


  // Sunday: { type: String },
  // Monday: { type: String },
  // Tuesday: { type: String },
  // Wednesday: { type: String },
  // Thursday: { type: String },
  // Friday: { type: String },
  // Saturday: { type: String },
  //Days_Available: { type: String , required: [true, 'Available days must be inputted']},
  
  Nine_am_to_5pm: { type: String },
  Three_pm_to_11pm: { type: String },
  Nine_pm_to_Five_am: { type: String },
  Twelve_am_to_8am: { type: String },
  Any_time: { type: String },
  //shift_timings: { type: String , required: [true, 'Preferred shift timings must be provided']},

  //Employment History
Employer_Name_1: { type: String, required: [true, 'This is a required field']  },
Emps_Ph_no_1: { type:String, required: [true, 'This is a required field']  },
Office_Address_1: { type: String, required: [true, 'This is a required field']  },
Reason_for_Leaving_1: { type: String,  required: [true, 'This is a required field']  },
Position_at_1: { type: String,  required: [true, 'This is a required field']  },
Salary_at_1_job: { type:String,  required: [true, 'This is a required field']  },
May_we_contact_E1 : { type: String,  required: [true, 'This is a required field']  },
No_of_years_you_worked_in_1st_company: { type:Number,  required: [true, 'This is a required field']  },

// Employer_Name_2: { type: String },
// Emps_Ph_no_2: { type:String },
// Office_Address_2: { type: String },
// Reason_for_Leaving_2: { type: String },
// Position_at_2: { type: String },
// Salary_at_2_job: { type:String },
// May_we_contact_E2 : { type: String },
// No_of_years_you_worked_in_2nd_company: { type:Number },

//Referneces
Name_R1: { type: String,  required: [true, 'Referrals name is a required field']  },
Position_R1: { type: String,  required: [true, 'Referrals position is a required field']  },
Email_Address_R1: { type: String,  required: [true, 'Referrals e-mail address is a required field']  },
Phone_Number_R1: { type:String,  required: [true, 'Referral phone number is a required field']  },

// Name_R2: { type: String },
// Position_R2: { type: String },
// Email_Address_R2: { type: String },
// Phone_Number_R2: { type:String },

//Job Expectations
List_skills_you_want_to_mention: { type: String ,required: [true, 'Your skills to be mentioned is a required field']},
Highest_Qualification : { type: String ,required: [true, 'Your Qualification is a required field']},
Work_Options: { type: String ,required: [true, 'Preferred distance of workplace is a required field']},
Preferred_distance_of_workplace: { type: String ,required: [true, 'Preferred distance of workplace is a required field']},
Preferred_Mode_of_travel : { type: String ,required: [true, 'Preferred Mode of travel is a required field']},
Expected_Salary_Range: { type:String,  required: [true, 'Expected salary range is a required field']  },
Position_Applying_For : { type: String ,required: [true, 'Position you want to apply for is a required field']},
Submit_a_copy_of_your_resume: { type: String ,required: [true, 'Upoading your resume is compulsory']},
Upload_photograph: { type: String ,required: [true, 'Upoading your recent photograph is compulsory']},


});



module.exports = mongoose.model('Users', userSchema);