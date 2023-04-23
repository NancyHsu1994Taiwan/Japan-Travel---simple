import { data } from './data.js';

function filterCounty(input) {
  //   console.log('ok');
  console.log(input);
  const west = document.querySelector('#west');
  const east = document.querySelector('#east');
  if (input == '關西') {
    west.setAttribute('class', 'd-flex');
    east.setAttribute('class', 'd-none');
  } else if (input == '關東') {
    east.setAttribute('class', 'd-flex');
    west.setAttribute('class', 'd-none');
  }
}

function filterCard(e) {
  console.log(e.target.value);
  let newData = data.filter((item) => {
    if (item.county == e.target.value) {
      return item;
    }
  });
  console.log(newData);
  renderCard(newData);
}

function renderCard(input) {
  console.log(input.length);
  //   let arr = [];
  //   for (let i = 0; i < input.length; i++) {
  //     arr.push(input[i]);
  //   }
  //   console.log(arr);
  let str = '';
  input.forEach((item) => {
    str += `         <div class="col-4">
                <div class="card bg-black border">
                  <h2 class="text-center text-white">${item.name}</h2>
                  <p class="text-center text-white">${item.part}</p>
                  <p class="text-center text-white">${item.county}</p>
                </div>
              </div>`;
  });
  const cardWrapper = document.querySelector('.card-wrapper');
  cardWrapper.innerHTML = str;
}

export { filterCounty, filterCard, renderCard };
