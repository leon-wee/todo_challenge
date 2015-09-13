describe('To Do List', function() {

  var inputBox = element(by.model('toDoCtrl.inputTask'))
  var editBox = element(by.model('task.description'))
  var addTaskButton = element(by.className('add-btn'))
  var taskList = element.all(by.binding('task'))
  var deleteList = element.all(by.className('delete-btn'))
  var totalCount = element(by.className('total-count'))


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

    it('contains a checkbox', function() {
      inputBox.sendKeys('Buy some toiletries');
      addTaskButton.click();
      var checkBoxCount = element.all(by.className('completed')).count();
      expect(checkBoxCount).toBe(1);
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
      editBox.sendKeys(' Finish economics homework');
      editBox.sendKeys(protractor.Key.ENTER);
      expect(taskList.get(0).getText()).toEqual('test1 Finish economics homework')
    });
  });

  describe('deleting tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('can delete the tasks on the front-end', function() {
      inputBox.sendKeys('test1');
      addTaskButton.click();
      inputBox.sendKeys('test2');
      addTaskButton.click();
      deleteList.get(0).click()
      expect(totalCount.getText()).toEqual('Total Tasks: 1 / 1')
    });
  });





});