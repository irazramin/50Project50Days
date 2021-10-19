const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('.count');
const total = document.querySelector('.total');
const movieList = document.getElementById('movie');

let ticketPrice = +movieList.value;

populatedUI();

//set selected movie and selected price in local storage
function getMovieData(selectedMovie, selectedMoviePrice) {
  localStorage.setItem('selectedMovie', selectedMovie);
  localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
}

movieList.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;

  getMovieData(e.target.selectedIndex, e.target.value);
  updateSeatAndPrice();
});

//pull out data from local storage 
function populatedUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, idx) => {
      if(selectedSeats.indexOf(idx) > -1){
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovie = localStorage.getItem('selectedMovie');
  movieList.selectedIndex = selectedMovie;
}


// update data 
function updateSeatAndPrice() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  console.log(seatsIndex);
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const seatLenght = selectedSeats.length;

  count.innerText = seatLenght;
  total.innerText = seatLenght * ticketPrice;
}

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSeatAndPrice();
  }
});

updateSeatAndPrice()