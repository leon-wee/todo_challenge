describe('ToDoListController', function() {
  beforeEach(module('List'));

  var ctrl;
  var scope;

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller('ToDoListController')
    scope = $rootScope
  }));

  var task = {
    'task': 'Do my laundry'
  }


  it('initializes with no task description', function() {
    expect(ctrl.taskDescription).toBeUndefined();
    expect(ctrl.inputTask).toBeUndefined();
  });

  it('stores tasks in to do list', function() {
    ctrl.inputTask = "Do my laundry"
    ctrl.addTask();
    scope.$apply();
    expect(ctrl.allTasks[0]).toEqual(task)
  });


});