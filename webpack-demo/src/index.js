import _ from 'lodash';
import './index.scss';
import Icon from './ico.png';

function component() {
    var error = document.getElementById('errorNum');
    error.innerHTML = _.join(['0'], ' ');

    var progress = document.getElementById('progressNum');
    progress.innerHTML = _.join(['0'], ' ');

    var completed = document.getElementById('completedNum');
    completed.innerHTML = _.join(['0'], ' ');

    var reserved = document.getElementById('reservedNum');
    reserved.innerHTML = _.join(['0'], ' ');


    var uName = document.getElementById('uName');
    uName.innerHTML = _.join(['Jeongeun Kwon'], ' ');

    var notice = document.getElementById('noticeNum');
    notice.innerHTML = _.join(['12'], ' ');

    // element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());