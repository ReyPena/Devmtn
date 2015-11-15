$(document).ready(function(){
  var listo = [];
  // construction funckiton
  var Task =function(task){
    this.task = task;
    this.id = 'new';
  };

  var addTask = function(task){
    if (task) {
      task = new Task(task);
      listo.push(task);

      $('#newItemInput').val('');
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
    }
    $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');

  };
    $('#newTaskForm').hide();

  //here is the opens form
    $('#newListItem').on('click', function () {
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    });
    //here is the closes form
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    });

  $('#saveNewItem').on('click', function (e) {
      e.preventDefault();
      var task = $('#newItemInput').val().trim();
      addTask(task);
  });


  var advanceTask = function(task) {
    console.log(task);
	   var modified = task.textContent.trim()
	   for (var i = 0; i < listo.length; i++) {
	       if (listo[i].task === modified) {
	           if (listo[i].id === 'new') {
	               listo[i].id = 'inProgress';
	           } else if (listo[i].id === 'inProgress') {
	               listo[i].id = 'archived';
	           } else {
	               listo.splice(i, 1);
	           }
	           break;
	       }
	   }
	   task.remove();
	};

// this is inProgress so you can change this settings

  $(document).on('click', '#item', function(e) {
		e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        $('#currentList').append(this.outerHTML);

	});

  // and here is ver archived goes .....

  $(document).on('click', '#inProgress', function (e) {
      e.preventDefault();
      var task = this;
      task.id = "archived";
      var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
      advanceTask(task);
      $('#archivedList').append(changeIcon);
  });

  // here is th edelete function

  $(document).on('click', '#archived', function (e) {
      e.preventDefault();
      var task = this;
      advanceTask(task);
  });
})
