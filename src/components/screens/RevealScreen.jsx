import React from 'react';
import { useGame } from '../../context/GameContext';
import Card from '../ui/Card';
import Button from '../ui/Button';

const RevealScreen = ({ playerId }) => {
    const { playersData, markPlayerSeen, gameInfo } = useGame();

    const player = playersData.find(p => p.id === playerId);

    if (!player) return null;

    return (
        <div className="screen-container animate-scale-in flex-center" style={{ backgroundColor: 'var(--bg-dark)', position: 'fixed', inset: 0, zIndex: 100 }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="header-center" style={{ marginBottom: 16 }}>{player.name}</h2>
                <p className="guide-text" style={{ marginBottom: 32 }}>Esta información es secreta. No compartas la pantalla.</p>

                <Card className="reveal-card" glow={true} style={{ marginBottom: 32 }}>
                    {gameInfo.type === 'Situación' && (
                        <div className="reveal-section">
                            <h4 style={{ color: 'var(--text-muted)' }}>Situación</h4>
                            <p style={{ fontSize: '1.25rem', marginBottom: 24, color: 'white' }}>{gameInfo.text}</p>
                        </div>
                    )}

                    <div className="reveal-section">
                        <h4 style={{ color: 'var(--text-muted)' }}>Tu {gameInfo.type === 'Situación' ? 'Objeto' : 'Dato'}</h4>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: 24 }}>
                            {player.secretInfo}
                        </p>
                    </div>

                    <div className="reveal-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
                        <h4 style={{ color: 'var(--text-muted)' }}>Rol</h4>
                        <p style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: player.role === 'Impostor' ? 'var(--accent)' : 'var(--success)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            {player.role}
                        </p>
                    </div>
                </Card>

                <Button
                    fullWidth
                    variant="outline"
                    onClick={() => markPlayerSeen(player.id)}
                    style={{ padding: '20px' }}
                >
                    Ocultar Información
                </Button>
            </div>
        </div>
    );
};

export default RevealScreen;
