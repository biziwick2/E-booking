let hostels = [];

function registerUser() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;

    alert(name + " registered as " + role);
}

function addHostel() {
    let name = document.getElementById("hostelName").value;
    let location = document.getElementById("location").value;
    let price = document.getElementById("price").value;
    let subscription = document.getElementById("subscription").value;

    if (subscription === "basic") {
        alert("Basic subscription selected. Payment required.");
    } else {
        alert("Premium subscription selected. Payment required.");
    }

    let hostel = {
        name: name,
        location: location,
        price: price
    };

    hostels.push(hostel);
    displayHostels();
}

function displayHostels() {
    let list = document.getElementById("hostelList");
    list.innerHTML = "";

    hostels.forEach((hostel, index) => {
        list.innerHTML += `
            <div class="hostel-card">
                <h3>${hostel.name}</h3>
                <p>Location: ${hostel.location}</p>
                <p>Price: MWK ${hostel.price}</p>
                <button onclick="bookHostel(${index})">Book Now</button>
            </div>
        `;
    });
}

function bookHostel(index) {
    alert("Booking confirmed for " + hostels[index].name);
}