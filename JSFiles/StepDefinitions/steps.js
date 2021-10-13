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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculatorObject_1 = require("../PageObjects/calculatorObject");
const protractor_1 = require("protractor");
const AngularObject_1 = require("../PageObjects/AngularObject");
const chai_1 = __importDefault(require("chai"));
let calc = new calculatorObject_1.calculator();
let angl = new AngularObject_1.Angular();
var expects = chai_1.default.expect;
(0, cucumber_1.Given)('Navigate to calculator website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
(0, cucumber_1.Given)('Navigate to {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calculator") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJS") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
(0, cucumber_1.When)('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstInput.sendKeys(string);
    yield calc.secondInput.sendKeys(string2);
}));
(0, cucumber_1.Then)('the output is displayed as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expects(text).to.equal(string);
    });
}));
(0, cucumber_1.When)('Click on Angulario link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield angl.angularlink.click();
}));
(0, cucumber_1.Then)('Type {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield angl.searchBox.sendKeys(string);
    protractor_1.browser.sleep(5000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0VBQTZEO0FBRTdELDJDQUFxQztBQUNyQyxnRUFBdUQ7QUFDdkQsZ0RBQXdCO0FBR3hCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO0FBQ3pCLElBQUksT0FBTyxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFMUIsSUFBQSxnQkFBSyxFQUFDLGdDQUFnQyxFQUFFLEdBQVEsRUFBRTtJQUUvQyxNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFakUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZ0JBQUssRUFBQyw4QkFBOEIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3BELElBQUcsTUFBTSxJQUFJLFlBQVksRUFDekI7UUFDSSxNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDbkU7U0FDSSxJQUFHLE1BQU0sSUFBSSxXQUFXLEVBQzdCO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBRUgsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBRXBFLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMscUNBQXFDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUUxRCxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMseUJBQXlCLEVBQUUsR0FBUSxFQUFFO0lBQ3RDLE1BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsSUFBQSxlQUFJLEVBQUMsNkJBQTZCLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNuRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==