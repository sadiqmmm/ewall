$(document).ready( function() {
    
    // Once the document is loadeded hide the quiz
    $("#quiz7-see-video-jq1").hide(); 
    $("#quiz7-see-video-jq2").hide(); 
    $("#quiz7-see-video-jq3").hide(); 
    $("#quiz7-see-video-jq4").hide(); 

    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var quiz7_radio_button_value_jq1 = quiz7_getRadioValuejq1();
    var quiz7_radio_button_value_jq2 = quiz7_getRadioValuejq2();
    var quiz7_radio_button_value_jq3 = quiz7_getRadioValuejq3();
    var quiz7_radio_button_value_jq4 = quiz7_getRadioValuejq4();

   // start #quiz-case-study-one

    $('#quiz7-case-study').submit( function( event ) {

        var q_total = 0;
        var q_correct = 0;
 
        $("#quiz7-see-video-jq1").hide(); 
        $("#quiz7-see-video-jq2").hide(); 
        $("#quiz7-see-video-jq3").hide(); 
        $("#quiz7-see-video-jq4").hide(); 
 
        $("html, body").animate({ scrollTop: $('#quiz7-case-study').offset().top -60}, 600);
        event.preventDefault(); // Prevent from default submit button behaviour

        // Will get the newly selected value
        quiz7_radio_button_value_jq1 = quiz7_getRadioValuejq1();    
        quiz7_radio_button_value_jq2 = quiz7_getRadioValuejq2();
        quiz7_radio_button_value_jq3 = quiz7_getRadioValuejq3();  
        quiz7_radio_button_value_jq4 = quiz7_getRadioValuejq4();  

        // jq1
        if(quiz7_radio_button_value_jq1 == 1) {
             q_correct++;

            $('#quiz7-result-jq1 .right-ans').remove();
            $('#quiz7-result-jq1 .wrong-ans').remove();
            $('#quiz7-result-jq1 .show').remove();
            $('#quiz7-result-jq1').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz7-result-jq1 .right-ans').remove();
            $('#quiz7-result-jq1 .wrong-ans').remove();
            $('#quiz7-result-jq1 .show').remove();
            $('#quiz7-result-jq1').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

            // jq2
        if(quiz7_radio_button_value_jq2 == 1) {
              q_correct++;

            $('#quiz7-result-jq2 .right-ans').remove();
            $('#quiz7-result-jq2 .wrong-ans').remove();
            $('#quiz7-result-jq2 .show').remove();
            $('#quiz7-result-jq2').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz7-result-jq2 .right-ans').remove();
            $('#quiz7-result-jq2 .wrong-ans').remove();
            $('#quiz7-result-jq2 .show').remove();
            $('#quiz7-result-jq2').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq3
        if(quiz7_radio_button_value_jq3 == 1) {
              q_correct++;

            $('#quiz7-result-jq3 .right-ans').remove();
            $('#quiz7-result-jq3 .wrong-ans').remove();
            $('#quiz7-result-jq3 .show').remove();
            $('#quiz7-result-jq3').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong> <span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz7-result-jq3 .right-ans').remove();
            $('#quiz7-result-jq3 .wrong-ans').remove();
            $('#quiz7-result-jq3 .show').remove();
            $('#quiz7-result-jq3').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }

        // jq4
        if(quiz7_radio_button_value_jq4 == 1) {
              q_correct++;

            $('#quiz7-result-jq4 .right-ans').remove();
            $('#quiz7-result-jq4 .wrong-ans').remove();
            $('#quiz7-result-jq4 .show').remove();
            $('#quiz7-result-jq4').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }
        else{
             
            $('#quiz7-result-jq4 .right-ans').remove();
            $('#quiz7-result-jq4 .wrong-ans').remove();
            $('#quiz7-result-jq4 .show').remove();
            $('#quiz7-result-jq4').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='show'>Click to [Show / Hide] answer with explanation</span></p>" );
        }


        // temp end
  
        $('.m_r_r').remove();
          
        $('#quiz7-result-message').append( "<p class='m_r_r alert alert-success'><strong>"+ q_correct +" Correct Answer out of 4 &nbsp; &nbsp;</strong> </p>" );
    });
 
// code end --> 
         
        $('#quiz7-result-jq1').on('click', '.show', function() {
            $("#quiz7-see-video-jq1").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz7-result-jq1').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz7-result-jq2').on('click', '.show', function() {
            $("#quiz7-see-video-jq2").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz7-result-jq2').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz7-result-jq3').on('click', '.show', function() {
            $("#quiz7-see-video-jq3").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz7-result-jq3').offset().top -60}, 600);
                     return false;
            });
        });

        $('#quiz7-result-jq4').on('click', '.show', function() {
            $("#quiz7-see-video-jq4").slideToggle('slow',function(){
                    $("html, body").animate({ scrollTop: $('#quiz7-result-jq4').offset().top -60}, 600);
                     return false;
            });
        });


        // temp end
    function quiz7_getRadioValuejq1 () {
        if( $('input[name=quiz7-jq1]:radio:checked').length > 0 ) {
            return $('input[name=quiz7-jq1]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    
    function quiz7_getRadioValuejq2 () {
        if( $('input[name=quiz7-jq2]:radio:checked').length > 0 ) {
            return $('input[name=quiz7-jq2]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz7_getRadioValuejq3 () {
        if( $('input[name=quiz7-jq3]:radio:checked').length > 0 ) {
            return $('input[name=quiz7-jq3]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    function quiz7_getRadioValuejq4 () {
        if( $('input[name=quiz7-jq4]:radio:checked').length > 0 ) {
            return $('input[name=quiz7-jq4]:radio:checked').val();
        }
        else {
            return 0;
        }
    }
    // temp end
    // final end
}); // end of document ready

