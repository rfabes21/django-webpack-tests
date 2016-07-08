import * as Marionette from 'backbone.marionette';
import * as Promise from 'bluebird';
import sayHello = Utils.sayHello;

var name = "home";
var view = new Marionette.View();


export function foo(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        resolve(true);
    })
}

function bar(){

}

function baz(){

}

foo()
.then(data => {
    console.log(data);
})
