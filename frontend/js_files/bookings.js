// Dummy booking data
const bookings = [
  {
    date: "Wed 28",
    time: "09:00 - 09:30",
    location: "Online",
    title: "30min call meeting Peer <> Leslie",
    participants: ["Peer", "Leslie"],
    status: "upcoming",
  },
  {
    date: "Wed 28",
    time: "09:00 - 09:30",
    location: "Online",
    title: "30min call meeting Peer <> Leslie",
    participants: ["Peer", "Leslie"],
    status: "upcoming",
  },
  {
    date: "Wed 28",
    time: "09:00 - 09:30",
    location: "Online",
    title: "30min call meeting Peer <> Leslie",
    participants: ["Peer", "Leslie"],
    status: "upcoming",
  },
  {
    date: "Wed 28",
    time: "09:00 - 09:30",
    location: "Online",
    title: "30min call meeting Peer <> Leslie",
    participants: ["Peer", "Leslie"],
    status: "upcoming",
  },
  {
    date: "Wed 28",
    time: "09:00 - 09:30",
    location: "Online",
    title: "30min call meeting Peer <> Leslie",
    participants: ["Peer", "Leslie"],
    status: "upcoming",
  },
  {
    date: "Fri 30",
    time: "15:20 - 16:20",
    location: "WeWork Paris",
    title: "Livn Product Demo",
    participants: ["John", "Jane", "Doe"],
    status: "pending",
  },
  {
    date: "Thu 29",
    time: "11:15 - 11:45",
    location: "Online",
    title: "30min call meeting Olivia, Liam <> Alban",
    participants: ["Olivia", "Liam", "Alban"],
    status: "recurring",
  },
  {
    date: "Mon 02",
    time: "11:15 - 11:45",
    location: "Online",
    title: "30min call meeting Yulia, Alvin <> Irina, Mae",
    participants: ["Yulia", "Alvin", "Irina", "Mae"],
    status: "past",
  },
  {
    date: "Tue 03",
    time: "10:45 - 11:45",
    location: "Online",
    title: "Livn Product Demo",
    participants: ["Alice", "Bob", "Charlie"],
    status: "cancelled",
  },
];

// Function to generate booking item HTML
// Function to generate booking item HTML
function generateBookingItem(booking) {
  let bgColorClass = ""; // Variable to store the background color class

  // Assign background color class based on booking status
  if (booking.status === "upcoming") {
    bgColorClass = "bg-green-500 text-black";
  } else if (booking.status === "pending") {
    bgColorClass = "bg-yellow-300 text-black";
  } else if (booking.status === "cancelled") {
    bgColorClass = "bg-red-500 text-black";
  } else if (booking.status === "recurring") {
    bgColorClass = "bg-blue-200 text-black"; // Optional for recurring
  } else if (booking.status === "past") {
    bgColorClass = "bg-gray-300 text-black"; // Optional for past
  }

  return `
        <div class="booking-item p-4 flex justify-between items-center rounded-lg shadow-sm relative border border-slate-700 ${bgColorClass}">
            <div>
                <p class="text-sm font-semibold">${booking.date}</p>
                <p class="text-sm">${booking.time} | ${booking.location}</p>
                <p class="text-sm">${booking.title}</p>
            </div>
            <div class="dropdown relative">
                <button class="py-2 px-4 bg-gray-200 rounded-lg edit-button">Edit</button>
                <div class="dropdown-content right-0 mt-2 rounded-lg shadow-lg">
                    <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Reschedule booking</a>
                    <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Request reschedule</a>
                    <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Edit location</a>
                    <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Invite people</a>
                    <a href="#" class="block px-4 py-1 text-sm text-red-500 hover:bg-gray-100">Cancel event</a>
                </div>
            </div>
        </div>
    `;
}

// Function to display bookings based on the selected tab
function displayBookings(tab) {
  const filteredBookings = bookings.filter((booking) => booking.status === tab);
  const bookingsList = document.getElementById("bookings-list");
  bookingsList.innerHTML = ""; // Clear the list before appending new items

  if (filteredBookings.length > 0) {
    filteredBookings.forEach((booking) => {
      bookingsList.innerHTML += generateBookingItem(booking);
    });
  } else {
    bookingsList.innerHTML =
      '<p class="text-gray-600">No bookings available for this category.</p>';
  }
}

// Initial display of upcoming bookings
displayBookings("upcoming");

// Function to handle tab switching
function switchTab(event) {
  // Remove active styles from all buttons
  tabButtons.forEach((button) => {
    button.classList.remove("bg-white", "text-black");
    button.classList.add("text-gray-700");
  });

  // Add active styles to the clicked button
  event.target.classList.remove("text-gray-700");
  event.target.classList.add("bg-white", "text-black");

  // Display bookings corresponding to the selected tab
  const selectedTab = event.target.getAttribute("data-tab");
  displayBookings(selectedTab);
}

// Add click event listener to each tab button
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((button) => {
  button.addEventListener("click", switchTab);
});

document.addEventListener("click", function (event) {
  // Close all dropdowns if clicked outside
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }

  // Toggle the clicked dropdown
  if (event.target.matches(".edit-button")) {
    const allDropdowns = document.querySelectorAll(".dropdown");
    allDropdowns.forEach((dropdown) => {
      if (dropdown !== event.target.closest(".dropdown")) {
        dropdown.classList.remove("active");
      }
    });

    const dropdown = event.target.closest(".dropdown");
    dropdown.classList.toggle("active");
  }
});
