const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Save data from selection of user to localStorage
function saveMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Function to update the count of selected seats
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // This takes de index of seats and return a list
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    });

    // This save the seats into local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // This is the numbers of seats with .selected class
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// This will populate the UI using data saved at localStorage
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
}
// Event listener for selecting movies
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    saveMovieData(e.target.selectIndex, e.target.value);
    updateSelectedCount();
});

// Event listener for container class
// Will react to any click inside the container
container.addEventListener('click', e => {

    //if to select only no occupied seats
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();

    }

});