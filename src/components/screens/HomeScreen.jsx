import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { minigames } from '../../data/minigames';
import Card from '../ui/Card';
import Button from '../ui/Button';
import RulesModal from '../ui/RulesModal';
import './Screens.css'; // Centralized styles for screens

const HomeScreen = () => {
    const { selectGame, resetGameHistory } = useGame();
    const [rulesOpen, setRulesOpen] = useState(null);

    const gamesList = Object.values(minigames);

    return (
        <div className="screen-container animate-fade-in">
            <button
                className="icon-btn restart-btn"
                onClick={resetGameHistory}
                aria-label="Reiniciar Juego"
                style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '1.5rem', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%' }}
                title="Reiniciar Historial de Partidas"
            >
                🔄
            </button>
            <header className="header-center">
                <h1 style={{ fontSize: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Party Games</h1>
                <p className="subtitle" style={{ fontSize: '1.1rem', opacity: 0.9 }}>Selecciona un minijuego para comenzar</p>
            </header>

            <div className="games-list">
                {gamesList.map((game) => (
                    <Card key={game.id} className="game-card" glow={true}>
                        <div className="game-card-header">
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {game.id === 'mentira_perfecta' ? '🧠' : '❓'} {game.name}
                            </h2>
                            <button
                                className="icon-btn"
                                onClick={(e) => { e.stopPropagation(); setRulesOpen(game); }}
                                aria-label="Reglas"
                            >
                                ?
                            </button>
                        </div>
                        <p>{game.description}</p>
                        <div className="game-card-footer">
                            <Button onClick={() => selectGame(game.id)} fullWidth>
                                Jugar
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            <RulesModal
                isOpen={!!rulesOpen}
                onClose={() => setRulesOpen(null)}
                gameName={rulesOpen?.name}
                rules={rulesOpen?.rules || []}
            />
        </div>
    );
};

export default HomeScreen;
