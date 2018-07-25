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
      var main = document.getElementById('main');
      var sMenuBox = document.getElementById('sMenuBox');
      var cL1 = document.getElementById('cL1');
      var cL2 = document.getElementById('cL2');
      var cL3 = document.getElementById('cL3');
      var cL4 = document.getElementById('cL4');
      var cL5 = document.getElementById('cL5');
      if (sMenuBox.style.width === "0%") {
        main.style.left = '20%';
        main.style.width = '80%';
        sMenuBox.style.width = '20%';
        cL1.style.width = '45.6%';
        cL2.style.width = '45.6%';
        cL3.style.width = '45.6%';
        cL3.style.display = 'none';
        cL4.style.width = '45.6%';
        cL5.style.width = '45.6%';
      } else {
        main.style.left = '0%';
        main.style.width = '100%';
        sMenuBox.style.width = '0%';
        cL1.style.width = '17.5%';
        cL2.style.width = '17.5%';
        cL3.style.width = '17.5%';
        cL3.style.display = 'inline-block';
        cL4.style.width = '17.5%';
        cL5.style.width = '17.5%';
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


    function disable() {
      document.getElementById("dateSet").disabled = true;
    };
    var startTime = document.getElementById('startTime');
    startTime.addEventListener('click', disable);

    function disable2() {
      document.getElementById("appt-time").disabled = true;
    };
    var startTime = document.getElementById('startTime');
    startTime.addEventListener('click', disable2);
    
    function unDisable() {
      document.getElementById("dateSet").disabled = false;
    };
    var setTime = document.getElementById('setTime');
    setTime.addEventListener('click', unDisable);

    function unDisable2() {
      document.getElementById("appt-time").disabled = false;
    };
    var setTime = document.getElementById('setTime');
    setTime.addEventListener('click', unDisable2);


    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.datepicker');
    //   var instances = M.Datepicker.init(elems, {
    //     format: 'yyyy. mm. dd',
    //     defaultDate: new Date(),
    //     setDefaultDate: true
    //   });
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.timepicker');
    //   var instances = M.Timepicker.init(elems, {
    //     defaultTime: 'now',
    //   });
    // });

  }
  component();