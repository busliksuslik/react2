import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './index.css'

var p1 = new Promise( (resolve, reject) => {
    console.log("I tried so hard and got so far, but in the end it doesn't really matter")
    resolve();
})
p1.then(ReactDOM.render(<App/>, document.getElementById('root')))
