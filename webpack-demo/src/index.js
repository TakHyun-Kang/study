import _ from 'lodash';
import './index.scss';

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

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {
        format: 'yyyy. mm. dd',
        defaultDate: new Date(),
        setDefaultDate: true
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems, {
        defaultTime: 'now',
      });
    });

  }
  component();