//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.textContent = counterElement.innerText;
    let counterValue = 0;

    function handleIncrement() {
		
      alert(counterValue);
      counterElement.textContent = counterValue;
      counterValue++;
		 counterElement.textContent = counterValue;
    }


    incrementButton.addEventListener('click', handleIncrement);