$(document).ready(function(){
  var todoApp = $('#todoApp');
  var todoTitle = $('<h1>jQuery Todo App</h1>');
  var todoInput = $("<input placeholder='Here is where you write the item'></input>");
  var todoAddItemButton = $('<button>Add Item</button>');
  var todoClearButton =$("<button>Remove All Compleate</buttom>");
  var todoList =  $('<ul></ul>');
  var todoItem = $('<li><li>');

// check as done

  todoApp.append(todoTitle);
  todoApp.append(todoInput);
  todoApp.append(todoAddItemButton);
  todoApp.append(todoList);
  todoApp.append(todoClearButton);

  todoClearButton.on("Click", function () {
    $(".done").Remove();
  })
  var handleAdd = function(){
    var userText = todoInput.val();
    if(userText){
      var newTodoItem = $('<li></li>');
      newTodoItem.text(userText);
      todoList.append(newTodoItem);
      todoInput.val("");
    }
  }

  todoInput.on("keyup", function(event){
    if (event.which == 13) {
      handleAdd();
    }
  });

  todoAddItemButton.on('click', handleAdd);
  todoList.on("click","li", function(){
    var todoItem = $(this);
    todoItem.toggleClass("done");
  });
})
