import View from "./view.js";
import Model from "./model.js";
import Controller from "./controller.js";

(function(){
    let view = new View();
    let model = new Model();
    let controller = new Controller(view, model);
    controller.init(); 
}());