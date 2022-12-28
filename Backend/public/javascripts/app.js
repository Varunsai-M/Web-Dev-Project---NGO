
$(function(){
//

    
    
    $("#register").on('click', function(event){
        event.preventDefault();
        var fullname   = $("#fullname").val();
        var email      = $("#email").val();
        var address      = $("#address").val();
        var dob        = $("#dob").val();
        var pin_code      = $("#pin_code").val();
        
        var personal_ph_no      = $("#personal_ph_no").val();
        //var Days_Available      = $("#Days_Available").val();
        var shift_timings      = $("#shift_timings").val();

        var Employer_Name_1      = $("#Employer_Name_1").val();
        var Emps_Ph_no_1      = $("#Emps_Ph_no_1").val();
        var Office_Address_1      = $("#Office_Address_1").val();
        var Reason_for_Leaving_1     = $("#Reason_for_Leaving_1").val();
        var Position_at_1      = $("#Position_at_1").val();
        var Salary_at_1_job      = $("#Salary_at_1_job").val();
        var May_we_contact_E1      = $("#May_we_contact_E1").val();
        var No_of_years_you_worked_in_1st_company      = $("#No_of_years_you_worked_in_1st_company").val();

        // var Employer_Name_2      = $("#Employer_Name_2").val();
        // var Emps_Ph_no_2      = $("#Emps_Ph_no_2").val();
        // var Office_Address_1      = $("#Office_Address_2").val();
        // var Reason_for_Leaving_2     = $("#Reason_for_Leaving_2").val();
        // var Position_at_2      = $("#Position_at_2").val();
        // var Salary_at_2_job      = $("#Salary_at_2_job").val();
        // var May_we_contact_E2      = $("#May_we_contact_E1").val();
        // var No_of_years_you_worked_in_2nd_company      = $("#No_of_years_you_worked_in_2nd_company").val();

        var Name_R1      = $("#Name_R1").val();
        var Position_R1     = $("#Position_R1").val();
        var Email_Address_R1      = $("#Email_Address_R1").val();
        var Phone_Number_R1      = $("#Phone_Number_R1").val();

        // var Name_R2      = $("#Name_R2").val();
        // var Position_R2     = $("#Position_R2").val();
        // var Email_Address_R2      = $("#Email_Address_R2").val();
        // var Phone_Number_R2      = $("#Phone_Number_R2").val();

        var List_skills_you_want_to_mention      = $("#List_skills_you_want_to_mention").val();
        var Highest_Qualification      = $("#Highest_Qualification").val();
        var Work_Options      = $("#Work_Options").val();
        var Preferred_distance_of_workplace      = $("#Preferred_distance_of_workplace").val();
        var Preferred_Mode_of_travel      = $("#Preferred_Mode_of_travel").val();
        var Expected_Salary_Range      = $("#Expected_Salary_Range").val();
        var Position_Applying_For      = $("#Position_Applying_For").val();
        var Submit_a_copy_of_your_resume      = '6231ce357d693704927371ac';
        var Upload_photograph      = '6231ce357d693704927371ac';

       // var Submit_a_copy_of_your_resume      = $('input[name="Submit_a_copy_of_your_resume"]').val();
       // var Upload_photograph      = $('input[name="Upload_photograph"]').val();
       // alert(Submit_a_copy_of_your_resume);
        
        //var password   = $("#password").val();
        //var cpassword  = $("#cpassword").val();
        //var terms      = $('input[name="terms"]:checked').val();
        //alert(Preferred_distance_of_workplace+" : "+Preferred_Mode_of_travel+" # "+Expected_Salary_Range +" * "+Position_Applying_For+" <> "+Submit_a_copy_of_your_resume+" =="+Upload_photograph );
        //alert(Position_R1+" : "+Email_Address_R1+" # "+Phone_Number_R1 +" * "+List_skills_you_want_to_mention+" <> "+Work_Options +"<>"+Highest_Qualification);
        //alert(Reason_for_Leaving_1+" : "+Position_at_1+" # "+Salary_at_1_job +" * "+No_of_years_you_worked_in_1st_company+" <> "+Name_R1 );
        //alert(personal_ph_no+" : "+Employer_Name_1+" # "+shift_timings +" * "+Emps_Ph_no_1+" <> "+Office_Address_1 );
        //alert(fullname+" : "+address+" # "+pin_code +" * "+dob+" <> "+email );
        if(!Name_R1||!Position_R1 ||!Email_Address_R1  ||!Phone_Number_R1|| 
            !fullname || !pin_code ||!address|| !dob || !email || !personal_ph_no||
            !List_skills_you_want_to_mention|| !Highest_Qualification|| !Work_Options|| !Preferred_distance_of_workplace|| !Preferred_Mode_of_travel|| !Expected_Salary_Range|| !Position_Applying_For||
            !Employer_Name_1 || !Emps_Ph_no_1  || !Office_Address_1 || !Reason_for_Leaving_1 ||  !Position_at_1 || !Salary_at_1_job  || !May_we_contact_E1 ||  !No_of_years_you_worked_in_1st_company  ){ 
            $("#msgDiv").show().html("All fields are required.");
        } /*else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");} */
        //  else if(!terms){
        //     $("#msgDiv").show().html("Please agree to terms and conditions.");
        //}
        else{ 
            $.ajax({
                url: "/register",
                method: "POST",
                data: { full_name: fullname, dob: dob, address : address,
                     pin_code : pin_code, email:email, personal_ph_no : personal_ph_no,
                      /*Days_Available : Days_Available,*/ shift_timings : shift_timings,
                      Employer_Name_1 : Employer_Name_1,Emps_Ph_no_1 : Emps_Ph_no_1, Office_Address_1 : Office_Address_1,
                      Reason_for_Leaving_1 : Reason_for_Leaving_1, Position_at_1 : Position_at_1,
                      No_of_years_you_worked_in_1st_company:No_of_years_you_worked_in_1st_company,
                      Salary_at_1_job:Salary_at_1_job,May_we_contact_E1:May_we_contact_E1,

                    //   Employer_Name_2:Employer_Name_2, Emps_Ph_no_2 : Emps_Ph_no_2, Office_Address_2 : Office_Address_2,
                    //      Reason_for_Leaving_2 : Reason_for_Leaving_2, Position_at_2 : Position_at_2,
                    //      Salary_at_2_job : Salary_at_2_job, May_we_contact_E2 : May_we_contact_E2,
                    //      No_of_years_you_worked_in_2nd_company:No_of_years_you_worked_in_2nd_company,

                        Name_R1:Name_R1, Email_Address_R1:Email_Address_R1, Phone_Number_R1:Phone_Number_R1,Position_R1:Position_R1,
                        // Name_R2:Name_R2, Email_Address_R2:Email_Address_R2, Phone_Number_R2:Phone_Number_R2,Position_R2:Position_R2,
                        List_skills_you_want_to_mention:List_skills_you_want_to_mention,
                        Highest_Qualification:Highest_Qualification, Work_Options:Work_Options, 
                        Preferred_distance_of_workplace:Preferred_distance_of_workplace,
                        Expected_Salary_Range:Expected_Salary_Range, Position_Applying_For:Position_Applying_For,
                        Submit_a_copy_of_your_resume:Submit_a_copy_of_your_resume, Upload_photograph:Upload_photograph,Preferred_Mode_of_travel:Preferred_Mode_of_travel
                }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});