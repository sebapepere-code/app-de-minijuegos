import { mentiraPerfectaFacts } from './mentiraPerfectaData';
import { preguntaTrampaSituations } from './preguntaTrampaData';

export const minigames = {
    mentira_perfecta: {
        id: 'mentira_perfecta',
        name: 'La Mentira Perfecta',
        description: 'Descubre quién tiene el dato falso.',
        rules: [
            '1. Todos los jugadores reciben un dato curioso verdadero, excepto uno.',
            '2. El jugador que recibe el dato falso es el "Impostor".',
            '3. Por turnos, cada jugador lee su dato en voz alta.',
            '4. El grupo debate cuál de los datos parece inventado.',
            '5. Al finalizar, votan quién creen que es el impostor.',
            '6. Si el grupo acierta, ganan. Si el impostor los engaña, él gana.'
        ],
        facts: mentiraPerfectaFacts
    },
    pregunta_trampa: {
        id: 'pregunta_trampa',
        name: 'Pregunta Trampa',
        description: 'Convence al grupo de que tu objeto sirve.',
        rules: [
            '1. Se presenta una situación extrema.',
            '2. Cada jugador recibe un objeto.',
            '3. Un jugador (el Impostor) recibe un objeto que es completamente inútil en esa situación.',
            '4. Cada uno debe explicar de forma breve y lógica por qué su objeto ayudaría a sobrevivir.',
            '5. El grupo debate y vota quién tiene el objeto que menos sirve.',
            '6. Si el grupo lo descubre, ganan. Si el impostor convence a todos, gana.'
        ],
        situations: preguntaTrampaSituations
    }
};
