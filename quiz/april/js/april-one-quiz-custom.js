$(document).ready( function() {
    
    // Once the document is loadeded hide the quiz

    $("#quiz3-see-video-jq1").hide(); 
    $("#quiz3-see-video-jq2").hide(); 
    $("#quiz3-see-video-jq3").hide(); 
    $("#quiz3-see-video-jq4").hide(); 
    $("#quiz3-see-video-jq5").hide(); 
    $("#quiz3-see-video-jq6").hide(); 
    $("#quiz3-see-video-jq7").hide(); 
    $("#quiz3-see-video-jq8").hide(); 
    $("#quiz3-see-video-jq9").hide(); 
    
    $("#quiz3-see-video-jq10").hide(); 
    $("#quiz3-see-video-jq11").hide(); 
    $("#quiz3-see-video-jq12").hide(); 
    $("#quiz3-see-video-jq13").hide(); 
    $("#quiz3-see-video-jq14").hide(); 
    $("#quiz3-see-video-jq15").hide(); 
    $("#quiz3-see-video-jq16").hide(); 
    $("#quiz3-see-video-jq17").hide(); 
    
    $("#quiz3-see-video-jq18").hide(); 
    $("#quiz3-see-video-jq19").hide(); 
    $("#quiz3-see-video-jq20").hide(); 
    $("#quiz3-see-video-jq21").hide(); 

    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var quiz3_radio_button_value_jq1 = quiz3_getRadioValuejq1();
    var quiz3_radio_button_value_jq2 = quiz3_getRadioValuejq2();
    var quiz3_radio_button_value_jq3 = quiz3_getRadioValuejq3();
    var quiz3_radio_button_value_jq4 = quiz3_getRadioValuejq4();
    var quiz3_radio_button_value_jq5 = quiz3_getRadioValuejq5();
    var quiz3_radio_button_value_jq6 = quiz3_getRadioValuejq6();
    var quiz3_radio_button_value_jq7 = quiz3_getRadioValuejq7();
    var quiz3_checkbox_button_value_jq8_mul = quiz3_getCheckboxValuejq8_mul();
    var quiz3_radio_button_value_jq9 = quiz3_getRadioValuejq9();

    var quiz3_radio_button_value_jq10 = quiz3_getRadioValuejq9();
    var quiz3_radio_button_value_jq11 = quiz3_getRadioValuejq11();
    var quiz3_radio_button_value_jq12 = quiz3_getRadioValuejq12();
    var quiz3_radio_button_value_jq13 = quiz3_getRadioValuejq13();
    var quiz3_radio_button_value_jq14 = quiz3_getRadioValuejq14();
    var quiz3_radio_button_value_jq15 = quiz3_getRadioValuejq15();
    var quiz3_radio_button_value_jq16 = quiz3_getRadioValuejq16();
    var quiz3_radio_button_value_jq17 = quiz3_getRadioValuejq17();

    var quiz3_radio_button_value_jq18 = quiz3_getRadioValuejq18();
    var quiz3_radio_button_value_jq19 = quiz3_getRadioValuejq19();
    var quiz3_radio_button_value_jq20 = quiz3_getRadioValuejq20();
    var quiz3_radio_button_value_jq21 = quiz3_getRadioValuejq21();
 

   // start #quiz-case-study-one

    $('#quiz3-case-study').submit( function( event ) {

        var q_total = 0;
        var q_correct = 0;
 
        $("#quiz3-see-video-jq1").hide(); 
        $("#quiz3-see-video-jq2").hide(); 
        $("#quiz3-see-video-jq3").hide(); 
        $("#quiz3-see-video-jq4").hide(); 
        $("#quiz3-see-video-jq5").hide(); 
        $("#quiz3-see-video-jq6").hide(); 
        $("#quiz3-see-video-jq7").hide(); 
        $("#quiz3-see-video-jq8").hide(); 
        $("#quiz3-see-video-jq9").hide(); 

        $("#quiz3-see-video-jq10").hide(); 
        $("#quiz3-see-video-jq11").hide(); 
        $("#quiz3-see-video-jq12").hide(); 
        $("#quiz3-see-video-jq13").hide(); 
        $("#quiz3-see-video-jq14").hide(); 
        $("#quiz3-see-video-jq15").hide(); 
        $("#quiz3-see-video-jq16").hide(); 
        $("#quiz3-see-video-jq17").hide();

        $("#quiz3-see-video-jq18").hide(); 
        $("#quiz3-see-video-jq19").hide(); 
        $("#quiz3-see-video-jq20").hide(); 
        $("#quiz3-see-video-jq21").hide();   
        
 
        $("html, body").animate({ scrollTop: $('#quiz3-case-study').offset().top -60}, 600);
        event.preventDefault(); // Prevent from default submit button behaviour

        // Will get the newly selected value
        quiz3_radio_button_value_jq1 = quiz3_getRadioValuejq1();    
        quiz3_radio_button_value_jq2 = quiz3_getRadioValuejq2();
        quiz3_radio_button_value_jq3 = quiz3_getRadioValuejq3();  
        quiz3_radio_button_value_jq4 = quiz3_getRadioValuejq4();  
        quiz3_radio_button_value_jq5 = quiz3_getRadioValuejq5();  
        quiz3_radio_button_value_jq6 = quiz3_getRadioValuejq6();  
        quiz3_radio_button_value_jq7 = quiz3_getRadioValuejq7();  
        quiz3_checkbox_button_value_jq8_mul = quiz3_getCheckboxValuejq8_mul();      
        quiz3_radio_button_value_jq9 = quiz3_getRadioValuejq9();       

        quiz3_radio_button_value_jq10 = quiz3_getRadioValuejq10();    
        quiz3_radio_button_value_jq11 = quiz3_getRadioValuejq11();
        quiz3_radio_button_value_jq12 = quiz3_getRadioValuejq12();  
        quiz3_radio_button_value_jq13 = quiz3_getRadioValuejq13();  
        quiz3_radio_button_value_jq14 = quiz3_getRadioValuejq14();  
        quiz3_radio_button_value_jq15 = quiz3_getRadioValuejq15();  
        quiz3_radio_button_value_jq16 = quiz3_getRadioValuejq16();      
        quiz3_radio_button_value_jq17 = quiz3_getRadioValuejq17();   

        quiz3_radio_button_value_jq18 = quiz3_getRadioValuejq18();    
        quiz3_radio_button_value_jq19 = quiz3_getRadioValuejq19();
        quiz3_radio_button_value_jq20 = quiz3_getRadioValuejq20();  
        quiz3_radio_button_value_jq21 = quiz3_getRadioValuejq21();     

      

        // jq1
        if(quiz3_radio_button_value_jq1 == 1) {
             q_correct++;

            $('#quiz3-result-jq1 .right-ans').remove();
            $('#quiz3-result-jq1 .wrong-ans').remove();
            $('#quiz3-result-jq1 .show').remove();
            $('#quiz3-result-jq1').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq1 .right-ans').remove();
            $('#quiz3-result-jq1 .wrong-ans').remove();
            $('#quiz3-result-jq1 .show').remove();
            $('#quiz3-result-jq1').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

            // jq2
        if(quiz3_radio_button_value_jq2 == 1) {
              q_correct++;

            $('#quiz3-result-jq2 .right-ans').remove();
            $('#quiz3-result-jq2 .wrong-ans').remove();
            $('#quiz3-result-jq2 .show').remove();
            $('#quiz3-result-jq2').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq2 .right-ans').remove();
            $('#quiz3-result-jq2 .wrong-ans').remove();
            $('#quiz3-result-jq2 .show').remove();
            $('#quiz3-result-jq2').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq3
        if(quiz3_radio_button_value_jq3 == 1) {
              q_correct++;

            $('#quiz3-result-jq3 .right-ans').remove();
            $('#quiz3-result-jq3 .wrong-ans').remove();
            $('#quiz3-result-jq3 .show').remove();
            $('#quiz3-result-jq3').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong> <span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq3 .right-ans').remove();
            $('#quiz3-result-jq3 .wrong-ans').remove();
            $('#quiz3-result-jq3 .show').remove();
            $('#quiz3-result-jq3').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq4
        if(quiz3_radio_button_value_jq4 == 1) {
              q_correct++;

            $('#quiz3-result-jq4 .right-ans').remove();
            $('#quiz3-result-jq4 .wrong-ans').remove();
            $('#quiz3-result-jq4 .show').remove();
            $('#quiz3-result-jq4').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq4 .right-ans').remove();
            $('#quiz3-result-jq4 .wrong-ans').remove();
            $('#quiz3-result-jq4 .show').remove();
            $('#quiz3-result-jq4').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // jq5
        if(quiz3_radio_button_value_jq5 == 1) {
              q_correct++;

            $('#quiz3-result-jq5 .right-ans').remove();
            $('#quiz3-result-jq5 .wrong-ans').remove();
            $('#quiz3-result-jq5 .show').remove();
            $('#quiz3-result-jq5').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq5 .right-ans').remove();
            $('#quiz3-result-jq5 .wrong-ans').remove();
            $('#quiz3-result-jq5 .show').remove();
            $('#quiz3-result-jq5').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // jq6
        if(quiz3_radio_button_value_jq6 == 1) {
              q_correct++;

            $('#quiz3-result-jq6 .right-ans').remove();
            $('#quiz3-result-jq6 .wrong-ans').remove();
            $('#quiz3-result-jq6 .show').remove();
            $('#quiz3-result-jq6').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq6 .right-ans').remove();
            $('#quiz3-result-jq6 .wrong-ans').remove();
            $('#quiz3-result-jq6 .show').remove();
            $('#quiz3-result-jq6').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
           // jq7
        if(quiz3_radio_button_value_jq7 == 1) {
             q_correct++;

            $('#quiz3-result-jq7 .right-ans').remove();
            $('#quiz3-result-jq7 .wrong-ans').remove();
            $('#quiz3-result-jq7 .show').remove();
            $('#quiz3-result-jq7').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq7 .right-ans').remove();
            $('#quiz3-result-jq7 .wrong-ans').remove();
            $('#quiz3-result-jq7 .show').remove();
            $('#quiz3-result-jq7').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq8
        if(quiz3_checkbox_button_value_jq8_mul == 1) {
              q_correct++;

            $('#quiz3-result-jq8 .right-ans').remove();
            $('#quiz3-result-jq8 .wrong-ans').remove();
            $('#quiz3-result-jq8 .show').remove();
            $('#quiz3-result-jq8').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq8 .right-ans').remove();
            $('#quiz3-result-jq8 .wrong-ans').remove();
            $('#quiz3-result-jq8 .show').remove();
            $('#quiz3-result-jq8').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq9
        if(quiz3_radio_button_value_jq9 == 1) {
              q_correct++;
            $('#quiz3-result-jq9 .right-ans').remove();
            $('#quiz3-result-jq9 .wrong-ans').remove();
            $('#quiz3-result-jq9 .show').remove();
            $('#quiz3-result-jq9').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq9 .right-ans').remove();
            $('#quiz3-result-jq9 .wrong-ans').remove();
            $('#quiz3-result-jq9 .show').remove();
            $('#quiz3-result-jq9').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }



        // temp start

        // jq10
        if(quiz3_radio_button_value_jq10 == 1) {
              q_correct++;

            $('#quiz3-result-jq10 .right-ans').remove();
            $('#quiz3-result-jq10 .wrong-ans').remove();
            $('#quiz3-result-jq10 .show').remove();
            $('#quiz3-result-jq10').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq10 .right-ans').remove();
            $('#quiz3-result-jq10 .wrong-ans').remove();
            $('#quiz3-result-jq10 .show').remove();
            $('#quiz3-result-jq10').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq11
        if(quiz3_radio_button_value_jq11 == 1) {
              q_correct++;

            $('#quiz3-result-jq11 .right-ans').remove();
            $('#quiz3-result-jq11 .wrong-ans').remove();
            $('#quiz3-result-jq11 .show').remove();
            $('#quiz3-result-jq11').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq11 .right-ans').remove();
            $('#quiz3-result-jq11 .wrong-ans').remove();
            $('#quiz3-result-jq11 .show').remove();
            $('#quiz3-result-jq11').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq12
        if(quiz3_radio_button_value_jq12 == 1) {
              q_correct++;

            $('#quiz3-result-jq12 .right-ans').remove();
            $('#quiz3-result-jq12 .wrong-ans').remove();
            $('#quiz3-result-jq12 .show').remove();
            $('#quiz3-result-jq12').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq12 .right-ans').remove();
            $('#quiz3-result-jq12 .wrong-ans').remove();
            $('#quiz3-result-jq12 .show').remove();
            $('#quiz3-result-jq12').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq13
        if(quiz3_radio_button_value_jq13 == 1) {
              q_correct++;

            $('#quiz3-result-jq13 .right-ans').remove();
            $('#quiz3-result-jq13 .wrong-ans').remove();
            $('#quiz3-result-jq13 .show').remove();
            $('#quiz3-result-jq13').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq13 .right-ans').remove();
            $('#quiz3-result-jq13 .wrong-ans').remove();
            $('#quiz3-result-jq13 .show').remove();
            $('#quiz3-result-jq13').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq14
        if(quiz3_radio_button_value_jq14 == 1) {
              q_correct++;

            $('#quiz3-result-jq14 .right-ans').remove();
            $('#quiz3-result-jq14 .wrong-ans').remove();
            $('#quiz3-result-jq14 .show').remove();
            $('#quiz3-result-jq14').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq14 .right-ans').remove();
            $('#quiz3-result-jq14 .wrong-ans').remove();
            $('#quiz3-result-jq14 .show').remove();
            $('#quiz3-result-jq14').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq15
        if(quiz3_radio_button_value_jq15 == 1) {
              q_correct++;

            $('#quiz3-result-jq15 .right-ans').remove();
            $('#quiz3-result-jq15 .wrong-ans').remove();
            $('#quiz3-result-jq15 .show').remove();
            $('#quiz3-result-jq15').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq15 .right-ans').remove();
            $('#quiz3-result-jq15 .wrong-ans').remove();
            $('#quiz3-result-jq15 .show').remove();
            $('#quiz3-result-jq15').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq16
        if(quiz3_radio_button_value_jq16 == 1) {
              q_correct++;

            $('#quiz3-result-jq16 .right-ans').remove();
            $('#quiz3-result-jq16 .wrong-ans').remove();
            $('#quiz3-result-jq16 .show').remove();
            $('#quiz3-result-jq16').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq16 .right-ans').remove();
            $('#quiz3-result-jq16 .wrong-ans').remove();
            $('#quiz3-result-jq16 .show').remove();
            $('#quiz3-result-jq16').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq17
        if(quiz3_radio_button_value_jq17 == 1) {
              q_correct++;

            $('#quiz3-result-jq17 .right-ans').remove();
            $('#quiz3-result-jq17 .wrong-ans').remove();
            $('#quiz3-result-jq17 .show').remove();
            $('#quiz3-result-jq17').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq17 .right-ans').remove();
            $('#quiz3-result-jq17 .wrong-ans').remove();
            $('#quiz3-result-jq17 .show').remove();
            $('#quiz3-result-jq17').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq18
        if(quiz3_radio_button_value_jq18 == 1) {
              q_correct++;

            $('#quiz3-result-jq18 .right-ans').remove();
            $('#quiz3-result-jq18 .wrong-ans').remove();
            $('#quiz3-result-jq18 .show').remove();
            $('#quiz3-result-jq18').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq18 .right-ans').remove();
            $('#quiz3-result-jq18 .wrong-ans').remove();
            $('#quiz3-result-jq18 .show').remove();
            $('#quiz3-result-jq18').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq19
        if(quiz3_radio_button_value_jq19 == 1) {
              q_correct++;

            $('#quiz3-result-jq19 .right-ans').remove();
            $('#quiz3-result-jq19 .wrong-ans').remove();
            $('#quiz3-result-jq19 .show').remove();
            $('#quiz3-result-jq19').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq19 .right-ans').remove();
            $('#quiz3-result-jq19 .wrong-ans').remove();
            $('#quiz3-result-jq19 .show').remove();
            $('#quiz3-result-jq19').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq20
        if(quiz3_radio_button_value_jq20 == 1) {
              q_correct++;

            $('#quiz3-result-jq20 .right-ans').remove();
            $('#quiz3-result-jq20 .wrong-ans').remove();
            $('#quiz3-result-jq20 .show').remove();
            $('#quiz3-result-jq20').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq20 .right-ans').remove();
            $('#quiz3-result-jq20 .wrong-ans').remove();
            $('#quiz3-result-jq20 .show').remove();
            $('#quiz3-result-jq20').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq21
        if(quiz3_radio_button_value_jq21 == 1) {
              q_correct++;

            $('#quiz3-result-jq21 .right-ans').remove();
            $('#quiz3-result-jq21 .wrong-ans').remove();
            $('#quiz3-result-jq21 .show').remove();
            $('#quiz3-result-jq21').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz3-result-jq21 .right-ans').remove();
            $('#quiz3-result-jq21 .wrong-ans').remove();
            $('#quiz3-result-jq21 .show').remove();
            $('#quiz3-result-jq21').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        

 
        // temp end
  
        $('.m_r_r').remove();
          
        $('#quiz3-result-message').append( "<p class='m_r_r alert alert-success'><strong>"+ q_correct +" Correct Answer out of 21 &nbsp; &nbsp;</strong> </p>" );
    });
 
// code end -->

         
        $('#quiz3-result-jq1').on('click', '.show', function() {
            $("#quiz3-see-video-jq1").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq1').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq2').on('click', '.show', function() {
            $("#quiz3-see-video-jq2").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq2').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq3').on('click', '.show', function() {
            $("#quiz3-see-video-jq3").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq3').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq4').on('click', '.show', function() {
            $("#quiz3-see-video-jq4").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq4').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq5').on('click', '.show', function() {
            $("#quiz3-see-video-jq5").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq5').offset().top -60}, 600);
                     return false;
            });
        });
        $('#quiz3-result-jq6').on('click', '.show', function() {
            $("#quiz3-see-video-jq6").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq6').offset().top -60}, 600);
                     return false;
            });
        });
        $('#quiz3-result-jq7').on('click', '.show', function() {
            $("#quiz3-see-video-jq7").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq7').offset().top -60}, 600);
                     return false;
            });
        });
        $('#quiz3-result-jq8').on('click', '.show', function() {
            $("#quiz3-see-video-jq8").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq8').offset().top -60}, 600);
                     return false;
            });
        });
        // temp start
        $('#quiz3-result-jq9').on('click', '.show', function() {
            $("#quiz3-see-video-jq9").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq9').offset().top -60}, 600);
                     return false;
            });
        }); 
        $('#quiz3-result-jq10').on('click', '.show', function() {
            $("#quiz3-see-video-jq10").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq10').offset().top -60}, 600);
                     return false;
            });
        }); 

        $('#quiz3-result-jq11').on('click', '.show', function() {
            $("#quiz3-see-video-jq11").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq11').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq12').on('click', '.show', function() {
            $("#quiz3-see-video-jq12").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq12').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq13').on('click', '.show', function() {
            $("#quiz3-see-video-jq13").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq13').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq14').on('click', '.show', function() {
            $("#quiz3-see-video-jq14").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq14').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq15').on('click', '.show', function() {
            $("#quiz3-see-video-jq15").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq15').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq16').on('click', '.show', function() {
            $("#quiz3-see-video-jq16").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq16').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq17').on('click', '.show', function() {
            $("#quiz3-see-video-jq17").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq17').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq18').on('click', '.show', function() {
            $("#quiz3-see-video-jq18").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq18').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq19').on('click', '.show', function() {
            $("#quiz3-see-video-jq19").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq19').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq20').on('click', '.show', function() {
            $("#quiz3-see-video-jq20").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq20').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz3-result-jq21').on('click', '.show', function() {
            $("#quiz3-see-video-jq21").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz3-result-jq21').offset().top -60}, 600);
                     return false;
            });
        });

         


        // temp end
    function quiz3_getRadioValuejq1 () {
        if( $('input[name=quiz3-jq1]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq1]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    
    function quiz3_getRadioValuejq2 () {
        if( $('input[name=quiz3-jq2]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq2]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq3 () {
        if( $('input[name=quiz3-jq3]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq3]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq4 () {
        if( $('input[name=quiz3-jq4]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq4]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

    function quiz3_getRadioValuejq5 () {
        if( $('input[name=quiz3-jq5]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq5]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

    function quiz3_getRadioValuejq6 () {
        if( $('input[name=quiz3-jq6]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq6]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq7 () {
        if( $('input[name=quiz3-jq7]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq7]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getCheckboxValuejq8_mul() {
         
         var ans1 = $('#quiz3-f1q8_max_uteroplacental').is(":checked");
         var ans2 = $('#quiz3-f1q8_max_oxygenation').is(":checked");
         var ans3 = $('#quiz3-f1q8_max_umbilical').is(":checked");
         var ans4 = $('#quiz3-f1q8_max_uterine').is(":checked");
         var ans5 = $('#quiz3-f1q8_support_maternal').is(":checked");
 
        if( (ans1) && (ans2) && (ans3) && (!ans4) && (ans5) ) {
            //console.log("if" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 1;
            
        }
        else {
        // console.log("else" + ans1 + ans2 + ans3 + ans4 + ans5);
            return 0;
        }
    }

    function quiz3_getRadioValuejq9 () {
        if( $('input[name=quiz3-jq9]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq9]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    // temp start
    function quiz3_getRadioValuejq10 () {
        if( $('input[name=quiz3-jq10]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq10]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq11 () {
        if( $('input[name=quiz3-jq11]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq11]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq12 () {
        if( $('input[name=quiz3-jq12]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq12]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq13 () {
        if( $('input[name=quiz3-jq13]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq13]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq14 () {
        if( $('input[name=quiz3-jq14]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq14]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq15 () {
        if( $('input[name=quiz3-jq15]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq15]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq16 () {
        if( $('input[name=quiz3-jq16]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq16]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq17 () {
        if( $('input[name=quiz3-jq17]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq17]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq18 () {
        if( $('input[name=quiz3-jq18]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq18]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq19 () {
        if( $('input[name=quiz3-jq19]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq19]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq20 () {
        if( $('input[name=quiz3-jq20]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq20]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz3_getRadioValuejq21 () {
        if( $('input[name=quiz3-jq21]:radio:checked').length > 0 ) {
            return $('input[name=quiz3-jq21]:radio:checked').val();
        }
        else {
            return 0;
        }
    }

 
    // temp end


    // final end
}); // end of document ready

