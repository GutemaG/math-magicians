import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Testing Calculator component', () => {
  it('Calculator component rendered', () => {
    const tree = renderer.create(
      <Calculator />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing calculator component user interaction by click button', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Testing calculator component user interaction for adding two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('resultInput')).toHaveValue('15');
  });

  it('Testing calculator component user interaction for multiplying two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('resultInput')).toHaveValue('81');
  });
});
