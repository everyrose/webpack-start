import _ from 'lodash';
import './css/style.css';
import {printMe} from './print.js';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the ssss!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());