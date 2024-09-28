// Function to get menteeId from URL query parameters
function getMenteeId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}
const menteeId = getMenteeId();
// Function to fetch bookings from the API
async function fetchBookings() {
  try {
    //const menteeId = getMenteeId();
    const response = await fetch(`http://localhost:4000/api/v1/booking?menteeId=${menteeId}`); // Notice the use of backticks here // Replace with your actual API endpoint
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (data.success) {
      return data.data;
    } else {
      console.error("Error fetching bookings:", data.err);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch data from the API:", error);
    return [];
  }
}

// Function to filter bookings based on menteeId
function filterBookingsByMentee(bookings, menteeId) {
  return bookings.filter(booking => booking.menteeId == menteeId);
}

// Function to generate booking item HTML
function generateBookingItem(booking) {
  let bgColorClass = ""; // Variable to store the background color class

  // Assign background color class based on booking status
  if (booking.status === "InProcess") {
    bgColorClass = "bg-green-500 text-black"; // Customize the color for your status types
  } else if (booking.status === "Pending") {
    bgColorClass = "bg-yellow-300 text-black";
  } else if (booking.status === "Cancelled") {
    bgColorClass = "bg-red-500 text-black";
  }

  const startDateTime = new Date(booking.start).toLocaleString();

  return `
    <div class="booking-item p-4 flex justify-between items-center rounded-lg shadow-sm relative border border-slate-700 ${bgColorClass}">
      <div>
        <p class="text-sm font-semibold">Booking ID: ${booking.id}</p>
        <p class="text-sm">Start: ${startDateTime}</p>
        <p class="text-sm">Status: ${booking.status}</p>
      </div>
      <div class="dropdown relative">
      <a href="http://127.0.0.1:5500/AnonRepo/frontend/room.html?room=${booking.id}&name=${menteeId}"
        <button  id="enterMeetingButton-${booking.id}" class="py-2 px-4 bg-gray-200 rounded-lg edit-button" href="abc.com" >Enter meeting</button>
        </a>
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

// Function to display bookings based on the menteeId
async function displayBookings() {
  const menteeId = getMenteeId(); // Get menteeId from query params
  const bookings = await fetchBookings(); // Fetch the bookings from the API
  const filteredBookings = filterBookingsByMentee(bookings, menteeId);
  
  const bookingsList = document.getElementById("bookings-list");
  bookingsList.innerHTML = ""; // Clear the list before appending new items

  if (filteredBookings.length > 0) {
    filteredBookings.forEach((booking) => {
      bookingsList.innerHTML += generateBookingItem(booking);
    });
  } else {
    bookingsList.innerHTML = '<p class="text-gray-600">No bookings available for this category.</p>';
  }
}

// Initial display of bookings
displayBookings();
// function constructMeetingRoom(bookingId) {
//   const baseURL = "http://127.0.0.1:5500/AnonRepo/frontend/room.html";
//   return `${baseURL}?room=${encodeURIComponent(bookingId)}&name=${menteeId}`;
// }

// // Add event listener for the "Enter meeting" button
// document.querySelectorAll('.edit-button').forEach(button => {
//   button.addEventListener('click', function () {
//     const bookingId = this.id.split('-').pop(); // Extract booking ID from button ID
//     const meetingURL = constructMeetingRoom(bookingId); // Construct meeting URL
//     window.location.href = meetingURL; // Redirect to the meeting URL
//   });
// });

// Event listeners for other UI components as needed...
function profileDiv(){
  document.getElementById('toggleImage').addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });
  }
  profileDiv();
  document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.getElementById('more-button');
    const moreMenu = document.getElementById('more-menu');

    // Toggle the visibility of the more menu when the button is clicked
    moreButton.addEventListener('click', function(event) {
        event.preventDefault();
        moreMenu.classList.toggle('hidden');
    });

    // Hide the more menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!moreButton.contains(event.target) && !moreMenu.contains(event.target)) {
            moreMenu.classList.add('hidden');
        }
    });
});

function setActiveTab() {
  const currentPath = window.location.pathname.split("/").pop(); // Get the current page filename
  const links = document.querySelectorAll('nav a'); // Get all links in the navigation

  links.forEach(link => {
    const href = link.getAttribute('href'); // Get the href of each link
    if (href === `./${currentPath}`) {
      link.classList.add('text-indigo-600'); // Add 'active' class or 'text-indigo-600' for active tab
      link.classList.add('bg-gray-100');
    } else {
      link.classList.remove('text-indigo-600'); // Remove 'active' class from others
      link.classList.remove('bg-gray-100');
    }
  });
}

// Run the function when the page loads
window.onload = setActiveTab;