toDoList.controller('ToDoListController', [function() {

  var self = this;
  var taskArray = [];

  self.addTask = function() {
    taskArray.push({ 'task': self.inputTask });
    self.allTasks = taskArray
  };


}]);