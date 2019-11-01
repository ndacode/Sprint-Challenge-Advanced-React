import React from 'react';
import { render} from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  render(<App />);
});

test ("Displays Player Card", ()=> {
  render (<PlayerCard/>);
})


test ("Displays Player Card", ()=> {
  const container = render (<PlayerCard/>);
  container.getByText(/PlayerCard/i);
  // getByText(/PlayerCard/i);
})

test ( "Has Darkmode", ()=> {
  const container = render (<App/>);
 container.getByText("Dark Mode");
});

test ( "Has Darkmode", ()=> {
  const container = render (<App/>);
  container.getByText(/Dark Mode/i);
});

test ( "Ranks Only Up to 100", ()=> {
  const container = render(<App/>);
  container.getByText("101");
})

