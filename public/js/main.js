const filter = document.querySelector('#filter');
const section = document.querySelector('#states');
const stateCollections = document.querySelectorAll('.states-collection');


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