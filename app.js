$(document).ready(function () {

  // logic for adding to the todos list
  $('input').on('keypress', (e) => {
    if (e.which == 13 && $('input').val() != '') {
      let todo = $('input').val();
      $('input').val("");
      $('.incomplete').append("<div class='card'>" + todo + "<i class='fas fa-trash'></i></div>");
    }
  })

  // logic for removing from the todos list
  $("<i class='fas fa-trash'></i>").click(() => {
    let itemToDelete = $(this).parent();
    itemToDelete.fadeOut(() => {
      itemToDelete.remove();
    });
  });
});