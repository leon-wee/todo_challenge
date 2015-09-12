toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    taskArray.push(self.inputTask);
    self.allTasks = taskArray
  };

  self.updateTask = function(index) {
    self.taskArray[index] = self.editTask
  };


}]);