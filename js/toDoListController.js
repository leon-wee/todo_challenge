toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    if (_isTaskDuplicated()) {
      taskArray.push(self.inputTask);
      self.allTasks = taskArray
      self.inputTask = '';
    }
  };

  self.deleteTask = function(index) {
    taskArray.splice(index, 1)
  };

  self.totalTasks = function() {
    return self.allTasks.length
  };

  self.updateTask = function(index) {
    taskArray[index] = self.editInput
    self.allTasks = taskArray;
  };

  var _isTaskDuplicated = function() {
    return taskArray.indexOf(self.inputTask) === -1
  };


}]);