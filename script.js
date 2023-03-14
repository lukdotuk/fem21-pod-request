function buttonChange() {
  let width = screen.width;
  let buttonMobile = document.getElementById("btn-mobile");
  let button = document.getElementById("btn");

  if (width >= 640) {
    button.style.display = "initial";
    buttonMobile.style.display = "none";
  } else {
    button.style.display = "none";
    buttonMobile.style.display = "initial";
  }
}

function check() {
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let warning = document.getElementById("warning");
  let email = document.getElementById("email");

  if(email.value.match(format)) {
    warning.style.display = "none";
  } else {
    warning.style.display = "initial";
  }
}

buttonChange();
window.onresize = function() {
  buttonChange();
}



