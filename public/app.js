const filter = document.querySelector('#filter');

// fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
    .then((response) => response.json())
    .then((response) => {
        // declare required variables
        const nigeria = response.data;
        const section = document.querySelector('.states');

        const states = response.data.states;
        states.forEach(state => {
            // create div, h6 and p el
            const div1 = document.createElement('div');
            const card = document.createElement('div');

            const cardHeader = document.createElement('div');
            const cardBody = document.createElement('div');

            const cardBodyDiv = document.createElement('div');
            const innerDiv1 = document.createElement('div');
            const innerDiv2 = document.createElement('div');
            const innerDiv3 = document.createElement('div');
            const innerDiv4 = document.createElement('div');

            const confirmedTitle = document.createElement('span');
            const confirmedText = document.createElement('span');

            const activeTitle = document.createElement('span');
            const activeText = document.createElement('span');

            const recoveredTitle = document.createElement('span');
            const recoveredText = document.createElement('span');

            const deathTitle = document.createElement('span');
            const deathText = document.createElement('span');

            // add classes to them
            div1.className = 'col-sm-6 states-collection';
            card.className = 'card mb-3 text-white border border-light rounded';
            cardHeader.className = 'card-header text-white bg-dark'
            cardBody.className = 'card-body';
            cardBodyDiv.className = 'text-dark row text';
            innerDiv1.className = 'card border-button col-sm-12'
            innerDiv2.className = 'card border-button col-sm-12'
            innerDiv3.className = 'card border-button col-sm-12'
            innerDiv4.className = 'card border-button col-sm-12'
            confirmedTitle.className = 'card-title ma-5';
            confirmedText.className = 'card-text text-primary ma-5';
            activeTitle.className = 'card-title ma-5';
            activeText.className = 'card-text text-warning ma-5';
            recoveredTitle.className = 'card-title ma-5 ';
            recoveredText.className = 'card-text text-success ma-5';
            deathTitle.className = 'card-title ma-5';
            deathText.className = 'card-text text-danger ma-5';

            // append content form our api
            cardHeader.appendChild(document.createTextNode(state.state));
            confirmedTitle.textContent = 'Confirmed';
            confirmedText.appendChild(document.createTextNode(state.confirmedCases));

            activeTitle.textContent = 'Active';
            activeText.appendChild(document.createTextNode(state.casesOnAdmission));

            recoveredTitle.textContent = 'Recovered';
            recoveredText.appendChild(document.createTextNode(state.discharged));

            deathTitle.textContent = 'Death';
            deathText.appendChild(document.createTextNode(state.death));

            // append to each other
            innerDiv1.appendChild(confirmedText);
            innerDiv1.appendChild(confirmedTitle);

            innerDiv2.appendChild(activeText);
            innerDiv2.appendChild(activeTitle);

            innerDiv3.appendChild(recoveredText);
            innerDiv3.appendChild(recoveredTitle);

            innerDiv4.appendChild(deathText);
            innerDiv4.appendChild(deathTitle);

            cardBodyDiv.appendChild(innerDiv1);
            cardBodyDiv.appendChild(innerDiv2);
            cardBodyDiv.appendChild(innerDiv3);
            cardBodyDiv.appendChild(innerDiv4);

            cardBody.appendChild(cardBodyDiv);

            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            div1.appendChild(card);


            section.appendChild(div1);

        });

        // get elements
        const el_nigeria = document.querySelector('.nigeria');
        const el_nigeria_confirmed_cases = document.querySelector('.nigeria_confirmed_cases');
        const el_nigeria_active_cases = document.querySelector('.nigeria_active_cases');
        const el_nigeria_discharged_cases = document.querySelector('.nigeria_discharged_cases');
        const el_nigeria_death_cases = document.querySelector('.nigeria_death_cases');

        // append data from api
        el_nigeria.textContent = 'Nigeria';
        el_nigeria_confirmed_cases.textContent = nigeria.totalConfirmedCases;
        el_nigeria_active_cases.textContent = nigeria.totalActiveCases;
        el_nigeria_discharged_cases.textContent = nigeria.discharged;
        el_nigeria_death_cases.textContent = nigeria.death

    })
    .catch(err => console.log(err))


// add event listener for filter 
filter.addEventListener('keyup', filterStates);

// filter states
function filterStates(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.states-collection').forEach(function (eachState) {
        const item = eachState.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            eachState.style.display = 'block';
        } else {
            eachState.style.display = 'none';
        }
    });
}