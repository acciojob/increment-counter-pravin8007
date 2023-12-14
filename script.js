//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	

    function handleIncrement() {
    
		const currentValue = parseInt(counterElement.innerText);
			  const incrementedValue = currentValue + 1;
		alert(incrementedValue);
		  counterElement.innerText = incrementedValue;
    }


    incrementButton.addEventListener('click', handleIncrement);