const filter = document.querySelector('#filter');
const section = document.querySelector('#states');
const stateCollections = document.querySelectorAll('.states-collection');

let total = document.querySelector('.nigeria_confirmed_cases').textContent;
let active = document.querySelector('.nigeria_active_cases').textContent;
let recovered = document.querySelector('.nigeria_discharged_cases').textContent;
let death = document.querySelector('.nigeria_death_cases').textContent;


// filter states
function filterStates(e) {
    const text = e.target.value.toLowerCase();
    stateCollections.forEach(function (eachState) {
        const item = eachState.firstElementChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            eachState.style.display = 'block';
        } else {
            eachState.style.display = 'none';
        }
    });
}

// add event listener for filter 
filter.addEventListener('keyup', filterStates);


// chart 
var ctx = document.getElementById('myChart');
const datasets = [Number(total), Number(active), Number(recovered), Number(death)];
var frameworks = ['Total', 'Active', 'Recovered', 'Death'];

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: frameworks,
        datasets: [{
            label: 'Covid19 stats',
            data: datasets,
            backgroundColor: [
                "#007BFF",
                "#F7D733",
                "#28A745",
                "#DC3545"
            ]
        }]
    },
})