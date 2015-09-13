toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    if (_isTaskDuplicated()) {
      taskArray.push({ description: self.inputTask, editing: false });
      self.allTasks = taskArray
      self.inputTask = '';
    }
    console.log(self.allTasks[0].description)
  };

  self.deleteTask = function(index) {
    taskArray.splice(index, 1)
  };

  self.totalTasks = function() {
    return taskArray.length
  };

  self.updateTask = function(index) {
    taskArray[index].description = self.editInput
    self.allTasks = taskArray;
  };

  self.editTask = function(task) {
    task.editing = true;
  };

  self.doneEditing = function(task) {
    if(event.keyCode == 13 && task.description) {
      task.editing = false;
    }
  };

  var _isTaskDuplicated = function() {
    return taskArray.indexOf(self.inputTask) === -1
  };


}]);