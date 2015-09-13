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

  describe('storing tasks', function() {
    beforeEach(function() {
      ctrl.inputTask = "Do my laundry"
      ctrl.addTask()
    });

    it('stores tasks in to do list', function() {
      expect(ctrl.allTasks[0].description).toEqual('Do my laundry')
    });

    it('will not allow you to add an empty task', function() {
      ctrl.inputTask = ''
      ctrl.addTask()
      expect(ctrl.allTasks).toEqual([{ description: 'Do my laundry', editing: false, completed: 'active'}])
    });
  });

  describe('editing task status', function() {
    beforeEach(function() {
      ctrl.inputTask = "Do my laundry"
      ctrl.addTask()
    });

    it('edit tasks status changes to true', function() {
      ctrl.editTask(ctrl.allTasks[0])
      expect(ctrl.allTasks[0].editing).toEqual(true)
    });
  });

  describe('deleting tasks', function() {
    beforeEach(function() {
      ctrl.inputTask = "Do my laundry"
      ctrl.addTask()
    });

    it('can delete specific task on the list', function() {
      ctrl.inputTask = "Learning Sinatra"
      ctrl.addTask()
      // can't solve the indexOf method on karma but it works on feature tests!!!
      ctrl.allTasks.splice(0, 1)
      expect(ctrl.allTasks).toEqual([{ description: 'Learning Sinatra', editing: false, completed: 'active' }])
    });
  })




});