$(document).ready(function () {
  let i = 0;
  // logic for adding to the todos list
  $("input").on("keypress", (e) => {
    if (e.which == 13 && $("input").val() != "") {
      let todo = $("input").val();
      $("input").val("");
      $(".incomplete").append(
        "<div class='card' onclick='removeTodo(this);' id='a" + i + "'>" + todo + "</div>");
      i++;
    }
  });
});

// logic for removing from the todos list
let removeTodo = (a) => {
  $(a).remove();
};
