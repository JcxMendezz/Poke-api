import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/Components/Header';

describe('Header Component', () => {
    it('renders header with title and search input', () => {
        const mockSetQuery = jest.fn();
        render(<Header query="" setQuery={mockSetQuery} />);

        // Verifica que el título esté presente
        expect(screen.getByText('Pokedex Finder')).toBeInTheDocument();

        // Verifica que el input esté presente
        expect(screen.getByPlaceholderText('Busca Pokemons')).toBeInTheDocument();
    });

    it('calls setQuery when input value changes', () => {
        const mockSetQuery = jest.fn();
        render(<Header query="" setQuery={mockSetQuery} />);

        // Obtiene el input
        const searchInput = screen.getByPlaceholderText('Busca Pokemons');

        // Simula escribir en el input
        fireEvent.change(searchInput, { target: { value: 'pikachu' } });

        // Verifica que setQuery fue llamado con el valor correcto (trimmed)
        expect(mockSetQuery).toHaveBeenCalledWith('pikachu');
    });

    it('displays the current query value', () => {
        const mockSetQuery = jest.fn();
        const currentQuery = 'charizard';

        render(<Header query={currentQuery} setQuery={mockSetQuery} />);

        // Verifica que el input muestre el valor actual
        const searchInput = screen.getByPlaceholderText('Busca Pokemons') as HTMLInputElement;
        expect(searchInput.value).toBe('charizard');
    });

    it('trims whitespace from input value', () => {
        const mockSetQuery = jest.fn();
        render(<Header query="" setQuery={mockSetQuery} />);

        const searchInput = screen.getByPlaceholderText('Busca Pokemons');

        // Simula escribir un valor con espacios
        fireEvent.change(searchInput, { target: { value: '  bulbasaur  ' } });

        // Verifica que setQuery fue llamado con el valor sin espacios
        expect(mockSetQuery).toHaveBeenCalledWith('bulbasaur');
    });
});