import React, { createContext, useContext, useState, useEffect } from 'react';
import { minigames } from '../data/minigames';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [screen, setScreen] = useState('home'); // home | setup | players | reveal | debate | result
    const [selectedGame, setSelectedGame] = useState(null); // 'mentira_perfecta' | 'pregunta_trampa'
    const [playersData, setPlayersData] = useState([]); // {id, name, initial, hasSeen, role, secretInfo, explanation}
    const [gameInfo, setGameInfo] = useState({}); // Stores the situation or specific common info for the round
    const [viewingPlayerId, setViewingPlayerId] = useState(null);

    // Anti-repetition state
    const [usedMentiraFacts, setUsedMentiraFacts] = useState(new Set());
    const [usedTrampaSituations, setUsedTrampaSituations] = useState(new Set());

    // Restart to home
    const goHome = () => {
        setScreen('home');
        setSelectedGame(null);
        setPlayersData([]);
        setGameInfo({});
        setViewingPlayerId(null);
    };

    // Hard Reset system state
    const resetGameHistory = () => {
        setUsedMentiraFacts(new Set());
        setUsedTrampaSituations(new Set());
        localStorage.removeItem('playersNames'); // clear saved names
        alert('Historial de juego reiniciado con éxito. ✅');
        goHome();
    };

    // Select game -> Setup
    const selectGame = (gameId) => {
        setSelectedGame(minigames[gameId]);
        setScreen('setup');
    };

    // Start game from setup
    const startGame = (playerNames) => {
        // Generate roles based on game logic
        const initializedPlayers = generateGameRoles(selectedGame, playerNames);
        setPlayersData(initializedPlayers);
        setScreen('players');
    };

    // Helper random selector that filters used items
    const getRandomFiltered = (array, usedSet, count = 1) => {
        let available = array.filter(item => !usedSet.has(item.id));

        // If not enough items, reset the used set for this category
        if (available.length < count) {
            console.log("Not enough new items. Resetting used pool.");
            available = [...array];
            usedSet.clear();
        }

        const selected = [];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * available.length);
            const item = available[idx];
            selected.push(item);
            usedSet.add(item.id);
            available.splice(idx, 1); // remove to not pick it again in this iteration
        }
        return selected;
    };

    // Generate logic
    const generateGameRoles = (game, playerNames) => {
        let resultPlayers = [];

        if (game.id === 'mentira_perfecta') {
            const allTrue = game.facts ? game.facts.filter(f => f.isTrue) : game.trueFacts;
            const allFalse = game.facts ? game.facts.filter(f => !f.isTrue) : game.falseFacts;

            // Get 1 false fact
            const [chosenFalse] = getRandomFiltered(allFalse, usedMentiraFacts, 1);

            // Get required true facts (Total players - 1)
            const chosenTrueFacts = getRandomFiltered(allTrue, usedMentiraFacts, playerNames.length - 1);

            // Update used state
            setUsedMentiraFacts(new Set(usedMentiraFacts));

            // Mix them
            const allChosenFacts = [...chosenTrueFacts, chosenFalse];
            allChosenFacts.sort(() => Math.random() - 0.5); // Randomize array

            resultPlayers = playerNames.map((name, index) => {
                const fact = allChosenFacts[index];
                return {
                    id: `player_${index}`,
                    name: name,
                    initial: name.charAt(0).toUpperCase(),
                    hasSeen: false,
                    role: fact.isTrue ? 'Tripulante' : 'Impostor',
                    secretInfo: fact.text,
                    explanation: ''
                };
            });

            setGameInfo({ type: 'Dato Curioso' });

        } else if (game.id === 'pregunta_trampa') {

            // Get 1 situation
            const [situation] = getRandomFiltered(game.situations, usedTrampaSituations, 1);
            setUsedTrampaSituations(new Set(usedTrampaSituations));

            setGameInfo({ type: 'Situación', text: situation.text, baseObjects: situation.objects });

            const goodObjectsPool = [...situation.objects];
            const selectedGoodObjects = [];

            // Ensure we have enough good objects without repeating in the same round if possible
            for (let i = 0; i < playerNames.length - 1; i++) {
                if (goodObjectsPool.length > 0) {
                    const idx = Math.floor(Math.random() * goodObjectsPool.length);
                    selectedGoodObjects.push(goodObjectsPool[idx]);
                    goodObjectsPool.splice(idx, 1);
                } else {
                    selectedGoodObjects.push(situation.objects[Math.floor(Math.random() * situation.objects.length)]);
                }
            }

            const badObj = situation.impostorObjects[Math.floor(Math.random() * situation.impostorObjects.length)];

            const combinedObjects = [...selectedGoodObjects, badObj];
            combinedObjects.sort(() => Math.random() - 0.5);

            resultPlayers = playerNames.map((name, index) => {
                const obj = combinedObjects[index];
                return {
                    id: `player_${index}`,
                    name: name,
                    initial: name.charAt(0).toUpperCase(),
                    hasSeen: false,
                    role: obj.isImpostor ? 'Impostor' : 'Superviviente',
                    secretInfo: obj.text,
                    explanation: obj.explanation
                }
            });
        }

        return resultPlayers;
    };

    const markPlayerSeen = (id) => {
        setPlayersData(prev => prev.map(p =>
            p.id === id ? { ...p, hasSeen: true } : p
        ));
        setViewingPlayerId(null);
        setScreen('players');
    };

    const startDebate = () => {
        setScreen('debate');
    };

    const showResults = () => {
        setScreen('result');
    };

    return (
        <GameContext.Provider value={{
            screen, setScreen,
            selectedGame,
            playersData,
            gameInfo,
            viewingPlayerId, setViewingPlayerId,
            goHome,
            selectGame,
            startGame,
            markPlayerSeen,
            startDebate,
            showResults,
            resetGameHistory
        }}>
            {children}
        </GameContext.Provider>
    );
};
