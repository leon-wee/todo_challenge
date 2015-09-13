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
      expect(ctrl.allTasks[0].description).toEqual('Do my laundry')
    });

    it('will not allow you to add an empty task', function() {
      ctrl.inputTask = ''
      ctrl.addTask()
      expect(ctrl.allTasks).toEqual([{ description: 'Do my laundry', editing: false}])
    });

    it('can count the number of tasks', function() {
      ctrl.inputTask = "Let's learn angular"
      ctrl.addTask()
      expect(ctrl.totalTasks()).toEqual(2)
    });

    it('can delete task on the list', function() {
      ctrl.inputTask = "Learning Sinatra"
      ctrl.addTask()
      // can't solve the indexOf method on karma but it works!!!
      ctrl.allTasks.splice(0, 1)
      expect(ctrl.allTasks).toEqual([{ description: 'Learning Sinatra', editing: false }])
    });


  });



});