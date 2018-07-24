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


    var menu = function() {
      var sMenuBox = document.getElementById('sMenuBox');
      if (sMenuBox.style.width === "0px") {
        document.body.style.left = '200px';
        sMenuBox.style.width = '200px';
      } else {
        document.body.style.left = '0px';
        sMenuBox.style.width = '0px';
      }
    }
    var sideMenu = document.getElementById('sideMenu');
    sideMenu.addEventListener('click', menu);
    var closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', menu);

    var uName = document.getElementById('uName');
    uName.innerHTML = _.join(['Jeongeun Kwon'], ' ');

    var notice = document.getElementById('noticeNum');
    notice.innerHTML = _.join(['12'], ' ');
    
    var info = function() {
      var userInfo2 = document.getElementById('userInfo2');
      if (userInfo2.style.display === "none") {
        userInfo2.style.display = 'block';
      } else {
        userInfo2.style.display = 'none';
      }
    };
    var userInfo = document.getElementById('userInfo');
    userInfo.addEventListener('click', info);



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