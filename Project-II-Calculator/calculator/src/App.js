import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ButtonContainer className="clear-button">
        <ActionButton className="text" text="clear"/>
        <NumberButton className="red-button" text="/" />
      </ButtonContainer>

      <ButtonContainer>
          <NumberButton className="num-button" text="7" />
          <NumberButton className="num-button" text="8" />
          <NumberButton className="num-button" text="9" />
          <NumberButton className="red-button" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton className="num-button" text="4" />
          <NumberButton className="num-button" text="5" />
          <NumberButton className="num-button" text="6" />
          <NumberButton className="red-button" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton className="num-button" text="1" />
          <NumberButton className="num-button" text="2" />
          <NumberButton className="num-button" text="3" />
          <NumberButton className="red-button" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" />
          <NumberButton className="red-button" text="=" />
        </ButtonContainer>

    </div>
  );
};

export default App;
