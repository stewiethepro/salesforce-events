
const connection = document.getElementById("connection");
const future = document.getElementById("future");

connection.addEventListener("click", function(e) {
  e.preventDefault();
  $("#events-container").hide()
  $("#connection-SO-container").show()
});

future.addEventListener("click", function(e) {
  e.preventDefault();
  $("#events-container").hide()
  $("#future-SO-container").show()
});

  // window.history.replaceState(null, null, "?mock")
