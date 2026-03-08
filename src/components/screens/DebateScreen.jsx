import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import RulesModal from '../ui/RulesModal';

const DebateScreen = () => {
    const { selectedGame, showResults, playersData } = useGame();
    const [rulesOpen, setRulesOpen] = useState(false);
    const [activePlayerId, setActivePlayerId] = useState(null);

    return (
        <div className="screen-container animate-fade-in debate-screen">
            <header className="header-flex">
                <h2>Fase de Debate</h2>
                <button
                    className="icon-btn"
                    onClick={() => setRulesOpen(true)}
                    aria-label="Reglas"
                >
                    ?
                </button>
            </header>

            <Card className="debate-card" glow={true}>
                <div className="flex-center flex-col" style={{ padding: '24px 0', textAlign: 'center' }}>
                    <span style={{ fontSize: '4rem', marginBottom: '16px' }}>🗣️</span>
                    <h3>¡Es momento de hablar!</h3>
                    <p style={{ marginTop: '16px', fontSize: '1.1rem' }}>
                        {selectedGame.id === 'mentira_perfecta'
                            ? 'Cada jugador debe leer su dato en voz alta. El grupo debe debatir para descubrir quién tiene el dato inventado.'
                            : 'Cada jugador debe explicar por qué su objeto es útil para sobrevivir. El grupo debe debatir para descubrir quién tiene el objeto inútil.'
                        }
                    </p>
                </div>
            </Card>

            <div style={{ marginTop: '24px' }}>
                <h4 style={{ textAlign: 'center', marginBottom: '16px', color: 'var(--text-muted)' }}>¿Olvidaste tu información?</h4>
                <div className="players-grid" style={{ paddingBottom: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                    {playersData.map(player => (
                        <div key={player.id} className="reveal-hold-card"
                            onPointerDown={() => setActivePlayerId(player.id)}
                            onPointerUp={() => setActivePlayerId(null)}
                            onPointerLeave={() => setActivePlayerId(null)}
                            onContextMenu={(e) => e.preventDefault()} // prevent long press menu on mobile
                        >
                            {activePlayerId === player.id ? (
                                <div className="reveal-hold-content animate-fade-in">
                                    <span className="reveal-hold-role" style={{ color: player.role === 'Impostor' ? 'var(--accent)' : 'var(--success)' }}>
                                        {player.role}
                                    </span>
                                    <span className="reveal-hold-info">{player.secretInfo}</span>
                                </div>
                            ) : (
                                <div className="reveal-hold-idle">
                                    <span className="player-initial" style={{ width: 40, height: 40, fontSize: '1.2rem', marginBottom: '8px' }}>
                                        {player.initial}
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{player.name}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>Mantén presionado</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <p className="guide-text" style={{ marginBottom: '16px' }}>Una vez que el grupo haya llegado a un consenso y votado por el Impostor, presiona el botón para revelar la verdad.</p>
                <Button fullWidth onClick={showResults} variant="danger">
                    Revelar Resultados
                </Button>
            </div>

            <RulesModal
                isOpen={rulesOpen}
                onClose={() => setRulesOpen(false)}
                gameName={selectedGame?.name}
                rules={selectedGame?.rules || []}
            />
        </div>
    );
};

export default DebateScreen;
