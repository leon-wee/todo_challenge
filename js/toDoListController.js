toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    if (self.inputTask) {
      taskArray.push({ description: self.inputTask, editing: false, completed: 'active' });
      self.allTasks = taskArray
      self.inputTask = '';
    }
  };

  self.deleteTask = function(task) {
    var index = taskArray.indexOf(task);
    self.allTasks.splice(index, 1);
  };

  self.editTask = function(task) {
    task.editing = true;
  };

  self.doneEditing = function(task) {
    if(event.keyCode == 13 && task.description) {
      task.editing = false;
    }
  };

  self.clearCompleted = function() {
    for (var i = 0; i < self.allTasks.length; i++) {
      if (self.allTasks[i].completed === 'completed') {
        self.allTasks.splice(i, 1);
        i--;
      }
    }
  };


}]);