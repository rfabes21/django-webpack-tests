import * as Marionette from 'backbone.marionette';
import * as Promise from 'bluebird';

var name = "home";
var view = new Marionette.View();


export function foo(): Promise<string> {
    return new Promise<string>(resolve => {
        debugger;
        resolve("foo");
    })
}

function bar(){

}

function baz(){

}

foo()
.then( value => {
    console.log(value);
})
