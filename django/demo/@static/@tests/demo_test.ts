// import * as Marionette from "backbone.marionette"
import { sayHello } from '../@modules/utils';


describe("my Suite", () => {


    it("runs", (done) => {
        console.log(sayHello("world"))
        console.log("GOT HERE");
        expect(true).toBe(true);
        done();
    })
})
