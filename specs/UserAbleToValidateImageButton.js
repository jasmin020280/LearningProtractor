describe('User Able To Validate Image Button', function() {
   it('user Able To Validate Image Button', function() {
     
       // For Non-Angular Apps
       browser.ignoreSynchronization=true;  

       // Navigate to Linked In Homepage
       browser.get('https://www.linkedin.com');
       browser.driver.manage().window().maximize();

       // Enter Valid Email Address
       element(by.id("login-email")).sendKeys("jhossain2102@yahoo.com");
       //element(by.css(".login-email")).sendKeys("ProductsofMash@gmail.com");

       // Enter InValid Password
       element(by.id("login-password")).sendKeys("Kasbaelite020280#");
       //element(by.css(".login-password")).sendKeys("Wheaton17");

       //Click Sign In Button
       element(by.id("login-submit")).click();
       
       element(by.buttonText("ember3182-upload-photo")).click();
       
       // Validate Error Message
       //element(by.id("control_gen_1")).get("");

     
 
     /*
     element(by.('t')).sendKeys('write first protractor test');
     element(by.css('[value="add"]')).click();
 
     var todoList = element.all(by.repeater('todo in todoList.todos'));
     expect(todoList.count()).toEqual(3);
     expect(todoList.get(2).getText()).toEqual('write first protractor test');
 
     // You wrote your first test, cross it off the list
     todoList.get(2).element(by.css('input')).click();
     var completedAmount = element.all(by.css('.done-true'));
     expect(completedAmount.count()).toEqual(2);

     */
     
   });
 });