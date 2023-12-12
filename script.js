//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

	counterElement.textContent = counterElement.innerText;
    let counterValue = 0;

    function handleIncrement() {
		
      alert(counterValue);
      const value =  parseInt(counterValue)+1;
		 counterElement.textContent = value;
    }


    incrementButton.addEventListener('click', handleIncrement);