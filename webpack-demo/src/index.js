import _ from 'lodash';
import './index.scss';
import Icon from './ico.png';

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack!!!!'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());