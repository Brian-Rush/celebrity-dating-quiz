$(document).ready(function() {
  $("input#urkel-true").click(function() {
    window.location = "img/urkel.jpg";
  });

  //form submit handler
    //Do form validation (if field blank gives inline message).
    //evaluate field input. figure out logic (which combos go where)
    //show the appropriate div based on evaluation

  $("#celeb-form").submit(function(e) {
    e.preventDefault();

    if (!$("#wiggle").val()) {
      $('#helpBlock1').show();
      $('#wiggle').parent().addClass('has-error');
    } else {
      $('#helpBlock1').hide();
      $('#wiggle').parent().removeClass('has-error');
    }
    if (!$('#urkel-false').prop('checked')) {
      $('#helpBlock2').show();
      $('#urkel-div').addClass('has-error');
    } else {
      $('#helpBlock2').hide();
      $('#urkel-div').removeClass('has-error');
    }
    if (!$("#marsupial").val()) {
      $('#helpBlock3').show();
      $('#marsupial').parent().addClass('has-error');
    } else {
      $('#helpBlock3').hide();
      $('#marsupial').parent().removeClass('has-error');
    }
  });
});
