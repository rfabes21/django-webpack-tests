// import * as Marionette from "backbone.marionette"
import sayHello = Utils.sayHello;
import view = Backbone.View;
import LayoutView = Marionette.LayoutView;


describe("my Suite", () =>{
    it("runs", (done) =>{
        console.log(sayHello("world!"));
        console.log("GOT HERE");
        expect(true).toBe(true);
        done();
    })
})
