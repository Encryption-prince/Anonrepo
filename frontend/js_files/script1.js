function toggleTab(tabName) {
  // Get all tab contents and hide them
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // Remove 'active' class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the clicked tab's content and add 'active' class to the corresponding button
  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`.tab-button[onclick="toggleTab('${tabName}')"]`)
    .classList.add("active");
}

document.getElementById("mentors").style.display = "block";

function mentorwaLogg(){
    const mentors = [
        {
          name: "Shruthi Venkatesh",
          title: "Senior Visual Designer at Postman Inc",
          sessions: "49 sessions (4 reviews)",
          img: "../frontend/assets/img1.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Jz Jennyzhang",
          title: "Founder at callmejz.ai,China University",
          sessions: "12 sessions (7 reviews)",
          img: "../frontend/assets/img2.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Vibha Finaviya",
          title: "Senior Application Developer at Cognizant Technology",
          sessions: "New mentor",
          img: "../frontend/assets/img3.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Akanksha Gupta",
          title: "Engineering Manager at Amazon",
          sessions: "New mentor",
          img: "../frontend/assets/img4.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Sheetal Bellare",
          title: "AVP (UX Strategist) at Angel One Finance",
          sessions: "63 sessions (40 reviews)",
          img: "../frontend/assets/img5.avif",
          experience: "5 years",
          attendance: "90%",
        },
      
        {
          name: "Shruthi Venkatesh",
          title: "Senior Visual Designer at Postman Inc",
          sessions: "49 sessions (4 reviews)",
          img: "../frontend/assets/img1.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Jz Jennyzhang",
          title: "Founder at callmejz.ai,China University",
          sessions: "12 sessions (7 reviews)",
          img: "../frontend/assets/img2.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Vibha Finaviya",
          title: "Senior Application Developer at Cognizant Technology",
          sessions: "New mentor",
          img: "../frontend/assets/img3.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Akanksha Gupta",
          title: "Engineering Manager at Amazon",
          sessions: "New mentor",
          img: "../frontend/assets/img4.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Sheetal Bellare",
          title: "AVP (UX Strategist) at Angel One Finance",
          sessions: "63 sessions (40 reviews)",
          img: "../frontend/assets/img5.avif",
          experience: "5 years",
          attendance: "90%",
        },
      
        {
          name: "Shruthi Venkatesh",
          title: "Senior Visual Designer at Postman Inc",
          sessions: "49 sessions (4 reviews)",
          img: "../frontend/assets/img1.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Jz Jennyzhang",
          title: "Founder at callmejz.ai,China University",
          sessions: "12 sessions (7 reviews)",
          img: "../frontend/assets/img2.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Vibha Finaviya",
          title: "Senior Application Developer at Cognizant Technology",
          sessions: "New mentor",
          img: "../frontend/assets/img3.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Akanksha Gupta",
          title: "Engineering Manager at Amazon",
          sessions: "New mentor",
          img: "../frontend/assets/img4.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Sheetal Bellare",
          title: "AVP (UX Strategist) at Angel One Finance",
          sessions: "63 sessions (40 reviews)",
          img: "../frontend/assets/img5.avif",
          experience: "5 years",
          attendance: "90%",
        },
      
        {
          name: "Shruthi Venkatesh",
          title: "Senior Visual Designer at Postman Inc",
          sessions: "49 sessions (4 reviews)",
          img: "../frontend/assets/img1.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Jz Jennyzhang",
          title: "Founder at callmejz.ai,China University",
          sessions: "12 sessions (7 reviews)",
          img: "../frontend/assets/img2.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Vibha Finaviya",
          title: "Senior Application Developer at Cognizant Technology",
          sessions: "New mentor",
          img: "../frontend/assets/img3.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Akanksha Gupta",
          title: "Engineering Manager at Amazon",
          sessions: "New mentor",
          img: "../frontend/assets/img4.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Sheetal Bellare",
          title: "AVP (UX Strategist) at Angel One Finance",
          sessions: "63 sessions (40 reviews)",
          img: "../frontend/assets/img5.avif",
          experience: "5 years",
          attendance: "90%",
        },
      
        {
          name: "Shruthi Venkatesh",
          title: "Senior Visual Designer at Postman Inc",
          sessions: "49 sessions (4 reviews)",
          img: "../frontend/assets/img1.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Jz Jennyzhang",
          title: "Founder at callmejz.ai,China University",
          sessions: "12 sessions (7 reviews)",
          img: "../frontend/assets/img2.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Vibha Finaviya",
          title: "Senior Application Developer at Cognizant Technology",
          sessions: "New mentor",
          img: "../frontend/assets/img3.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Akanksha Gupta",
          title: "Engineering Manager at Amazon",
          sessions: "New mentor",
          img: "../frontend/assets/img4.avif",
          experience: "5 years",
          attendance: "90%",
        },
        {
          name: "Sheetal Bellare",
          title: "AVP (UX Strategist) at Angel One Finance",
          sessions: "63 sessions (40 reviews)",
          img: "../frontend/assets/img5.avif",
          experience: "5 years",
          attendance: "90%",
        },
      ];
      
      const mentorContainer = document.getElementById("mentor-container");
      
      mentors.forEach((mentor) => {
        const mentorCard = document.createElement("div");
        mentorCard.className = "mentor-card";
      
        mentorCard.innerHTML = `
          <img src="${mentor.img}" alt="${mentor.name}">
          <div class="mentor-name">${mentor.name}</div>
          <div class="mentor-title">${mentor.title}</div>
          <div class="mentor-sessions">${mentor.sessions}</div>
          <div class="mentor-info flex flex-row bg-zinc-100 rounded mt-2">
              <div class="reach exp">
                  <div class="label">Experience</div>
                  <div class="value">${mentor.experience || ""}</div>
              </div>
              <div class="reach attendance">
                  <div class="label">Attendance</div>
                  <div class="value">${mentor.attendance || ""}</div>
              </div>
          </div>
      `;
      
        mentorContainer.appendChild(mentorCard);
      });
}
mentorwaLogg();

function removeIcon(inputElement) {
  inputElement.style.background = "transparent";
  inputElement.style.paddingLeft = "10px";
}

function restoreIcon(inputElement) {
  inputElement.style.background =
    'transparent url("/search-regular-24.png") no-repeat 9px';
  inputElement.style.backgroundSize = "16px";
  inputElement.style.paddingLeft = "40px";
}
let currentIconIndex = 0;
const icons = document.querySelectorAll(".icon");
const totalIcons = icons.length;
function navigateIcons(direction) {
  // Determine the new icon index based on the direction
  if (direction === "left" && currentIconIndex > 0) {
    currentIconIndex--;
  } else if (direction === "right" && currentIconIndex < totalIcons - 1) {
    currentIconIndex++;
  }

  // Update the display of icons based on the current index
  icons.forEach((icon, index) => {
    icon.style.display =
      index >= currentIconIndex && index < currentIconIndex + 9
        ? "block"
        : "none";
  });

  // Update the visibility of navigation arrows
  document
    .querySelector(".nav-left")
    .classList.toggle("hidden", currentIconIndex === 0);
  document
    .querySelector(".nav-right")
    .classList.toggle("hidden", currentIconIndex >= totalIcons - 9);
}
navigateIcons();

function filterDiv(){
    document.getElementById("filterButton").addEventListener("click", function () {
        var filterDiv = document.getElementById("filterDiv");
        filterDiv.classList.toggle("hidden");
      });
}
filterDiv();

function grpSession() {
  const sessions = [
    {
      title: "Figma Masterclass: Techniques For Pro UI Design",
      dateTime: "Aug 24, 4:00pm - GMT +05:30",
      host: "Sameer Ul Haque",
      role: "Design Lead, Designient School Of Masterminds",
      status: "Full",
      backgroundColor:
        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      title: "Software Development Training",
      dateTime: "Aug 24, 6:30pm - GMT +05:30",
      host: "Akeem Suara",
      role: "Technical Team Lead, Blusalt Financial Services",
      status: "",
      backgroundColor:
        "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    },
    {
      title: "Storytelling 101: The Power of You",
      dateTime: "Aug 24, 9:30pm - GMT +05:30",
      host: "Arsalan Jafree",
      role: "Lead Design Strategist, Booz Allen Hamilton",
      status: "",
      backgroundColor: "bg-gray-800",
    },
    {
      title: "Join my group session",
      dateTime: "Aug 25, 5:30pm - GMT +05:30",
      host: "Sameer Ul Haque",
      role: "Design Lead, Designient School Of Masterminds",
      status: "Almost Full",
      backgroundColor:
        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      title: "Join my group session",
      dateTime: "Aug 26, 3:30am - GMT +05:30",
      host: "Sameer Ul Haque",
      role: "Design Lead, Designient School Of Masterminds",
      status: "",
      backgroundColor:
        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      title: "Certification Chaos",
      dateTime: "Aug 28, 7:30pm - GMT +05:30",
      host: "John Doe",
      role: "Mentor",
      status: "",
      backgroundColor:
        "bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500",
    },
  ];

  const container = document.getElementById("group-sessions-container");

  sessions.forEach((session) => {
    const sessionCard = document.createElement("div");
    sessionCard.className = `w-full md:w-1/2 lg:w-1/3 p-4`; 
    sessionCard.innerHTML = `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="relative">
        <div class="${
          session.backgroundColor
        } h-48 flex items-center justify-center text-white text-2xl font-bold">
          ${session.title}
        </div>
        ${
          session.status
            ? `<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">${session.status}</span>`
            : ""
        }
      </div>
      <div class="p-4">
        <p class="text-gray-500 mb-1">${session.dateTime}</p>
        <p class="text-gray-700"><strong>${session.host}</strong></p>
        <p class="text-gray-500 text-sm">${session.role}</p>
      </div>
    </div>
  `;
    container.appendChild(sessionCard);
  });
}
grpSession();

function profileDiv() {
  document.getElementById("toggleImage").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
}
profileDiv();
function moreTog(){
    document.getElementById('more-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
    
        var optionsDiv = document.getElementById('more-options');
        optionsDiv.classList.toggle('hidden'); // Toggle the visibility
    
        // Close the div if clicked outside
        document.addEventListener('click', function(event) {
            if (!optionsDiv.contains(event.target) && !document.getElementById('more-button').contains(event.target)) {
                optionsDiv.classList.add('hidden');
            }
        });
    });
    
    
}
moreTog();