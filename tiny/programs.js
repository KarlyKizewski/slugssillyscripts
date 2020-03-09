function helloMessage() {
  let guest = prompt('What is your name?', 'Yuki Cha');
  if (guest != null) {
    document.getElementById("welcome").innerHTML = 
    "Oおはよう " + guest + ", お元気ですか?";
  }
}

function revealFunction() {
  let x = document.getElementById("math-device");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function() {
  let url = $("#potato").attr('src');
  $('#myModal').on('hide.bs.moidal', function() {
    $('#potato').attr('src', '');
  });
  $('myModal').on('show.bs.modal', function() {
    $('potato').attr('src', url);
  });
});

document.cookie = 'cross-site-cookie=bar; SameSite=None';


