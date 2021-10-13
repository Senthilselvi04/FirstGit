"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Angular = void 0;
const protractor_1 = require("protractor");
class Angular {
    constructor() {
        this.angularlink = (0, protractor_1.element)(protractor_1.by.linkText("angular.io"));
        this.searchBox = (0, protractor_1.element)(protractor_1.by.css("input[type = 'search']"));
    }
}
exports.Angular = Angular;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhck9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0FuZ3VsYXJPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsT0FBTztJQUlwQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0E7QUFURCwwQkFTQyJ9