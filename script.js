//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.textContent = counterElement.innerText;
    let counterValue = 0;

    function handleIncrement() {

		   counterValue = parseInt(counterValue) + 1;
	  counterElement.textContent = counterValue;
		
      alert(counterValue);
		 
    }


    incrementButton.addEventListener('click', handleIncrement);