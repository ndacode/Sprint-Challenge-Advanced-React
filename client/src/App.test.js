import React from 'react';
import ReactDOM from 'react-dom';
import { render} from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test ("Has darkmode toggle", ()=> {
  const {getByText} = (<App/>);
})

test ( "Displays Player Card", ()=> {
  const {getAllByDisplayValue} = (<PlayerCard/>);
})

test ( "Ranks Only Up to 100", ()=> {
  const {getByText} = ('100');
})

