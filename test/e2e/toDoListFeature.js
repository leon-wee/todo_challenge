describe('To Do List', function() {

  var inputBox = element(by.model('toDoCtrl.inputTask'))
  var editBox = element.all(by.model('task.description'))
  var addTaskButton = element(by.className('add-btn'))
  var taskList = element.all(by.binding('task'))
  var deleteList = element.all(by.className('delete-btn'))
  var totalCount = element(by.className('total-count'))
  var checkBox = element.all(by.className('checkbox'))
  var clearCompleted = element(by.className('clear-completed'))
  var completedFilter = element(by.className('filter-completed'))


  describe('homepage', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('To do list')
    });

    it('start off with 0 total tasks', function() {
      expect(totalCount.getText()).toEqual('Total Tasks: /')
    });
  });

  describe('adding tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('shows the tasks when it is added', function() {
      inputBox.sendKeys('Buy some toiletries');
      addTaskButton.click();
      inputBox.sendKeys('Watch some TV')
      addTaskButton.click();
      expect(taskList.get(0).getText()).toEqual('Buy some toiletries')
    });

    it('clears search box when task has been added', function() {
      inputBox.sendKeys('Learn more ruby')
      addTaskButton.click();
      expect(inputBox.getText()).toEqual('')
    });

    it('contains a checkbox for each of them', function() {
      inputBox.sendKeys('Buy some toiletries');
      addTaskButton.click();
      expect(checkBox.get(0).isSelected()).toEqual(false)
      expect(checkBox.count()).toBe(1);
      checkBox.get(0).click();
      expect(checkBox.get(0).isSelected()).toEqual(true)
    });

    it('shows the total number of tasks', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      expect(totalCount.getText()).toEqual('Total Tasks: 2 / 2')
    });
  });

  describe('updating tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('updates tasks', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      browser.actions().doubleClick(taskList.get(0)).perform();
      editBox.get(0).sendKeys(' Finish economics homework');
      editBox.get(0).sendKeys(protractor.Key.ENTER);
      expect(taskList.get(0).getText()).toEqual('test1 Finish economics homework')
    });
  });

  describe('deleting tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('can delete specific task on the front-end', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      deleteList.get(0).click()
      expect(taskList.get(0).getText()).toEqual('test2')
      expect(totalCount.getText()).toEqual('Total Tasks: 1 / 1')
    });

    it('can clear completed tasks', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      inputBox.sendKeys('test3');
      addTaskButton.click();
      checkBox.get(0).click()
      checkBox.get(1).click()
      clearCompleted.click()
      expect(taskList.get(0).getText()).toEqual('test3')
      expect(totalCount.getText()).toEqual('Total Tasks: 1 / 1')
    });
  });

  describe('filters', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('by showing completed tasks', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      inputBox.sendKeys('test3');
      addTaskButton.click();
      checkBox.get(2).click();
      expect(checkBox.get(0).isSelected()).toBe(false)
      expect(checkBox.get(1).isSelected()).toBe(false)
      completedFilter.click()
      expect(totalCount.getText()).toEqual('Total Tasks: 1 / 3')
      expect(taskList.get(0).getText()).toEqual('test3')
    });

    it('by showing active tasks', function() {

    });

    it('by showing all tasks', function() {

    });
  });





});