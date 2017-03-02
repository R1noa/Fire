//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .


function check() {
  var check = $('#form1').find('input');
  for (var i = 0; i < check.length; i++) {
    if (check[i].type == 'checkbox') {
      if (('#form1 input:checkbox:checked').length > 0) {
        $("#but_disabled1").removeAttr("disabled")
      }
      check[i].checked = true;

    }
  }
}
function uncheck() {
  var uncheck = $('#form1').find('input');
  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].type == 'checkbox') {
      $("#but_disabled1").attr("disabled", "disabled");
      uncheck[i].checked = false;
    }
  }
}
function check1() {
  var check = $('#form2').find('input');
  for (var i = 0; i < check.length; i++) {
    if (check[i].type == 'checkbox') {
      if (('#form2 input:checkbox:checked').length > 0) {
        $("#but_disabled2").removeAttr("disabled")
      }
      check[i].checked = true;
    }
  }
}
function uncheck1() {
  var uncheck = $('#form2').find('input');
  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].type == 'checkbox') {
      $("#but_disabled2").attr("disabled", "disabled");
      uncheck[i].checked = false;
    }
  }
}

$(document).ready(function(){
  $('#form1 input:checkbox').change(function () {
    if ($('#form1 input:checkbox:checked').length > 0) {
      $("#but_disabled1").removeAttr("disabled");
    } else {
      $("#but_disabled1").attr("disabled", "disabled");
    }
  });

  $('#form2 input:checkbox').change(function () {
    if ($('#form2 input:checkbox:checked').length > 0) {
      $("#but_disabled2").removeAttr("disabled");
    } else {
      $("#but_disabled2").attr("disabled", "disabled");
    }
  });
});
