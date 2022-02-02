let name = $('#name');
let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');

$(btn).on('click', function() {
  if($(name).val() == "") {
    $(name).next('label').addClass('warning');
    setTimeout(function() {
      $('label').removeClass('warning');     
    },1500);
  }

  else if($(id).val() == "") {
    $(id).next('label').addClass('warning');
    setTimeout(function() {
      $('label').removeClass('warning');
    },1500);
  }

  else if($(pw).val() == "") {
    $(pw).next('label').addClass('warning');
    setTimeout(function() {
      $('label').removeClass('warning');
    },1500);
  }
});