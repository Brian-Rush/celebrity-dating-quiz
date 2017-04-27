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

    var wiggle = $('#wiggle').val();
    var marsupial = $('#marsupial').val();
    var failure = false;

    if (!$("#wiggle").val()) {
      $('#helpBlock1').show();
      $('#wiggle').parent().addClass('has-error');
      failure = true;
    } else {
      $('#helpBlock1').hide();
      $('#wiggle').parent().removeClass('has-error');
    }
    if (!$('#urkel-false').prop('checked')) {
      $('#helpBlock2').show();
      $('#urkel-div').addClass('has-error');
      failure = true;
    } else {
      $('#helpBlock2').hide();
      $('#urkel-div').removeClass('has-error');
    }
    if (!$("#marsupial").val()) {
      $('#helpBlock3').show();
      $('#marsupial').parent().addClass('has-error');
      failure = true;
    } else {
      $('#helpBlock3').hide();
      $('#marsupial').parent().removeClass('has-error');
    }
    if (failure === true) {
      return;
    }

    if (wiggle === "jeff" && marsupial === "koala") {
      window.location = 'img/patsy.jpg';
    }
    if (wiggle === "sam" && marsupial === "opossum") {
      window.location = 'img/patsy.jpg';
    }
    if (wiggle === "phil" && marsupial === "echidna") {
      window.location = 'img/patsy.jpg';
    }
    if (wiggle === "greg" && marsupial === "kangaroo") {
      window.location = 'img/patsy.jpg';
    }

    if (wiggle === "jeff" && marsupial === "kangaroo") {
      window.location = 'img/gilbert.jpg';
    }
    if (wiggle === "murray" && marsupial === "koala") {
      window.location = 'img/gilbert.jpg';
    }
    if (wiggle === "phil" && marsupial === "opossum") {
      window.location = 'img/gilbert.jpg';
    }
    if (wiggle === "greg" && marsupial === "echidna") {
      window.location = 'img/gilbert.jpg';
    }

    if (wiggle === "sam" && marsupial === "koala") {
      window.location = 'img/kenneth.jpg';
    }
    if (wiggle === "murray" && marsupial === "kangaroo") {
      window.location = 'img/kenneth.jpg';
    }
    if (wiggle === "jeff" && marsupial === "echidna") {
      window.location = 'img/kenneth.jpg';
    }
    if (wiggle === "greg" && marsupial === "opossum") {
      window.location = 'img/kenneth.jpg';
    }

    if (wiggle === "phil" && marsupial === "koala") {
      window.location = 'img/roseanne.jpg';
    }
    if (wiggle === "sam" && marsupial === "kangaroo") {
      window.location = 'img/roseanne.jpg';
    }
    if (wiggle === "murray" && marsupial === "echidna") {
      window.location = 'img/roseanne.jpg';
    }
    if (wiggle === "jeff" && marsupial === "opossum") {
      window.location = 'img/roseanne.jpg';
    }

    if (wiggle === "greg" && marsupial === "koala") {
      window.location = 'img/shia.jpg';
    }
    if (wiggle === "phil" && marsupial === "kangaroo") {
      window.location = 'img/shia.jpg';
    }
    if (wiggle === "sam" && marsupial === "echidna") {
      window.location = 'img/shia.jpg';
    }
    if (wiggle === "murray" && marsupial === "opossum") {
      window.location = 'img/shia.jpg';
    }
  });
});
