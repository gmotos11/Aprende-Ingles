const sentences = [
    { english: "I get up early on weekends.", spanish: "Me levanto temprano los fines de semana.", literal: "Get up = Levantarse" },
    { english: "He gets down after a long day at work.", spanish: "Él se deprime después de un largo día en el trabajo.", literal: "Get down = Deprimirse" },
    { english: "She got over the breakup quickly.", spanish: "Ella superó la ruptura rápidamente.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along despite their differences.", spanish: "Ellos se llevan bien a pesar de sus diferencias.", literal: "Get along = Llevarse bien" },
    { english: "He can get by without a smartphone.", spanish: "Él puede arreglárselas sin un smartphone.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from the crowded party.", spanish: "Ella logró escapar de la fiesta abarrotada.", literal: "Get away = Escapar" },
    { english: "We need to get back home before dark.", spanish: "Necesitamos regresar a casa antes de que oscurezca.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in the elevator and went up to the top floor.", spanish: "Ellos entraron en el ascensor y subieron al último piso.", literal: "Get in = Entrar a algún lugar" },
    { english: "She gets off the train at the main station.", spanish: "Ella se baja del tren en la estación principal.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "He gets on with everyone in the office.", spanish: "Él se lleva bien con todos en la oficina.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of this town for a while.", spanish: "Necesitamos salir de este pueblo por un tiempo.", literal: "Get out = Salir" },
    { english: "She got through the interview successfully.", spanish: "Ella superó la entrevista con éxito.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with this project soon.", spanish: "Espero que terminemos este proyecto pronto.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "He got rid of the old furniture.", spanish: "Él se deshizo de los muebles viejos.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a movie night.", spanish: "Ellos están planeando reunirse para una noche de cine.", literal: "Get together = Reunirse" },
    { english: "She needs to get her message across clearly.", spanish: "Ella necesita comunicar su mensaje claramente.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "He got away with the prank on his friend.", spanish: "Él se salió con la suya con la broma a su amigo.", literal: "Get away with = Salirse con la suya" },
    { english: "She is plotting to get back at her coworker.", spanish: "Ella está planeando vengarse de su compañero de trabajo.", literal: "Get back at = Vengarse" },
    { english: "He got into trouble with the law.", spanish: "Él se metió en problemas con la ley.", literal: "Get into = Meterse en algo" },
    { english: "She is getting on with her new project.", spanish: "Ella está continuando con su nuevo proyecto.", literal: "Get on with = Continuar con" },
    { english: "He had to get around the traffic jam.", spanish: "Él tuvo que moverse alrededor del atasco de tráfico.", literal: "Get around = Desplazarse" },
    { english: "She tried to get at the core of the issue.", spanish: "Ella trató de llegar al fondo del problema.", literal: "Get at = Insinuar o llegar a algo" },
    { english: "The kids got up to some fun activities after school.", spanish: "Los niños hicieron algunas actividades divertidas después de la escuela.", literal: "Get up to = Hacer algo (Especialmente una travesura)" },
    { english: "I get up early every day to exercise.", spanish: "Me levanto temprano todos los días para hacer ejercicio.", literal: "Get up = Levantarse" },
    { english: "He gets down whenever he hears bad news.", spanish: "Él se deprime cada vez que escucha malas noticias.", literal: "Get down = Deprimirse" },
    { english: "She got over her fear of heights.", spanish: "Ella superó su miedo a las alturas.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along very well with their neighbors.", spanish: "Ellos se llevan muy bien con sus vecinos.", literal: "Get along = Llevarse bien" },
    { english: "He can get by on his part-time job.", spanish: "Él puede arreglárselas con su trabajo a medio tiempo.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from the crowded event.", spanish: "Ella logró escapar del evento abarrotado.", literal: "Get away = Escapar" },
    { english: "We need to get back to the office after lunch.", spanish: "Necesitamos regresar a la oficina después del almuerzo.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in the taxi and drove to the airport.", spanish: "Ellos entraron en el taxi y fueron al aeropuerto.", literal: "Get in = Entrar a algún lugar" },
    { english: "She gets off the bike at the park entrance.", spanish: "Ella se baja de la bicicleta en la entrada del parque.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "He gets on well with his classmates.", spanish: "Él se lleva bien con sus compañeros de clase.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of the office for a break.", spanish: "Necesitamos salir de la oficina para un descanso.", literal: "Get out = Salir" },
    { english: "She got through the presentation without any issues.", spanish: "Ella superó la presentación sin problemas.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with this deadline soon.", spanish: "Espero que terminemos este plazo pronto.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "He got rid of the extra paperwork.", spanish: "Él se deshizo del papeleo extra.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a weekend trip.", spanish: "Ellos están planeando reunirse para un viaje de fin de semana.", literal: "Get together = Reunirse" },
    { english: "She needs to get her points across during the meeting.", spanish: "Ella necesita comunicar sus puntos durante la reunión.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "He got away with the minor error in the report.", spanish: "Él se salió con la suya con el error menor en el informe.", literal: "Get away with = Salirse con la suya" },
    { english: "She is plotting to get back at her ex for the breakup.", spanish: "Ella está planeando vengarse de su ex por la ruptura.", literal: "Get back at = Vengarse" },
    { english: "He got into a fight with his brother.", spanish: "Él se metió en una pelea con su hermano.", literal: "Get into = Meterse en algo" },
    { english: "She is getting on with her daily tasks despite the chaos.", spanish: "Ella está continuando con sus tareas diarias a pesar del caos.", literal: "Get on with = Continuar con" },
    { english: "He had to get around the new regulations at work.", spanish: "Él tuvo que moverse alrededor de las nuevas regulaciones en el trabajo.", literal: "Get around = Desplazarse" },
    { english: "She tried to get at the real reason behind the decision.", spanish: "Ella trató de llegar al verdadero motivo detrás de la decisión.", literal: "Get at = Insinuar o llegar a algo" },
    { english: "The kids got up to a lot of fun during their holiday.", spanish: "Los niños hicieron muchas cosas divertidas durante sus vacaciones.", literal: "Get up to = Hacer algo (Especialmente una travesura)" },
    { english: "I get up at the crack of dawn for my jog.", spanish: "Me levanto al amanecer para mi carrera.", literal: "Get up = Levantarse" },
    { english: "He gets down when he feels overwhelmed.", spanish: "Él se deprime cuando se siente abrumado.", literal: "Get down = Deprimirse" },
    { english: "She got over her anxiety after therapy.", spanish: "Ella superó su ansiedad después de la terapia.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along like a house on fire.", spanish: "Ellos se llevan como uña y carne.", literal: "Get along = Llevarse bien" },
    { english: "He can get by with minimal resources.", spanish: "Él puede arreglárselas con recursos mínimos.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from the noisy crowd.", spanish: "Ella logró escapar de la multitud ruidosa.", literal: "Get away = Escapar" },
    { english: "We need to get back to work after lunch break.", spanish: "Necesitamos volver al trabajo después del almuerzo.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in the boat and rowed to the island.", spanish: "Ellos subieron al bote y remararon hacia la isla.", literal: "Get in = Entrar a algún lugar" },
    { english: "He gets off the plane and heads to customs.", spanish: "Él se baja del avión y se dirige a la aduana.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "She gets on well with her new neighbors.", spanish: "Ella se lleva bien con sus nuevos vecinos.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of this meeting.", spanish: "Necesitamos salir de esta reunión.", literal: "Get out = Salir" },
    { english: "He got through the rigorous training program.", spanish: "Él superó el riguroso programa de entrenamiento.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with this tedious task soon.", spanish: "Espero que terminemos pronto con esta tarea tediosa.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "She got rid of all the old documents.", spanish: "Ella se deshizo de todos los documentos viejos.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a team-building event.", spanish: "Ellos están planeando reunirse para un evento de integración.", literal: "Get together = Reunirse" },
    { english: "He needs to get his point across during the debate.", spanish: "Él necesita comunicar su punto durante el debate.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "She got away with the surprise party without anyone knowing.", spanish: "Ella se salió con la suya con la fiesta sorpresa sin que nadie lo supiera.", literal: "Get away with = Salirse con la suya" },
    { english: "He is planning to get back at his rival for the competition loss.", spanish: "Él está planeando vengarse de su rival por la pérdida en la competencia.", literal: "Get back at = Vengarse" },
    { english: "She got into a discussion about politics.", spanish: "Ella se metió en una discusión sobre política.", literal: "Get into = Meterse en algo" },
    { english: "He is getting on with his research despite the setbacks.", spanish: "Él está continuando con su investigación a pesar de los contratiempos.", literal: "Get on with = Continuar con" },
    { english: "They had to get around the restrictions imposed by the city.", spanish: "Ellos tuvieron que moverse alrededor de las restricciones impuestas por la ciudad.", literal: "Get around = Desplazarse" },
    { english: "She tried to get at the heart of the issue.", spanish: "Ella trató de llegar al corazón del problema.", literal: "Get at = Insinuar o llegar a algo" },
    { english: "The kids got up to some mischief during the sleepover.", spanish: "Los niños hicieron alguna travesura durante la pijamada.", literal: "Get up to = Hacer algo (Especialmente una travesura)" },
    { english: "I get up feeling excited about the new day.", spanish: "Me levanto sintiéndome emocionado por el nuevo día.", literal: "Get up = Levantarse" },
    { english: "He gets down when he feels isolated.", spanish: "Él se deprime cuando se siente aislado.", literal: "Get down = Deprimirse" },
    { english: "She got over her hesitation and took the job.", spanish: "Ella superó su hesitación y aceptó el trabajo.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along very well on their road trips.", spanish: "Ellos se llevan muy bien en sus viajes por carretera.", literal: "Get along = Llevarse bien" },
    { english: "He can get by with just a few basic tools.", spanish: "Él puede arreglárselas con solo unas pocas herramientas básicas.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from the busy city for a weekend.", spanish: "Ella logró escapar de la ciudad concurrida durante un fin de semana.", literal: "Get away = Escapar" },
    { english: "We need to get back to the original plan.", spanish: "Necesitamos volver al plan original.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in the car and drove to the countryside.", spanish: "Ellos entraron en el coche y condujeron al campo.", literal: "Get in = Entrar a algún lugar" },
    { english: "He gets off the bus at the next stop.", spanish: "Él se baja del autobús en la próxima parada.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "She gets on with her colleagues exceptionally well.", spanish: "Ella se lleva excepcionalmente bien con sus colegas.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of our comfort zone.", spanish: "Necesitamos salir de nuestra zona de confort.", literal: "Get out = Salir" },
    { english: "He got through the difficult times with his family’s support.", spanish: "Él superó los tiempos difíciles con el apoyo de su familia.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with the long process soon.", spanish: "Espero que terminemos pronto con el largo proceso.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "She got rid of her old computer for a new one.", spanish: "Ella se deshizo de su computadora vieja por una nueva.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a game night.", spanish: "Ellos están planeando reunirse para una noche de juegos.", literal: "Get together = Reunirse" },
    { english: "He needs to get his ideas across to the team.", spanish: "Él necesita comunicar sus ideas al equipo.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "She got away with the surprise for her friend’s birthday.", spanish: "Ella se salió con la suya con la sorpresa para el cumpleaños de su amiga.", literal: "Get away with = Salirse con la suya" },
    { english: "He is plotting to get back at his competitor.", spanish: "Él está planeando vengarse de su competidor.", literal: "Get back at = Vengarse" },
    { english: "She got into a new hobby recently.", spanish: "Ella se metió en un nuevo pasatiempo recientemente.", literal: "Get into = Meterse en algo" },
    { english: "He is getting on with his new hobby every weekend.", spanish: "Él está continuando con su nuevo pasatiempo cada fin de semana.", literal: "Get on with = Continuar con" },
    { english: "They had to get around the construction work on their street.", spanish: "Ellos tuvieron que moverse alrededor del trabajo de construcción en su calle.", literal: "Get around = Desplazarse" },
    { english: "She tried to get at the reason for his sudden departure.", spanish: "Ella trató de llegar al motivo de su repentina partida.", literal: "Get at = Insinuar o llegar a algo" },
    { english: "I get up early to beat the traffic.", spanish: "Me levanto temprano para evitar el tráfico.", literal: "Get up = Levantarse" },
    { english: "He gets down whenever he hears bad news.", spanish: "Él se deprime cada vez que escucha malas noticias.", literal: "Get down = Deprimirse" },
    { english: "She got over her fear of flying after a few trips.", spanish: "Ella superó su miedo a volar después de algunos viajes.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along famously with their new boss.", spanish: "Ellos se llevan de maravilla con su nuevo jefe.", literal: "Get along = Llevarse bien" },
    { english: "He can get by with just a few basic ingredients.", spanish: "Él puede arreglárselas con solo unos pocos ingredientes básicos.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from her busy schedule for a week.", spanish: "Ella logró escapar de su agenda ocupada por una semana.", literal: "Get away = Escapar" },
    { english: "We need to get back our focus after the distraction.", spanish: "Necesitamos recuperar nuestro enfoque después de la distracción.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in the line for tickets early.", spanish: "Ellos se colocaron en la fila para las entradas temprano.", literal: "Get in = Entrar a algún lugar" },
    { english: "He gets off the train and walks to his office.", spanish: "Él se baja del tren y camina hasta su oficina.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "She gets on with everyone in the team.", spanish: "Ella se lleva bien con todos en el equipo.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of the city for a while.", spanish: "Necesitamos salir de la ciudad por un tiempo.", literal: "Get out = Salir" },
    { english: "He got through the paperwork without any issues.", spanish: "Él superó el papeleo sin problemas.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with the lengthy discussion soon.", spanish: "Espero que terminemos pronto con la larga discusión.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "She got rid of her old furniture before moving.", spanish: "Ella se deshizo de sus muebles viejos antes de mudarse.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a family reunion.", spanish: "Ellos están planeando reunirse para una reunión familiar.", literal: "Get together = Reunirse" },
    { english: "He needs to get his message across during the meeting.", spanish: "Él necesita comunicar su mensaje durante la reunión.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "She got away with taking an extra day off without permission.", spanish: "Ella se salió con la suya al tomarse un día extra libre sin permiso.", literal: "Get away with = Salirse con la suya" },
    { english: "He is planning to get back at his colleague for the prank.", spanish: "Él está planeando vengarse de su colega por la broma.", literal: "Get back at = Vengarse" },
    { english: "She got into a great university after her hard work.", spanish: "Ella se metió en una gran universidad después de su arduo trabajo.", literal: "Get into = Meterse en algo" },
    { english: "He is getting on with his exercise routine every day.", spanish: "Él está continuando con su rutina de ejercicios todos los días.", literal: "Get on with = Continuar con" },
    { english: "They had to get around the detour on their way to the concert.", spanish: "Ellos tuvieron que moverse alrededor del desvío en su camino al concierto.", literal: "Get around = Desplazarse" },
    { english: "She tried to get at the underlying problem in their relationship.", spanish: "Ella trató de llegar al problema subyacente en su relación.", literal: "Get at = Insinuar o llegar a algo" },
    { english: "The kids got up to a fun adventure in the backyard.", spanish: "Los niños hicieron una divertida aventura en el patio trasero.", literal: "Get up to = Hacer algo (Especialmente una travesura)" },
    { english: "I get up ready to tackle the day’s challenges.", spanish: "Me levanto listo para enfrentar los desafíos del día.", literal: "Get up = Levantarse" },
    { english: "He gets down when he thinks about his past mistakes.", spanish: "Él se deprime cuando piensa en sus errores del pasado.", literal: "Get down = Deprimirse" },
    { english: "She got over her doubts and signed the contract.", spanish: "Ella superó sus dudas y firmó el contrato.", literal: "Get over = Superar (Una enfermedad o una situación difícil)" },
    { english: "They get along splendidly on their business trips.", spanish: "Ellos se llevan espléndidamente en sus viajes de negocios.", literal: "Get along = Llevarse bien" },
    { english: "He can get by with his limited Spanish while traveling in Spain.", spanish: "Él puede arreglárselas con su español limitado mientras viaja por España.", literal: "Get by = Arreglárselas" },
    { english: "She managed to get away from the stressful job for a day.", spanish: "Ella logró escapar del trabajo estresante por un día.", literal: "Get away = Escapar" },
    { english: "We need to get back to the basics after the complex project.", spanish: "Necesitamos volver a lo básico después del proyecto complejo.", literal: "Get back = Recuperar algo / Volver" },
    { english: "They got in line early to ensure they got the best seats.", spanish: "Ellos se colocaron en la fila temprano para asegurarse de obtener los mejores asientos.", literal: "Get in = Entrar a algún lugar" },
    { english: "He gets off work at 5 PM every day.", spanish: "Él se baja del trabajo a las 5 PM todos los días.", literal: "Get off = Bajarse (De un vehículo)" },
    { english: "She gets on with her studies despite the distractions.", spanish: "Ella se lleva bien con sus estudios a pesar de las distracciones.", literal: "Get on = Llevarse bien con alguien" },
    { english: "We need to get out of this predicament soon.", spanish: "Necesitamos salir de este aprieto pronto.", literal: "Get out = Salir" },
    { english: "He got through the financial crisis with careful planning.", spanish: "Él superó la crisis financiera con una planificación cuidadosa.", literal: "Get through = Superar (Una situación difícil)" },
    { english: "I hope we get over with the lengthy process before the deadline.", spanish: "Espero que terminemos pronto con el largo proceso antes de la fecha límite.", literal: "Get over with = Terminar (Una situación desagradable)" },
    { english: "She got rid of her old car for a new one.", spanish: "Ella se deshizo de su coche viejo por uno nuevo.", literal: "Get rid of = Deshacerse de algo" },
    { english: "They are planning to get together for a charity event.", spanish: "Ellos están planeando reunirse para un evento benéfico.", literal: "Get together = Reunirse" },
    { english: "He needs to get his feedback across during the review.", spanish: "Él necesita comunicar su retroalimentación durante la revisión.", literal: "Get across = Comunicar / Hacer entender algo" },
    { english: "She got away with her mistake due to a lucky break.", spanish: "Ella se salió con la suya con su error debido a una suerte inesperada.", literal: "Get away with = Salirse con la suya" },
    { english: "He is plotting to get back at his rival for the unfair competition.", spanish: "Él está planeando vengarse de su rival por la competencia injusta.", literal: "Get back at = Vengarse" },
    { english: "She got into the habit of jogging every morning.", spanish: "Ella se metió en el hábito de correr todas las mañanas.", literal: "Get into = Meterse en algo" },
    { english: "He is getting on with his new project efficiently.", spanish: "Él está continuando con su nuevo proyecto de manera eficiente.", literal: "Get on with = Continuar con" },
    // Añadir más frases aquí para un total de 500
];


const conjugations = [
    "Get up",
    "Get down",
    "Get over",
    "Get along",
    "Get by",
    "Get away",
    "Get back",
    "Get in",
    "Get off",
    "Get on",
    "Get out",
    "Get through",
    "Get over with",
    "Get rid of",
    "Get together",
    "Get across",
    "Get away with",
    "Get back at",
    "Get into",
    "Get on with",
    "Get around",
    "Get at",
    "Get up to",
    // Añadir más conjugaciones aquí si es necesario
];


// Mapa para la traducción literal de cada conjugación
const literalTranslations = {
    "Get up": "Levantarse",
    "Get down": "Deprimirse / Agacharse",
    "Get over": "Superar (Una enfermedad o una situación difícil)",
    "Get along": "Llevarse bien",
    "Get by": "Arreglárselas / Sobrevivir",
    "Get away": "Escapar / Huir",
    "Get back": "Volver o recuperar algo",
    "Get in": "Entrar a algún lugar",
    "Get off": "Bajarse (De un vehículo) / Librarse (De un castigo)",
    "Get on": "Subirse (A un vehículo) / Llevarse bien con alguien",
    "Get out": "Salir",
    "Get through": "Terminar / Superar (Una situación difícil)",
    "Get over with": "Terminar (Una situación desagradable)",
    "Get rid of": "Deshacerse de algo",
    "Get together": "Reunirse",
    "Get across": "Comunicar / Hacer entender algo",
    "Get away with": "Se salió con la suya",
    "Get back at": "Vengarse",
    "Get into": "Meterse en algo",
    "Get on with": "Continuar (Haciendo algo, especialmente después de una interrupción)",
    "Get around": "Desplazarse / Moverse",
    "Get at": "Insinuar o llegar a algo",
    "Get up to": "Hacer algo (Especialmente una travesura o algo malo)",
    // Asegúrate de añadir todas las conjugaciones aquí si tienes más
};

const stats = {};
conjugations.forEach(conjugation => {
    stats[conjugation] = { correct: 0, incorrect: 0 };
});

const sentenceElement = document.getElementById('sentence');
const spanishTranslationElement = document.getElementById('spanish-translation');
const literalTranslationElement = document.getElementById('literal-translation');
const statsList = document.getElementById('stats-list');
const conjugationsList = document.querySelector('#conjugations-list ul');
const showTranslationButton = document.getElementById('show-translation');
const correctButton = document.getElementById('correct-button');
const incorrectButton = document.getElementById('incorrect-button');
const toggleTranslationButton = document.getElementById('toggle-translation');

let currentSentence;

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function updateStats() {
    statsList.innerHTML = '';
    for (const [conjugation, { correct, incorrect }] of Object.entries(stats)) {
        statsList.innerHTML += `
            <li>
                <strong>${conjugation}</strong>: 
                <span style="color: green;">Correcto: ${correct}</span> / 
                <span style="color: red;">Incorrecto: ${incorrect}</span>
            </li>
        `;
    }
}

function showSentence() {
    currentSentence = getRandomSentence();
    sentenceElement.textContent = currentSentence.english;
    spanishTranslationElement.textContent = '';
    literalTranslationElement.textContent = '';
    document.getElementById('translation').classList.add('hidden');
    correctButton.classList.add('hidden');
    incorrectButton.classList.add('hidden');
}

function handleAnswer(isCorrect) {
    if (currentSentence) {
        const conjugation = currentSentence.literal.split('=')[0].trim();
        if (stats[conjugation]) {
            if (isCorrect) {
                stats[conjugation].correct++;
            } else {
                stats[conjugation].incorrect++;
            }
            updateStats();
        }
    }
    showSentence();
}

document.addEventListener('DOMContentLoaded', () => {
    showSentence();
    updateStats();

    showTranslationButton.addEventListener('click', () => {
        if (currentSentence) {
            spanishTranslationElement.textContent = currentSentence.spanish;
            literalTranslationElement.textContent = currentSentence.literal;
            document.getElementById('translation').classList.remove('hidden');
            correctButton.classList.remove('hidden');
            incorrectButton.classList.remove('hidden');
        }
    });

    correctButton.addEventListener('click', () => handleAnswer(true));
    incorrectButton.addEventListener('click', () => handleAnswer(false));

    toggleTranslationButton.addEventListener('click', () => {
        conjugationsList.parentElement.classList.toggle('hidden');
    });

    conjugations.forEach(conjugation => {
        const translation = literalTranslations[conjugation] || conjugation;
        conjugationsList.innerHTML += `<li><b>${conjugation}</b> = ${translation}</li><br>`;
    });
});
