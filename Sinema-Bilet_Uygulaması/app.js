const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal()
       
    }
});

select.addEventListener("change",function(e){
    calculateTotal()
    console.log("change çalıştı");
})

function calculateTotal(){
    const selectedSeat = container.querySelectorAll(".seat.selected");
    let selectedSeatCount = selectedSeat.length;
    const selectedSeatArr = [];
    const seatArr = [];

    selectedSeat.forEach(function(seat){
        selectedSeatArr.push(seat)
    })

    //spread

    seats.forEach(function(seat){
        seatArr.push(seat)
    })
    let selectedSeatIndex = selectedSeatArr.map(function(seat){
        return seatArr.indexOf(seat);
    })

    console.log(selectedSeatIndex);

    count.innerText = selectedSeatCount
    amount.innerText = selectedSeatCount * select.value


    saveToLocalStorage(selectedSeatIndex)

}

function saveToLocalStorage(index){
    localStorage.setItem("selectedSeats",JSON.stringify(index));
    localStorage.setItem("selectedMovieIndex",select.selectedSeatIndex)
}
function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex != null){
        select.selectedMovieIndex = selectedMovieIndex;
    }
}