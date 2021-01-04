const filter = document.querySelector('#filter'),
    section = document.querySelector('#states'),
    stateCollections = document.querySelectorAll('.states-collection'),

    total = document.querySelector('.nigeria_confirmed_cases').textContent,
    active = document.querySelector('.nigeria_active_cases').textContent,
    recovered = document.querySelector('.nigeria_discharged_cases').textContent,
    death = document.querySelector('.nigeria_death_cases').textContent;


// filter states
function filterStates(e) {
    const text = e.target.value.toLowerCase();
    stateCollections.forEach((eachState) => {
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
const ctx = document.getElementById('myChart'),
    datasets = [Number(total), Number(active), Number(recovered), Number(death)],
    frameworks = ['Total', 'Active', 'Recovered', 'Death'],

    myChart = new Chart(ctx, {
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
    });