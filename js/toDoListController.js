toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    if (_isTaskDuplicated()) {
      taskArray.push(self.inputTask);
      self.allTasks = taskArray
    }
  };

  self.deleteTask = function(index) {
    taskArray.splice(index, 1)
  };

  self.totalTasks = function() {
    return taskArray.length
  };

  var _isTaskDuplicated = function() {
    return taskArray.indexOf(self.inputTask) === -1
  };


}]);