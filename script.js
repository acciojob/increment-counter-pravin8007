//your JS code here. If required.
let counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.value = 0;
    function handleIncrement() {
		const currentValue = parseInt(counterElement.innerText);
		alert(counterElement.innerText);
		const incrementedValue = currentValue + 1;
		  counterElement.innerText = incrementedValue;
    }


    incrementButton.addEventListener('click', handleIncrement); 
