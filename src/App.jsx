import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import HomeScreen from './components/screens/HomeScreen';
import SetupScreen from './components/screens/SetupScreen';
import PlayerGridScreen from './components/screens/PlayerGridScreen';
import RevealScreen from './components/screens/RevealScreen';
import DebateScreen from './components/screens/DebateScreen';
import ResultScreen from './components/screens/ResultScreen';

const GameOrchestrator = () => {
  const { screen, viewingPlayerId } = useGame();

  // If a player is secretly viewing their card
  if (viewingPlayerId) {
    return <RevealScreen playerId={viewingPlayerId} />;
  }

  // Routing based on game state
  switch (screen) {
    case 'home':
      return <HomeScreen />;
    case 'setup':
      return <SetupScreen />;
    case 'players':
      return <PlayerGridScreen />;
    case 'debate':
      return <DebateScreen />;
    case 'result':
      return <ResultScreen />;
    default:
      return <HomeScreen />;
  }
};

function App() {
  return (
    <GameProvider>
      <GameOrchestrator />
    </GameProvider>
  );
}

export default App;
