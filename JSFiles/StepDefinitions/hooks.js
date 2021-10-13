"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@calculatortesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
(0, cucumber_1.After)({ tags: "@calculatortesting" }, function () {
    console.log("calculator testing is completed");
});
(0, cucumber_1.Before)({ tags: "@ANavigatingToAngularWebsite" }, function () {
    protractor_1.browser.manage().window().maximize();
});
(0, cucumber_1.After)({ tags: "@NavigatingToAngularWebsite" }, function () {
    console.log("Angular testing is completed");
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Testing is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBaUQ7QUFDakQsMkNBQXFDO0FBRXJDLElBQUEsaUJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFFO0lBRWpDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGdCQUFLLEVBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGlCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsOEJBQThCLEVBQUMsRUFBRTtJQUU3QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxnQkFBSyxFQUFDLEVBQUMsSUFBSSxFQUFFLDZCQUE2QixFQUFDLEVBQUU7SUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBQSxnQkFBSyxFQUFDLFVBQWdCLFFBQVE7O1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVwQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFJLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQzNDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztJQUVILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==