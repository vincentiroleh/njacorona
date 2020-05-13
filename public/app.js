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
            const cardTitle = document.createElement('h6');
            const cardText = document.createElement('p');

            // add classes to them
            div1.className = 'col-sm-6';
            card.className = 'card mb-3 text-white border border-light rounded';
            cardHeader.className = 'card-header bg-secondary'
            cardBody.className = 'card-body bg-dark ';
            cardTitle.className = 'card-title';
            cardText.className = 'card-text btn btn-outline-primary'

            // append content form our api
            cardHeader.appendChild(document.createTextNode(state.state));
            cardTitle.textContent = 'Confirmed';
            cardText.appendChild(document.createTextNode(state.confirmedCases));
            
            // append to each other
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText)

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
