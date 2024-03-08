import React, { useState } from 'react';

const App = () => {
	const [temperatureValue, setTemperatureValue] = useState(10);
	const [temperatureColor, setTemperatureColor] = useState('green');

	const increaseTemperature = () => {
		if(temperatureValue === 50) return;

		const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);

		if (newTemperature > 20 && newTemperature < 35) {
			setTemperatureColor('yellow');
		}

    else if(newTemperature > 35){
      setTemperatureColor('red');
    }

	};

	const decreaseTemperature = () => {
		if(temperatureValue === 0) return;

		const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);
		if (newTemperature <= 20 && newTemperature <= 35) {
			setTemperatureColor('green');
		}

		else if (newTemperature <= 35) {
			setTemperatureColor("yellow");
		}

	};


	return (
		<div className='app-container'>
			
	    <div className='bg'>      
        <h3 style={{color:"#FF4500"}}> Function Based </h3> 
        </div>

        <div className='temperature-display-container'>
		<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
		</div>

		<div className='button-container'>
		<button onClick={increaseTemperature}>+</button>
		<button onClick={decreaseTemperature}>-</button>
		</div>

		</div>
	);
};

export default App;