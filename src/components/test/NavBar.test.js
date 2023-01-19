import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../../App';
import NavBar from '../NavBar';

describe('Testing Component render correctly', () => {
  it('NavBar rendered correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('NavBar interaction', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Home'));
    const welcomeMsg = screen.getByText('Welcome to our Page!');
    expect(welcomeMsg).toBeInTheDocument();
  });
  it('NavBar interaction, quote link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Quote'));
    const quoteMsg = screen.getByText('Mathematics is not about number, equations, computations or algorithms: It is about understanding. -William Paul Thrustor');
    expect(quoteMsg).toBeInTheDocument();
  });
});
