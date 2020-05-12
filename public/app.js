// fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
    .then((response) => response.json())
    .then((response) => {
        // declare required variables
        const nigeria = response.data;
        const abia = response.data.states[33];
        const imo = response.data.states[31];
        const enugu = response.data.states[27];
        const ebonyi = response.data.states[28];

        // get elements
        const el_nigeria = document.querySelector('.nigeria');
        const el_nigeria_confirmed_cases = document.querySelector('.nigeria_confirmed_cases');
        const el_nigeria_active_cases = document.querySelector('.nigeria_active_cases');
        const el_nigeria_discharged_cases = document.querySelector('.nigeria_discharged_cases');
        const el_nigeria_death_cases = document.querySelector('.nigeria_death_cases');

        const el_abia = document.querySelector('.abia')
        const el_abiaReport = document.querySelector('.abia__report')

        const el_imo = document.querySelector('.imo');
        const el_imoReport = document.querySelector('.imo__report')

        const el_enugu = document.querySelector('.enugu')
        const el_enuguReport = document.querySelector('.enugu__report')

        const el_ebonyi = document.querySelector('.ebonyi')
        const el_ebonyiReport = document.querySelector('.ebonyi__report')

        // append data from api
        el_nigeria.textContent = 'Nigeria';
        el_nigeria_confirmed_cases.textContent = nigeria.totalConfirmedCases;
        el_nigeria_active_cases.textContent = nigeria.totalActiveCases;
        el_nigeria_discharged_cases.textContent = nigeria.discharged;
        el_nigeria_death_cases.textContent = nigeria.death


        el_abia.textContent = abia.state;
        el_abiaReport.textContent = abia.confirmedCases;

        el_imo.textContent = imo.state;
        el_imoReport.textContent = imo.confirmedCases;

        el_enugu.textContent = enugu.state;
        el_enuguReport.textContent = enugu.confirmedCases;

        el_ebonyi.textContent = ebonyi.state;
        el_ebonyiReport.textContent = ebonyi.confirmedCases;
    })
    .catch(err => console.log(err))
