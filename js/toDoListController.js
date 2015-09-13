toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    if (self.inputTask) {
      taskArray.push({ description: self.inputTask, editing: false });
      self.allTasks = taskArray
      self.inputTask = '';
    }
  };

  self.deleteTask = function(task) {
    var index = taskArray.indexOf(task);
    self.allTasks.splice(index, 1);
  };

  self.totalTasks = function() {
    return taskArray.length;
  };

  self.editTask = function(task) {
    task.editing = true;
  };

  self.doneEditing = function(task) {
    if(event.keyCode == 13 && task.description) {
      task.editing = false;
    }
  };


}]);