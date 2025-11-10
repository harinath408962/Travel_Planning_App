let tripArray = JSON.parse(localStorage.getItem("trips")) || [];

const form = document.getElementById("tripForm");
const list = document.getElementById("tripList");

function displayTrips() {
  list.innerHTML = "";
  tripArray.forEach((trip, index) => {
    const card = document.createElement("div");
    card.classList.add("trip-card");
    // card.innerHTML = `
    //   <p> <pre> <b>${trip.destination}</b>   ${trip.start} ➜ ${trip.end}   Budget:₹${trip.budget}  ${trip.notes} </pre></p>

    //   <button onclick="deleteTrip(${index})">Delete</button>
    // `;

    card.innerHTML = `
  <p> <pre> <b>${trip.destination}</b>   ${trip.start} ➜ ${trip.end}   Budget:₹${trip.budget}  ${trip.notes} </pre></p>
  <button onclick="deleteTrip(${index})">Delete</button>
    `;

    list.appendChild(card);
  });
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}


function deleteTrip(index) {
  tripArray.splice(index, 1);
  localStorage.setItem("trips", JSON.stringify(tripArray));
  displayTrips();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTrip = {
    destination: form.destination.value,
    start: form.start.value,
    end: form.end.value,
    budget: form.budget.value,
    notes: form.notes.value
  };
  tripArray.push(newTrip);
  localStorage.setItem("trips", JSON.stringify(tripArray));
  form.reset();
  displayTrips();
});

displayTrips();
