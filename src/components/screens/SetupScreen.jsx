import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

const SetupScreen = () => {
    const { selectedGame, startGame, goHome } = useGame();
    const [numPlayers, setNumPlayers] = useState(3);
    const [names, setNames] = useState(['Jugador 1', 'Jugador 2', 'Jugador 3']);

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const savedNames = localStorage.getItem('party_game_players');
            if (savedNames) {
                const parsed = JSON.parse(savedNames);
                if (Array.isArray(parsed) && parsed.length >= 3) {
                    setNames(parsed);
                    setNumPlayers(parsed.length);
                }
            }
        } catch (e) {
            console.error("Error loading names from localStorage", e);
        }
    }, []);

    // Save to localStorage whenever names change
    const saveNames = (newNames) => {
        setNames(newNames);
        localStorage.setItem('party_game_players', JSON.stringify(newNames));
    };

    const handleNumChange = (newTotal) => {
        if (newTotal < 3 || newTotal > 10) return;

        setNumPlayers(newTotal);

        // Adjust names array
        const newNames = [...names];
        if (newTotal > names.length) {
            for (let i = names.length; i < newTotal; i++) {
                newNames.push(`Jugador ${i + 1}`);
            }
        } else {
            newNames.length = newTotal;
        }
        saveNames(newNames);
    };

    const handleNameChange = (index, value) => {
        const newNames = [...names];
        newNames[index] = value;
        saveNames(newNames);
    };

    return (
        <div className="screen-container animate-fade-in setup-screen">
            <header className="header-flex">
                <button className="back-btn" onClick={goHome}>←</button>
                <h2>{selectedGame?.name}</h2>
                <div style={{ width: 32 }}></div> {/* Spacer for symmetry */}
            </header>

            <Card className="setup-card">
                <h3>Cantidad de jugadores</h3>
                <div className="counter-control">
                    <button className="counter-btn" onClick={() => handleNumChange(numPlayers - 1)}>-</button>
                    <span className="counter-value">{numPlayers}</span>
                    <button className="counter-btn" onClick={() => handleNumChange(numPlayers + 1)}>+</button>
                </div>
                <p className="hint">Mínimo 3, Máximo 10</p>
            </Card>

            <div className="names-list">
                <h3>Nombres (Opcional)</h3>
                {names.map((name, idx) => (
                    <input
                        key={idx}
                        className="name-input"
                        value={name}
                        onChange={(e) => handleNameChange(idx, e.target.value)}
                        placeholder={`Jugador ${idx + 1}`}
                        maxLength={12}
                    />
                ))}
            </div>

            <div className="bottom-action">
                <Button
                    fullWidth
                    variant="primary"
                    onClick={() => startGame(names.map(n => n.trim() || 'Jugador'))}
                >
                    Comenzar partida
                </Button>
            </div>
        </div>
    );
};

export default SetupScreen;
