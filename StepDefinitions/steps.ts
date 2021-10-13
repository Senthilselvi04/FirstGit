import { Given, Then, When } from "cucumber";
import { calculator } from "../PageObjects/calculatorObject";
import { async } from "q";
import { browser } from "protractor";
import { Angular } from "../PageObjects/AngularObject";
import chai from "chai";
import expect from "chai";

let calc = new calculator(); 
let angl = new Angular();
var expects = chai.expect;

Given('Navigate to calculator website', async ()=> {
    
   await  browser.get('http://juliemr.github.io/protractor-demo/');
    
  });

  Given('Navigate to {string} website', async (string)=> {
    if(string == "calculator")
    {
        await  browser.get('http://juliemr.github.io/protractor-demo/');  
    }
    else if(string == "AngularJS")
    {
        await browser.get("https://angularjs.org/");
    }
   
  });

  When('I add two numbers {string} and {string}', async (string, string2) =>{
           
        await calc.firstInput.sendKeys(string);  
        await calc.secondInput.sendKeys(string2);

  });

  Then('the output is displayed as {string}', async (string)=> {
    
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {
        expects(text).to.equal(string);
    })
    
  });

  When('Click on Angulario link', async ()=> {
      await  angl.angularlink.click();
  });


  Then('Type {string} in search box', async (string)=> {
   await angl.searchBox.sendKeys(string);
    browser.sleep(5000);
  });
