import React from 'react';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureValue: 10,
      temperatureColor: 'green',
    };
  }

  increaseTemperature = () => {
    if (this.state.temperatureValue === 50) return;

    const newTemperature = this.state.temperatureValue + 1;
    this.setState({ temperatureValue: newTemperature });

    if (newTemperature > 20 && newTemperature < 35) {
      this.setState({ temperatureColor: 'yellow' });
    } else if (newTemperature > 35) {
      this.setState({ temperatureColor: 'red' });
    }
  };

  decreaseTemperature = () => {
    if (this.state.temperatureValue === 0) return;

    const newTemperature = this.state.temperatureValue - 1;
    this.setState({ temperatureValue: newTemperature });

    if (newTemperature <= 20 && newTemperature <= 35) {
      this.setState({ temperatureColor: 'green' });
    } else if (newTemperature <= 35) {
      this.setState({ temperatureColor: 'yellow' });
    }
  };

  render() {
    const { temperatureValue, temperatureColor } = this.state;

    return (
      <div className="app-container">

     <div className='bg'>      
     <h3 style={{color:"orange"}}> Class Based </h3> 
        </div> 

        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>
            {temperatureValue}°C
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.increaseTemperature}>+</button>
          <button onClick={this.decreaseTemperature}>-</button>
        </div>
      </div>
    );
  }
}

export default Temperature;
