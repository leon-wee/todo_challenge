describe('ToDoListController', function() {
  beforeEach(module('List'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
  }));

  it('initializes with no task description', function() {
    expect(ctrl.taskDescription).toBeUndefined();
    expect(ctrl.inputTask).toBeUndefined();
  });

  it('stores tasks in to do list', function() {
    ctrl.inputTask = "Do my laundry"
    ctrl.addTask();
    expect(ctrl.allTasks[0]).toEqual('Do my laundry')
  });

  it('can delete task on the list', function() {
    ctrl.inputTask = "Do my laundry"
    ctrl.addTask();
    ctrl.deleteTask(0);
    expect(ctrl.allTasks).toEqual([])
  });


});