const { browser, element } = require("protractor")
const { By } = require("selenium-webdriver")

describe('My First Test Suite',function(){
    it('My First Test Case',function(){

      browser.get("https://my.dnb.com/login")
      //browser.wait(3000)
      
      element(By.id('okta-signin-username')).sendKeys('prodtest.ankitkabrawalaabc.defgh@gmail.com')
      element(By.id('okta-signin-password')).sendKeys('$Testing5670')
      element(By.id('okta-signin-submit')).click()
      browser.sleep(2000)
    })
    
})