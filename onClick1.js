var notifyUser = function() {
  alert('You just clicked the button');
}

$(document).click(function(e) {
  if (e.target.id !== "click-button") {
    notifyUser();
  }
});
