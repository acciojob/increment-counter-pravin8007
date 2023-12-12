//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.innerText = 0;
    let counterValue = 0;


    function handleIncrement() {
		
      alert(counterValue);
		 counterElement.innerText = counterValue;
      counterValue++;
     
    }


    incrementButton.addEventListener('click', handleIncrement);