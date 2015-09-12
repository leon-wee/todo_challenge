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

  describe('tasks', function() {
    beforeEach(function() {
      ctrl.inputTask = "Do my laundry"
      ctrl.addTask()
    });

    it('stores tasks in to do list', function() {
      expect(ctrl.allTasks[0]).toEqual('Do my laundry')
    });

    it('will not allow you to add an identical task', function() {
      ctrl.inputTask = "Do my laundry"
      ctrl.addTask()
      expect(ctrl.allTasks).toEqual(['Do my laundry'])
    });

    it('can delete task on the list', function() {
      ctrl.deleteTask(0);
      expect(ctrl.allTasks).toEqual([])
    });

    it('updates the task', function() {
      ctrl.editInput = "Get some ice cream for dinner"
      ctrl.updateTask(0);
      expect(ctrl.allTasks[0]).toEqual("Get some ice cream for dinner")

    });

  });



});