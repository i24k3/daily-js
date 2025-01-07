


function style(target = document.body, prop, value) {
  return target.style[prop] = value;
}

function eventListener(target, eventType, method) {
  return target.addEventListener(eventType, method);
}

const div = document.createElement('div');

style(div, 'backgroundColor', 'lightblue');
style(div, 'width', '77px');
style(div, 'height', '77px');

document.body.appendChild(div);

eventListener(div, 'mouseover', function () {
  setTimeout(() => {
  style(div, 'backgroundColor', 'lightpink');
  style(div, 'delay', '3');
  }, 70);
});

eventListener(div, 'mouseout', function () {
  setTimeout(() => {
  style(div, 'backgroundColor', 'lightblue')
  style(div, 'delay', '3');
  }, 70);
});
