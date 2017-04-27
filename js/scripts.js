// Business Logic

var determine = function(wiggle, marsupial) {
  if (wiggle === "jeff" && marsupial === "koala") {
    return 'img/patsy.jpg';
  }
  if (wiggle === "sam" && marsupial === "opossum") {
    return'img/patsy.jpg';
  }
  if (wiggle === "phil" && marsupial === "echidna") {
    return 'img/patsy.jpg';
  }
  if (wiggle === "greg" && marsupial === "kangaroo") {
    return 'img/patsy.jpg';
  }

  if (wiggle === "jeff" && marsupial === "kangaroo") {
    return 'img/gilbert.jpg';
  }
  if (wiggle === "murray" && marsupial === "koala") {
    return 'img/gilbert.jpg';
  }
  if (wiggle === "phil" && marsupial === "opossum") {
    return 'img/gilbert.jpg';
  }
  if (wiggle === "greg" && marsupial === "echidna") {
    return 'img/gilbert.jpg';
  }

  if (wiggle === "sam" && marsupial === "koala") {
    return 'img/kenneth.jpg';
  }
  if (wiggle === "murray" && marsupial === "kangaroo") {
    return 'img/kenneth.jpg';
  }
  if (wiggle === "jeff" && marsupial === "echidna") {
    return 'img/kenneth.jpg';
  }
  if (wiggle === "greg" && marsupial === "opossum") {
    return 'img/kenneth.jpg';
  }

  if (wiggle === "phil" && marsupial === "koala") {
    return 'img/roseanne.jpg';
  }
  if (wiggle === "sam" && marsupial === "kangaroo") {
    return 'img/roseanne.jpg';
  }
  if (wiggle === "murray" && marsupial === "echidna") {
    return 'img/roseanne.jpg';
  }
  if (wiggle === "jeff" && marsupial === "opossum") {
    return 'img/roseanne.jpg';
  }

  if (wiggle === "greg" && marsupial === "koala") {
    return 'img/shia.jpg';
  }
  if (wiggle === "phil" && marsupial === "kangaroo") {
    return 'img/shia.jpg';
  }
  if (wiggle === "sam" && marsupial === "echidna") {
    return 'img/shia.jpg';
  }
  if (wiggle === "murray" && marsupial === "opossum") {
    return 'img/shia.jpg';
  }
}



// User Interface Logic
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

    window.location = determine(wiggle, marsupial);
  });
});
