import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import { Joke } from '../types';


describe('Dropdown Component', () => {
  const mockJokes: Joke[] = [
    { id: 1, joke: 'Why did the chicken cross the road? To get to the other side!' },
    { id: 2, joke: 'I told my computer I needed a break, and now it won’t stop sending me KitKats.' },
  ];

  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when the items array is empty', () => {
    render(<Dropdown items={[]} onSelect={mockOnSelect} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders a list of jokes when items are provided', () => {
    render(<Dropdown items={mockJokes} onSelect={mockOnSelect} />);
    mockJokes.forEach((joke) => {
      expect(screen.getByText(joke.joke)).toBeInTheDocument();
    });
  });

  it('calls onSelect when a joke is clicked', () => {
    render(<Dropdown items={mockJokes} onSelect={mockOnSelect} />);

    const jokeElement = screen.getByText(mockJokes[0].joke);
    fireEvent.click(jokeElement);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(mockJokes[0]);
  });

  it('renders jokes with the correct styling', () => {
    render(<Dropdown items={mockJokes} onSelect={mockOnSelect} />);

    const jokeElement = screen.getByText(mockJokes[0].joke);
    expect(jokeElement).toHaveClass('p-3 cursor-pointer hover:bg-cyan-950 truncate');
  });
});