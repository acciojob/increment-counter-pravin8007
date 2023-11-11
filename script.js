//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Set the initial value of the counter
    let counterValue = 0;

    // Function to handle the button click
    function handleIncrement() {
      // Display an alert with the current un-incremented value
      alert(`Current un-incremented value: ${counterValue}`);

      // Increment the counter value
      counterValue++;

      // Update the counter element with the new value
      counterElement.textContent = counterValue;
    }

    // Attach the handleIncrement function to the button click event
    incrementButton.addEventListener('click', handleIncrement);