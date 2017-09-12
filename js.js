var str = "";

for(var i = 0; i < 8 ; i++) {
  str = '<img src="doge.png" alt="doge">';
  console.log(str);
  $('body').append(str);
}

$(document).ready(function() {
  $('img').click(function() {
    $(this).fadeTo(600, 0);
  })

  $('button').click(function() {
    $('img').fadeTo(600, 1);
    // location.reload();  *another way to reload page & bring images back
  })
})
