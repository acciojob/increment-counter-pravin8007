 function incrementCounter() {
      // Get the current value of the counter
      var counterValue = document.getElementById("counter").innerText;

      // Display an alert with the un-incremented value
      alert(counterValue);

      // Increment the counter value by 1
      counterValue = parseInt(counterValue) + 1;

      // Update the counter value on the webpage
      document.getElementById("counter").innerText = counterValue;
    }

const increment = document.getElementById("incrementBtn");
increment.addEventListener("click", incrementCounter);