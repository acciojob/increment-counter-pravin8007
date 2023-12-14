//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	

    function handleIncrement() {
    
		const currentValue = parseInt(counterElement.innerText);
		alert(currentValue);
		  const incrementedValue = currentValue + 1;
		  counterElement.innerText = incrementedValue;
    }


    incrementButton.addEventListener('click', handleIncrement);