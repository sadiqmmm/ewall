$(document).ready( function() {

    // Once the document is loadeded hide the quiz
    $("#see-video-jq1").hide(); 
    $("#see-video-jq2").hide(); 
    $("#see-video-jq3").hide(); 
    $("#see-video-jq4").hide(); 
    $("#see-video-jq5").hide(); 
    $("#see-video-jq6").hide(); 
    $("#see-video-jq7").hide(); 
    $("#see-video-jq8").hide(); 
    
    $("#see-video-jq9").hide(); 
    $("#see-video-jq10").hide(); 
    $("#see-video-jq11").hide(); 
    $("#see-video-jq12").hide(); 
    $("#see-video-jq13").hide(); 
    $("#see-video-jq14").hide(); 
    $("#see-video-jq15").hide(); 
    $("#see-video-jq16").hide(); 
    
    $("#see-video-jq17").hide(); 
    $("#see-video-jq18").hide(); 
    $("#see-video-jq19").hide(); 
    $("#see-video-jq20").hide(); 
    $("#see-video-jq21").hide(); 
    $("#see-video-jq22").hide(); 
 
    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var radio_button_value_jq1 = getRadioValuejq1();
    var radio_button_value_jq2 = getRadioValuejq2();
    var radio_button_value_jq3 = getRadioValuejq3();
    var radio_button_value_jq4 = getRadioValuejq4();
    var radio_button_value_jq5 = getRadioValuejq5();
    var radio_button_value_jq6 = getRadioValuejq6();
    var checkbox_button_value_jq7_mul = getCheckboxValuejq7_mul();
    var radio_button_value_jq8 = getRadioValuejq8();

    var radio_button_value_jq9 = getRadioValuejq9();
    var radio_button_value_jq10 = getRadioValuejq10();
    var radio_button_value_jq11 = getRadioValuejq11();
    var radio_button_value_jq12 = getRadioValuejq12();
    var radio_button_value_jq13 = getRadioValuejq13();
    var radio_button_value_jq14 = getRadioValuejq14();
    var radio_button_value_jq15 = getRadioValuejq15();
    var radio_button_value_jq16 = getRadioValuejq16();

    var radio_button_value_jq17 = getRadioValuejq17();
    var radio_button_value_jq18 = getRadioValuejq18();
    var radio_button_value_jq19 = getRadioValuejq19();
    var radio_button_value_jq20 = getRadioValuejq20();
    var radio_button_value_jq21 = getRadioValuejq21();
    var checkbox_button_value_jq22 = getCheckboxValuejq22();
 


   // start #quiz-case-study-one

    $('#quiz-case-study-one').submit( function( event ) {

        var q_total = 0;
        var q_correct = 0;
 
        $("#see-video-jq1").hide(); 
        $("#see-video-jq2").hide(); 
        $("#see-video-jq3").hide(); 
        $("#see-video-jq4").hide(); 
        $("#see-video-jq5").hide(); 
        $("#see-video-jq6").hide(); 
        $("#see-video-jq7").hide(); 
        $("#see-video-jq8").hide(); 

        $("#see-video-jq9").hide(); 
        $("#see-video-jq10").hide(); 
        $("#see-video-jq11").hide(); 
        $("#see-video-jq12").hide(); 
        $("#see-video-jq13").hide(); 
        $("#see-video-jq14").hide(); 
        $("#see-video-jq15").hide(); 
        $("#see-video-jq16").hide();

        $("#see-video-jq17").hide(); 
        $("#see-video-jq18").hide(); 
        $("#see-video-jq19").hide(); 
        $("#see-video-jq20").hide();     
 

        $("html, body").animate({ scrollTop: $('#quiz-case-study-one').offset().top -60}, 600);
         
        event.preventDefault(); // Prevent from default submit button behaviour

        // Will get the newly selected value
        radio_button_value_jq1 = getRadioValuejq1();    
        radio_button_value_jq2 = getRadioValuejq2();
        radio_button_value_jq3 = getRadioValuejq3();  
        radio_button_value_jq4 = getRadioValuejq4();  
        radio_button_value_jq5 = getRadioValuejq5();  
        radio_button_value_jq6 = getRadioValuejq6();  
        checkbox_button_value_jq7_mul = getCheckboxValuejq7_mul();      
        radio_button_value_jq8 = getRadioValuejq8();       

        radio_button_value_jq9 = getRadioValuejq9();    
        radio_button_value_jq10 = getRadioValuejq10();
        radio_button_value_jq11 = getRadioValuejq11();  
        radio_button_value_jq12 = getRadioValuejq12();  
        radio_button_value_jq13 = getRadioValuejq13();  
        radio_button_value_jq14 = getRadioValuejq14();  
        radio_button_value_jq15 = getRadioValuejq15();      
        radio_button_value_jq16 = getRadioValuejq16();   

        radio_button_value_jq17 = getRadioValuejq17();    
        radio_button_value_jq18 = getRadioValuejq18();
        radio_button_value_jq19 = getRadioValuejq19();  
        radio_button_value_jq20 = getRadioValuejq20();     

        // jq1
        if(radio_button_value_jq1 == 1) {
             q_correct++;

            $('#result-jq1 .right-ans').remove();
            $('#result-jq1 .wrong-ans').remove();
            $('#result-jq1 .show').remove();
            $('#result-jq1').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq1 .right-ans').remove();
            $('#result-jq1 .wrong-ans').remove();
            $('#result-jq1 .show').remove();
            $('#result-jq1').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

            // jq2
        if(radio_button_value_jq2 == 1) {
              q_correct++;

            $('#result-jq2 .right-ans').remove();
            $('#result-jq2 .wrong-ans').remove();
            $('#result-jq2 .show').remove();
            $('#result-jq2').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq2 .right-ans').remove();
            $('#result-jq2 .wrong-ans').remove();
            $('#result-jq2 .show').remove();
            $('#result-jq2').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq3
        if(radio_button_value_jq3 == 1) {
              q_correct++;

            $('#result-jq3 .right-ans').remove();
            $('#result-jq3 .wrong-ans').remove();
            $('#result-jq3 .show').remove();
            $('#result-jq3').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong> <span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq3 .right-ans').remove();
            $('#result-jq3 .wrong-ans').remove();
            $('#result-jq3 .show').remove();
            $('#result-jq3').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq4
        if(radio_button_value_jq4 == 1) {
              q_correct++;

            $('#result-jq4 .right-ans').remove();
            $('#result-jq4 .wrong-ans').remove();
            $('#result-jq4 .show').remove();
            $('#result-jq4').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq4 .right-ans').remove();
            $('#result-jq4 .wrong-ans').remove();
            $('#result-jq4 .show').remove();
            $('#result-jq4').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // jq5
        if(radio_button_value_jq5 == 1) {
              q_correct++;

            $('#result-jq5 .right-ans').remove();
            $('#result-jq5 .wrong-ans').remove();
            $('#result-jq5 .show').remove();
            $('#result-jq5').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq5 .right-ans').remove();
            $('#result-jq5 .wrong-ans').remove();
            $('#result-jq5 .show').remove();
            $('#result-jq5').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // jq6
        if(radio_button_value_jq6 == 1) {
              q_correct++;

            $('#result-jq6 .right-ans').remove();
            $('#result-jq6 .wrong-ans').remove();
            $('#result-jq6 .show').remove();
            $('#result-jq6').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq6 .right-ans').remove();
            $('#result-jq6 .wrong-ans').remove();
            $('#result-jq6 .show').remove();
            $('#result-jq6').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // jq7
        if(checkbox_button_value_jq7_mul == 1) {
              q_correct++;

            $('#result-jq7 .right-ans').remove();
            $('#result-jq7 .wrong-ans').remove();
            $('#result-jq7 .show').remove();
            $('#result-jq7').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq7 .right-ans').remove();
            $('#result-jq7 .wrong-ans').remove();
            $('#result-jq7 .show').remove();
            $('#result-jq7').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq8
        if(radio_button_value_jq8 == 1) {
              q_correct++;
            $('#result-jq8 .right-ans').remove();
            $('#result-jq8 .wrong-ans').remove();
            $('#result-jq8 .show').remove();
            $('#result-jq8').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq8 .right-ans').remove();
            $('#result-jq8 .wrong-ans').remove();
            $('#result-jq8 .show').remove();
            $('#result-jq8').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }



        // temp start

        // jq9
        if(radio_button_value_jq9 == 1) {
              q_correct++;

            $('#result-jq9 .right-ans').remove();
            $('#result-jq9 .wrong-ans').remove();
            $('#result-jq9 .show').remove();
            $('#result-jq9').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq9 .right-ans').remove();
            $('#result-jq9 .wrong-ans').remove();
            $('#result-jq9 .show').remove();
            $('#result-jq9').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq10
        if(radio_button_value_jq10 == 1) {
              q_correct++;

            $('#result-jq10 .right-ans').remove();
            $('#result-jq10 .wrong-ans').remove();
            $('#result-jq10 .show').remove();
            $('#result-jq10').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq10 .right-ans').remove();
            $('#result-jq10 .wrong-ans').remove();
            $('#result-jq10 .show').remove();
            $('#result-jq10').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq11
        if(radio_button_value_jq11 == 1) {
              q_correct++;

            $('#result-jq11 .right-ans').remove();
            $('#result-jq11 .wrong-ans').remove();
            $('#result-jq11 .show').remove();
            $('#result-jq11').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq11 .right-ans').remove();
            $('#result-jq11 .wrong-ans').remove();
            $('#result-jq11 .show').remove();
            $('#result-jq11').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq12
        if(radio_button_value_jq12 == 1) {
              q_correct++;

            $('#result-jq12 .right-ans').remove();
            $('#result-jq12 .wrong-ans').remove();
            $('#result-jq12 .show').remove();
            $('#result-jq12').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq12 .right-ans').remove();
            $('#result-jq12 .wrong-ans').remove();
            $('#result-jq12 .show').remove();
            $('#result-jq12').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq13
        if(radio_button_value_jq13 == 1) {
              q_correct++;

            $('#result-jq13 .right-ans').remove();
            $('#result-jq13 .wrong-ans').remove();
            $('#result-jq13 .show').remove();
            $('#result-jq13').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq13 .right-ans').remove();
            $('#result-jq13 .wrong-ans').remove();
            $('#result-jq13 .show').remove();
            $('#result-jq13').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq14
        if(radio_button_value_jq14 == 1) {
              q_correct++;

            $('#result-jq14 .right-ans').remove();
            $('#result-jq14 .wrong-ans').remove();
            $('#result-jq14 .show').remove();
            $('#result-jq14').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq14 .right-ans').remove();
            $('#result-jq14 .wrong-ans').remove();
            $('#result-jq14 .show').remove();
            $('#result-jq14').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq15
        if(radio_button_value_jq15 == 1) {
              q_correct++;

            $('#result-jq15 .right-ans').remove();
            $('#result-jq15 .wrong-ans').remove();
            $('#result-jq15 .show').remove();
            $('#result-jq15').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq15 .right-ans').remove();
            $('#result-jq15 .wrong-ans').remove();
            $('#result-jq15 .show').remove();
            $('#result-jq15').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq16
        if(radio_button_value_jq16 == 1) {
              q_correct++;

            $('#result-jq16 .right-ans').remove();
            $('#result-jq16 .wrong-ans').remove();
            $('#result-jq16 .show').remove();
            $('#result-jq16').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq16 .right-ans').remove();
            $('#result-jq16 .wrong-ans').remove();
            $('#result-jq16 .show').remove();
            $('#result-jq16').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq17
        if(radio_button_value_jq17 == 1) {
              q_correct++;

            $('#result-jq17 .right-ans').remove();
            $('#result-jq17 .wrong-ans').remove();
            $('#result-jq17 .show').remove();
            $('#result-jq17').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq17 .right-ans').remove();
            $('#result-jq17 .wrong-ans').remove();
            $('#result-jq17 .show').remove();
            $('#result-jq17').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq18
        if(radio_button_value_jq18 == 1) {
              q_correct++;

            $('#result-jq18 .right-ans').remove();
            $('#result-jq18 .wrong-ans').remove();
            $('#result-jq18 .show').remove();
            $('#result-jq18').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq18 .right-ans').remove();
            $('#result-jq18 .wrong-ans').remove();
            $('#result-jq18 .show').remove();
            $('#result-jq18').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq19
        if(radio_button_value_jq19 == 1) {
              q_correct++;

            $('#result-jq19 .right-ans').remove();
            $('#result-jq19 .wrong-ans').remove();
            $('#result-jq19 .show').remove();
            $('#result-jq19').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq19 .right-ans').remove();
            $('#result-jq19 .wrong-ans').remove();
            $('#result-jq19 .show').remove();
            $('#result-jq19').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq20
        if(radio_button_value_jq20 == 1) {
              q_correct++;

            $('#result-jq20 .right-ans').remove();
            $('#result-jq20 .wrong-ans').remove();
            $('#result-jq20 .show').remove();
            $('#result-jq20').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq20 .right-ans').remove();
            $('#result-jq20 .wrong-ans').remove();
            $('#result-jq20 .show').remove();
            $('#result-jq20').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
 
        // temp end
 
        $('.m_r_r').remove();
          
        $('#quiz-result-message').append( "<p class='m_r_r alert alert-success'><strong>"+ q_correct +" Correct Answer out of 20 &nbsp; &nbsp;</strong> </p>" );
    });

// End #quiz-case-study-one

// Start #quiz-case-study-one-sub
   $('#quiz-case-study-one-sub').submit( function( event ) {

        var q_total = 0;
        var q_correct = 0;

        $("#see-video-jq21").hide(); 
        $("#see-video-jq22").hide(); 
 

        $("html").animate({ scrollTop: $('#quiz-result-message2').offset().top -60}, 600);
        event.preventDefault(); // Prevent from default submit button behaviour

    // will select the value
    radio_button_value_jq21 = getRadioValuejq21();  
    checkbox_button_value_jq22 = getCheckboxValuejq22();  


    // jq21
        if(radio_button_value_jq21 == 1) {
             q_correct++;

            $('#result-jq21 .right-ans').remove();
            $('#result-jq21 .wrong-ans').remove();
            $('#result-jq21 .show').remove();
            $('#result-jq21').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq21 .right-ans').remove();
            $('#result-jq21 .wrong-ans').remove();
            $('#result-jq21 .show').remove();
            $('#result-jq21').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq22
        if(checkbox_button_value_jq22 == 1) {
              q_correct++;

            $('#result-jq22 .right-ans').remove();
            $('#result-jq22 .wrong-ans').remove();
            $('#result-jq22 .show').remove();
            $('#result-jq22').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#result-jq22 .right-ans').remove();
            $('#result-jq22 .wrong-ans').remove();
            $('#result-jq22 .show').remove();
            $('#result-jq22').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // temp end 

        $('.m_r_r2').remove();
          
        $('#quiz-result-message2').append( "<p class='m_r_r2 alert alert-success'><strong>"+ q_correct +" Correct Answer out of 2 &nbsp; &nbsp;</strong> </p>" );
    });


// End #quiz-case-study-one-sub


 
    
         
        $('#result-jq1').on('click', '.show', function() {
            $("#see-video-jq1").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq1').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq2').on('click', '.show', function() {
            $("#see-video-jq2").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq2').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq3').on('click', '.show', function() {
            $("#see-video-jq3").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq3').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq4').on('click', '.show', function() {
            $("#see-video-jq4").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq4').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq5').on('click', '.show', function() {
            $("#see-video-jq5").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq5').offset().top -60}, 600);
                     return false;
            });
        });
        $('#result-jq6').on('click', '.show', function() {
            $("#see-video-jq6").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq6').offset().top -60}, 600);
                     return false;
            });
        });
        $('#result-jq7').on('click', '.show', function() {
            $("#see-video-jq7").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq7').offset().top -60}, 600);
                     return false;
            });
        });
        $('#result-jq8').on('click', '.show', function() {
            $("#see-video-jq8").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq8').offset().top -60}, 600);
                     return false;
            });
        });
        // temp start
        $('#result-jq9').on('click', '.show', function() {
            $("#see-video-jq9").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq9').offset().top -60}, 600);
                     return false;
            });
        }); 
        $('#result-jq10').on('click', '.show', function() {
            $("#see-video-jq10").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq10').offset().top -60}, 600);
                     return false;
            });
        }); 

        $('#result-jq11').on('click', '.show', function() {
            $("#see-video-jq11").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq11').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq12').on('click', '.show', function() {
            $("#see-video-jq12").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq12').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq13').on('click', '.show', function() {
            $("#see-video-jq13").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq13').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq14').on('click', '.show', function() {
            $("#see-video-jq14").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq14').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq15').on('click', '.show', function() {
            $("#see-video-jq15").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq15').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq16').on('click', '.show', function() {
            $("#see-video-jq16").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq16').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq17').on('click', '.show', function() {
            $("#see-video-jq17").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq17').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq18').on('click', '.show', function() {
            $("#see-video-jq18").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq18').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq19').on('click', '.show', function() {
            $("#see-video-jq19").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq19').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq20').on('click', '.show', function() {
            $("#see-video-jq20").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq20').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq21').on('click', '.show', function() {
            $("#see-video-jq21").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq21').offset().top -60}, 600);
                     return false;
            });
        });

        $('#result-jq22').on('click', '.show', function() {
            $("#see-video-jq22").slideToggle('slow',function(){
                    $("html").animate({ scrollTop: $('#result-jq22').offset().top -60}, 600);
                     return false;
            });
        });     


        // temp end
    function getRadioValuejq1 () {
        if( $('input[name=jq1]:radio:checked').length > 0 ) {
            return $('input[name=jq1]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    
    function getRadioValuejq2 () {
        if( $('input[name=jq2]:radio:checked').length > 0 ) {
            return $('input[name=jq2]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq3 () {
        if( $('input[name=jq3]:radio:checked').length > 0 ) {
            return $('input[name=jq3]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq4 () {
        if( $('input[name=jq4]:radio:checked').length > 0 ) {
            return $('input[name=jq4]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

    function getRadioValuejq5 () {
        if( $('input[name=jq5]:radio:checked').length > 0 ) {
            return $('input[name=jq5]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

    function getRadioValuejq6 () {
        if( $('input[name=jq6]:radio:checked').length > 0 ) {
            return $('input[name=jq6]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

    function getCheckboxValuejq7_mul() {
         
         var ans1 = $('#f1q7_max_uteroplacental').is(":checked");
         var ans2 = $('#f1q7_max_oxygenation').is(":checked");
         var ans3 = $('#f1q7_max_umbilical').is(":checked");
         var ans4 = $('#f1q7_max_uterine').is(":checked");
         var ans5 = $('#f1q7_support_maternal').is(":checked");
 
        if( (ans1) && (ans2) && (!ans3) && (!ans4) && (ans5) ) {
            //console.log("if" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 1;
            
        }
        else {
        // console.log("else" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 0;
        }
    }

    function getRadioValuejq8 () {
        if( $('input[name=jq8]:radio:checked').length > 0 ) {
            return $('input[name=jq8]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    // temp start
    function getRadioValuejq9 () {
        if( $('input[name=jq9]:radio:checked').length > 0 ) {
            return $('input[name=jq9]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq10 () {
        if( $('input[name=jq10]:radio:checked').length > 0 ) {
            return $('input[name=jq10]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq11 () {
        if( $('input[name=jq11]:radio:checked').length > 0 ) {
            return $('input[name=jq11]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq12 () {
        if( $('input[name=jq12]:radio:checked').length > 0 ) {
            return $('input[name=jq12]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq13 () {
        if( $('input[name=jq13]:radio:checked').length > 0 ) {
            return $('input[name=jq13]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq14 () {
        if( $('input[name=jq14]:radio:checked').length > 0 ) {
            return $('input[name=jq14]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq15 () {
        if( $('input[name=jq15]:radio:checked').length > 0 ) {
            return $('input[name=jq15]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq16 () {
        if( $('input[name=jq16]:radio:checked').length > 0 ) {
            return $('input[name=jq16]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq17 () {
        if( $('input[name=jq17]:radio:checked').length > 0 ) {
            return $('input[name=jq17]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq18 () {
        if( $('input[name=jq18]:radio:checked').length > 0 ) {
            return $('input[name=jq18]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq19 () {
        if( $('input[name=jq19]:radio:checked').length > 0 ) {
            return $('input[name=jq19]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq20 () {
        if( $('input[name=jq20]:radio:checked').length > 0 ) {
            return $('input[name=jq20]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getRadioValuejq21 () {
        if( $('input[name=jq21]:radio:checked').length > 0 ) {
            return $('input[name=jq21]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function getCheckboxValuejq22 () {
        var ans1 = $('#f1q22_max_uteroplacental').is(":checked");
        var ans2 = $('#f1q22_max_oxygenation').is(":checked");
        var ans3 = $('#f1q22_max_umbilical').is(":checked");
        var ans4 = $('#f1q22_reduce_uterine').is(":checked");
        var ans5 = $('#f1q22_support_maternal').is(":checked");
 
        if( (ans1) && (ans2) && (ans3) && (!ans4) && (ans5) ) {
            //console.log("if" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 1;
            
        }
        else {
        // console.log("else" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 0;
        }
    }

    // temp end


    // final end
}); // end of document ready

