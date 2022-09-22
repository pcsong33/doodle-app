// Toggles between the available, maybe, and not available glyph symboles
function tristate(id) {
  var icon = document.getElementById(id);
  switch (icon.className) {
    case "glyphicon glyphicon-ok-sign":
      icon.classList.toggle("maybe");
      break;
    case "glyphicon glyphicon-ok-sign maybe":
      icon.classList.toggle("glyphicon-ok-sign");
      icon.classList.toggle("maybe");
      icon.classList.toggle("glyphicon-remove");
      break;
    case "glyphicon glyphicon-remove":
      icon.classList.toggle("glyphicon-remove");
      icon.classList.toggle("glyphicon-ok-sign");
      break;
    default:
      // display the current value if it's unexpected
      alert(control.value);
  }
  // Enables submit button after the users has toggled a setting
  document.getElementById("submit").setAttribute("href", "submitted.html");
  document.getElementById("button").style.backgroundColor = "green";
}
