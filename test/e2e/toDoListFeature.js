describe('To Do List', function() {

  var inputBox = element(by.model('toDoCtrl.inputTask'))
  var addTaskButton = element(by.className('add-btn'))
  var taskList = element.all(by.css('li'))
  var deleteList = element.all(by.className('delete-btn'))
  var totalCount = element(by.className('total-count'))


  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To do list')
  });

  it('clears search box', function() {
    inputBox.sendKeys('Learn more ruby')
    addTaskButton.click();
    expect(inputBox.getText()).toEqual('')
  });

  it('shows the tasks when it is added', function() {
    inputBox.sendKeys('Buy some toiletries');
    addTaskButton.click();
    inputBox.sendKeys('Watch some TV')
    addTaskButton.click();
    expect(taskList.get(0).getText()).toEqual('Buy some toiletries')
  });

  it('shows the total number of tasks', function() {
    inputBox.sendKeys('test1');
    addTaskButton.click();
    inputBox.sendKeys('test2');
    addTaskButton.click();
    expect(totalCount.getText()).toEqual('Total Tasks: 2')
  });

  it('can delete the tasks on the front-end', function() {
    inputBox.sendKeys('test1');
    addTaskButton.click();
    inputBox.sendKeys('test2');
    addTaskButton.click();
    deleteList.get(0).click()
    expect(totalCount.getText()).toEqual('Total Tasks: 1')
  });

});