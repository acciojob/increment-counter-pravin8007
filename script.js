//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.textContent = 0;
    let counterValue = 0;


    function handleIncrement() {
		
      alert(counterValue);
      counterValue++;
      counterElement.textContent = counterValue;
    }


    incrementButton.addEventListener('click', handleIncrement);