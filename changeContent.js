
const divConf = {
  type: "div",
  text: "mewo",
  id: "main",
  className: "container__main"
};



const container = document.querySelector(".container__main");
const heading = document.querySelector(".main__title");

// style
container.style.border = '1px solid black';
container.style.textAlign = 'center';

if ((divConf.type).toLowerCase() == 'div')
{
  container.textContent = undefined
}

// content
heading.textContent = `Holy shit!, It's working...`;

// create element(s)

const subHeading = document.createElement('h2');
subHeading.className = 'main__subTitle';
subHeading.style.textDecoration = 'underline';

subHeading.textContent = "It feels Motherfucking good!";

container.appendChild(subHeading);


