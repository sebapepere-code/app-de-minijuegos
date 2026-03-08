import React from 'react';
import { useGame } from '../../context/GameContext';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ResultScreen = () => {
    const { playersData, gameInfo, selectedGame, goHome } = useGame();

    const impostors = playersData.filter(p => p.role === 'Impostor');
    // Just in case we expand to multiple impostors later, though for now it's just 1.
    const impostor = impostors[0];

    return (
        <div className="screen-container animate-fade-in result-screen" style={{ paddingBottom: 100 }}>
            <header className="header-center">
                <h1>Revelación</h1>
                <p className="subtitle">El momento de la verdad</p>
            </header>

            <Card className="result-card" style={{ textAlign: 'center', marginBottom: '24px', borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--text-muted)' }}>El Impostor era</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: '16px 0' }}>
                    {impostor.name}
                </p>
                <p style={{ fontSize: '1.1rem' }}>
                    {selectedGame.id === 'mentira_perfecta' ? 'Su dato falso fue:' : 'Su objeto inútil fue:'}
                </p>
                <p style={{ fontSize: '1.5rem', color: 'white', marginTop: '8px', fontWeight: 'bold' }}>
                    "{impostor.secretInfo}"
                </p>
            </Card>

            {selectedGame.id === 'pregunta_trampa' && (
                <div className="explanations-list">
                    <h3 style={{ marginBottom: '16px' }}>Los otros objetos sí servían:</h3>
                    {playersData.filter(p => p.role !== 'Impostor').map(p => (
                        <Card key={p.id} style={{ marginBottom: '12px', padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 'bold', color: 'white' }}>{p.name}</span>
                                <span style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '600' }}>{p.secretInfo}</span>
                            </div>
                            {p.explanation && (
                                <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                    💡 {p.explanation}
                                </p>
                            )}
                        </Card>
                    ))}
                </div>
            )}

            {selectedGame.id === 'mentira_perfecta' && (
                <div className="explanations-list">
                    <h3 style={{ marginBottom: '16px' }}>Los otros datos eran reales:</h3>
                    {playersData.filter(p => p.role !== 'Impostor').map(p => (
                        <Card key={p.id} style={{ marginBottom: '12px', padding: '16px' }}>
                            <p style={{ color: 'var(--primary)', marginBottom: '8px', fontWeight: 'bold' }}>{p.name}</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{p.secretInfo}</p>
                        </Card>
                    ))}
                </div>
            )}

            <div className="bottom-action">
                <Button fullWidth onClick={goHome} variant="primary">
                    Volver al Inicio
                </Button>
            </div>
        </div>
    );
};

export default ResultScreen;
