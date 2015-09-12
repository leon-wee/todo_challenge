describe('To Do List', function() {

  var inputBox = element(by.model('toDoCtrl.inputTask'))
  var addTaskButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To do list')
  });

  it('shows the number of counts on the list', function() {
    inputBox.sendKeys('Buy some toiletries');
    addTaskButton.click();
    var tasks = element.all(by.repeater('task in toDoCtrl.allTasks'))
    expect(tasks.getText()).toEqual(['Buy some toiletries'])
  });
});