document.addEventListener('DOMContentLoaded', function () {
    const timeSlotsContainer = document.querySelector('.time-slots-container');
    const addSlotButton = document.getElementById('add-slot');

    // Time options to populate the select elements
    const timeOptions = generateTimeOptions();

    function generateTimeOptions() {
        let options = '';
        for (let i = 0; i < 24; i++) {
            let hour = i.toString().padStart(2, '0') + ':00';
            options += `<option value="${hour}">${hour}</option>`;
        }
        return options;
    }

    function addTimeSlot() {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('time-slot');
        slotDiv.innerHTML = `
            <select name="time-slots-start[]" class="time-select">${timeOptions}</select>
            <span>to</span>
            <select name="time-slots-end[]" class="time-select">${timeOptions}</select>
            <button type="button" class="remove-slot">Remove</button>
        `;
        timeSlotsContainer.appendChild(slotDiv);
    }

    function removeTimeSlot(event) {
        if (event.target.classList.contains('remove-slot')) {
            event.target.parentElement.remove();
        }
    }

    // Add initial time slot
    addTimeSlot();

    // Event listeners
    addSlotButton.addEventListener('click', addTimeSlot);
    timeSlotsContainer.addEventListener('click', removeTimeSlot);
});
const Id = localStorage.getItem('userId');
console.log(Id);
document.querySelector('.form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    const formData = new FormData();
    const fileInput = document.getElementById('profileImage');
    
    if (fileInput.files.length === 0) {
        alert("Please choose an image to upload.");
        return;
    }

    const imageFile = fileInput.files[0];
    formData.append('image', imageFile); // Append image to the form data

    try {
        const response = await fetch('http://localhost:7000/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            alert('Image uploaded successfully!');
            console.log(result); // Handle success response here
        } else {
            alert('Error uploading image.');
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('An error occurred while uploading the image.');
    }
    // Collect form data
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('Lastname').value;
    const bio = document.getElementById('Bio').value;
    const college = document.querySelector('input[placeholder="College"]').value;
    const office = document.querySelector('input[placeholder="Office"]').value;
    const experience = document.getElementById('Experience').value;
    const calendly = document.getElementById('calendly').value;
    
    //const token = localStorage.getItem('authToken');
    //const Id=7;
    
    // Get specialization checkboxes
    const specialization = Array.from(document.querySelectorAll('.label-container input:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent).join(',');

    // Get language checkboxes
    const language = Array.from(document.querySelectorAll('.label-container2 input:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent).join(',');

    // Prepare the data object to be sent to the API
    const data = {
        name: `${firstName} ${lastName}`,
        bio: bio,
        college: college,
        expertise: specialization, // from checkboxes
        experience_years: experience,
        isAvailable: "1", // Set as default available
        userId: Id, // assuming userId is static for now
        isVerified: "1", // Set as default verified
        calendly: calendly,
        language: language // from checkboxes
    };
    //console.log(data);
    if (!data.name || !data.bio || !data.experience_years || !data.expertise || !data.language) {
        alert("Please fill out all required fields.");
        return;
    }
    try {
        const response = await fetch('http://localhost:3000/api/v1/mentor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        });

        const result = await response.json();
        if (result.success) {
            alert('Mentor created successfully!');

        } else {
            alert('Error creating mentor: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
       // alert('There was an error submitting the form: ' + error.message);
    }
});
