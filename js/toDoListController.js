toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    taskArray.push(self.inputTask);
    self.allTasks = taskArray
  };

  self.deleteTask = function(index) {
    taskArray.splice(index, 1)
  };


}]);