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
