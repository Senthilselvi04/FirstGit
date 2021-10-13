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
const protractor_1 = require("protractor");
const AngularObject_1 = require("./PageObjects/AngularObject");
const calculatorObject_1 = require("./PageObjects/calculatorObject");
describe('Chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculatorObject_1.calculator();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstInput.sendKeys("3");
        yield calc.secondInput.sendKeys("7");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        protractor_1.browser.sleep(5000);
    }));
    it('open angularJS website', () => __awaiter(void 0, void 0, void 0, function* () {
        let angl = new AngularObject_1.Angular();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield angl.angularlink.click();
        yield angl.searchBox.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFFckMsK0RBQXNEO0FBQ3RELHFFQUE0RDtBQUU1RCxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRSxFQUFFO0lBR2hDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRyxHQUFPLEVBQUU7UUFFcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBVSxFQUFFLENBQUM7UUFFNUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN6RCxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFPLEVBQUU7UUFFdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFDekIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTCxDQUFDLENBQUMsQ0FBQSJ9