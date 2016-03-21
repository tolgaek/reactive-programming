var notifyUser = function() {
  alert('You just clicked the button');
}

document.getElementById('magic-button').onclick= function() {
  notifyUser();
}
