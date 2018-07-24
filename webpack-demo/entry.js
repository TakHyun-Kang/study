import createDiv from './createDiv';

var diceNumber = -~(Math.random() * 6);
var diceDiv = createDiv(diceNumber);
document.body.appendChild(div);
if (module.hot) {
  module.hot.accept();
}