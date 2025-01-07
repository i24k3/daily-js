

const div = document.createElement('div');
function style(target, prop, value) {
  return target.style[prop] = value;
}

style(div, 'backgroundColor', 'lightblue');
style(div, 'width', '77px');
style(div, 'height', '77px');

document.body.appendChild(div);
