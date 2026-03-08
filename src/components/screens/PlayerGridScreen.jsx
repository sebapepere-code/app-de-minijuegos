import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import RulesModal from '../ui/RulesModal';

const PlayerGridScreen = () => {
    const { selectedGame, playersData, setViewingPlayerId, startDebate } = useGame();
    const [rulesOpen, setRulesOpen] = useState(false);

    const allSeen = playersData.every(p => p.hasSeen);

    return (
        <div className="screen-container animate-fade-in">
            <header className="header-flex">
                <h2>Jugadores</h2>
                <button
                    className="icon-btn"
                    onClick={() => setRulesOpen(true)}
                    aria-label="Reglas"
                >
                    ?
                </button>
            </header>

            <p className="guide-text">
                Toca tu nombre para revelar tu información y luego pasa el dispositivo al siguiente jugador.
            </p>

            <div className="players-grid">
                {playersData.map((player) => (
                    <Card
                        key={player.id}
                        className={`player-card ${player.hasSeen ? 'player-seen' : ''}`}
                        onClick={() => {
                            if (!player.hasSeen) {
                                setViewingPlayerId(player.id);
                            }
                        }}
                    >
                        <div className="player-initial">
                            {player.hasSeen ? '✔' : player.initial}
                        </div>
                        <div className="player-name">{player.name}</div>
                    </Card>
                ))}
            </div>

            {allSeen && (
                <div className="bottom-action animate-fade-in">
                    <Button fullWidth onClick={startDebate} variant="success">
                        Comenzar debate
                    </Button>
                </div>
            )}

            <RulesModal
                isOpen={rulesOpen}
                onClose={() => setRulesOpen(false)}
                gameName={selectedGame?.name}
                rules={selectedGame?.rules || []}
            />
        </div>
    );
};

export default PlayerGridScreen;
