import { Console } from "console";
import { After, Before, Status } from "cucumber";
import { browser } from "protractor";

Before({tags: "@calculatortesting"}, function () {
   
    browser.manage().window().maximize();
  });

  After({tags: "@calculatortesting"}, function () {
   
    console.log("calculator testing is completed");
  });

  Before({tags: "@ANavigatingToAngularWebsite"}, function () {
   
    browser.manage().window().maximize();
  });

  After({tags: "@NavigatingToAngularWebsite"}, function () {
   
    console.log("Angular testing is completed");
  });

  
  After(async function (scenario) {
   
    console.log("Testing is completed");

    if(scenario.result.status=== Status.FAILED){
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot,'image/png');
    }

  });