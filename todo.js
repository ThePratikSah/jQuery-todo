let todos;  
let checkData = () => {
  if (localStorage.getItem('todos') !== null) {
    // load data here
    let demoTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(demoTodos);
    demoTodos.forEach(todo => {
      console.log(todo);
      $('.incomplete').append("<div class='card' onclick='removeTodo(this);'>" + todo + "</div>");
    });
  } else {
    todos = [];
    // since there is no todos, we will create a new
    $("input").on('keypress', e => {
      if (e.which === 13 && $("input").val() !== '') {
        console.log('Key pressed')
        let todo = $("input").val();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        $("input").val('');
        checkData();
      }
    })
  }
}

checkData();

// logic for removing from the todos list
let removeTodo = (a) => {
  $(a).remove();
  localStorage.setItem('todos', JSON.stringify(todos));
};