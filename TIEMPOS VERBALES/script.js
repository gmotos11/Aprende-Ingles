const sentences = [
    // Present Simple
    { spanish: "Yo como una manzana.", english: "I eat an apple.", tense: "Present Simple", options: ["I ate an apple.", "I eat an apple.", "I will eat an apple."] },
    { spanish: "Ella juega al fútbol.", english: "She plays football.", tense: "Present Simple", options: ["She plays football.", "She played football.", "She will play football."] },
    { spanish: "Ellos estudian inglés.", english: "They study English.", tense: "Present Simple", options: ["They studied English.", "They study English.", "They will study English."] },

    // Present Continuous
    { spanish: "Yo estoy comiendo una manzana.", english: "I am eating an apple.", tense: "Present Continuous", options: ["I am eating an apple.", "I eat an apple.", "I was eating an apple."] },
    { spanish: "Ella está jugando al fútbol.", english: "She is playing football.", tense: "Present Continuous", options: ["She is playing football.", "She was playing football.", "She plays football."] },
    { spanish: "Ellos están estudiando inglés.", english: "They are studying English.", tense: "Present Continuous", options: ["They are studying English.", "They study English.", "They were studying English."] },

    // Present Perfect
    { spanish: "Yo he comido una manzana.", english: "I have eaten an apple.", tense: "Present Perfect", options: ["I have eaten an apple.", "I ate an apple.", "I eat an apple."] },
    { spanish: "Ella ha jugado al fútbol.", english: "She has played football.", tense: "Present Perfect", options: ["She has played football.", "She played football.", "She plays football."] },
    { spanish: "Ellos han estudiado inglés.", english: "They have studied English.", tense: "Present Perfect", options: ["They have studied English.", "They studied English.", "They study English."] },

    // Present Perfect Continuous
    { spanish: "Yo he estado comiendo una manzana.", english: "I have been eating an apple.", tense: "Present Perfect Continuous", options: ["I have been eating an apple.", "I am eating an apple.", "I was eating an apple."] },
    { spanish: "Ella ha estado jugando al fútbol.", english: "She has been playing football.", tense: "Present Perfect Continuous", options: ["She has been playing football.", "She is playing football.", "She was playing football."] },
    { spanish: "Ellos han estado estudiando inglés.", english: "They have been studying English.", tense: "Present Perfect Continuous", options: ["They have been studying English.", "They are studying English.", "They were studying English."] },

    // Past Simple
    { spanish: "Yo comí una manzana.", english: "I ate an apple.", tense: "Past Simple", options: ["I ate an apple.", "I eat an apple.", "I will eat an apple."] },
    { spanish: "Ella jugó al fútbol.", english: "She played football.", tense: "Past Simple", options: ["She played football.", "She plays football.", "She will play football."] },
    { spanish: "Ellos estudiaron inglés.", english: "They studied English.", tense: "Past Simple", options: ["They studied English.", "They study English.", "They will study English."] },

    // Past Continuous
    { spanish: "Yo estaba comiendo una manzana.", english: "I was eating an apple.", tense: "Past Continuous", options: ["I was eating an apple.", "I am eating an apple.", "I ate an apple."] },
    { spanish: "Ella estaba jugando al fútbol.", english: "She was playing football.", tense: "Past Continuous", options: ["She was playing football.", "She is playing football.", "She played football."] },
    { spanish: "Ellos estaban estudiando inglés.", english: "They were studying English.", tense: "Past Continuous", options: ["They were studying English.", "They study English.", "They studied English."] },

    // Past Perfect
    { spanish: "Yo había comido una manzana.", english: "I had eaten an apple.", tense: "Past Perfect", options: ["I had eaten an apple.", "I ate an apple.", "I eat an apple."] },
    { spanish: "Ella había jugado al fútbol.", english: "She had played football.", tense: "Past Perfect", options: ["She had played football.", "She played football.", "She plays football."] },
    { spanish: "Ellos habían estudiado inglés.", english: "They had studied English.", tense: "Past Perfect", options: ["They had studied English.", "They studied English.", "They study English."] },

    // Past Perfect Continuous
    { spanish: "Yo había estado comiendo una manzana.", english: "I had been eating an apple.", tense: "Past Perfect Continuous", options: ["I had been eating an apple.", "I was eating an apple.", "I had eaten an apple."] },
    { spanish: "Ella había estado jugando al fútbol.", english: "She had been playing football.", tense: "Past Perfect Continuous", options: ["She had been playing football.", "She was playing football.", "She had played football."] },
    { spanish: "Ellos habían estado estudiando inglés.", english: "They had been studying English.", tense: "Past Perfect Continuous", options: ["They had been studying English.", "They were studying English.", "They had studied English."] },

    // Future Simple
    { spanish: "Yo comeré una manzana.", english: "I will eat an apple.", tense: "Future Simple", options: ["I will eat an apple.", "I eat an apple.", "I ate an apple."] },
    { spanish: "Ella jugará al fútbol.", english: "She will play football.", tense: "Future Simple", options: ["She will play football.", "She plays football.", "She played football."] },
    { spanish: "Ellos estudiarán inglés.", english: "They will study English.", tense: "Future Simple", options: ["They will study English.", "They study English.", "They studied English."] },

    // Future Continuous
    { spanish: "Yo estaré comiendo una manzana.", english: "I will be eating an apple.", tense: "Future Continuous", options: ["I will be eating an apple.", "I eat an apple.", "I will eat an apple."] },
    { spanish: "Ella estará jugando al fútbol.", english: "She will be playing football.", tense: "Future Continuous", options: ["She will be playing football.", "She plays football.", "She will play football."] },
    { spanish: "Ellos estarán estudiando inglés.", english: "They will be studying English.", tense: "Future Continuous", options: ["They will be studying English.", "They study English.", "They will study English."] },

    // Future Perfect
    { spanish: "Yo habré comido una manzana.", english: "I will have eaten an apple.", tense: "Future Perfect", options: ["I will have eaten an apple.", "I eat an apple.", "I ate an apple."] },
    { spanish: "Ella habrá jugado al fútbol.", english: "She will have played football.", tense: "Future Perfect", options: ["She will have played football.", "She plays football.", "She played football."] },
    { spanish: "Ellos habrán estudiado inglés.", english: "They will have studied English.", tense: "Future Perfect", options: ["They will have studied English.", "They study English.", "They studied English."] },

    // Future Perfect Continuous
    { spanish: "Yo habré estado comiendo una manzana.", english: "I will have been eating an apple.", tense: "Future Perfect Continuous", options: ["I will have been eating an apple.", "I will be eating an apple.", "I will eat an apple."] },
    { spanish: "Ella habrá estado jugando al fútbol.", english: "She will have been playing football.", tense: "Future Perfect Continuous", options: ["She will have been playing football.", "She will be playing football.", "She will play football."] },
    { spanish: "Ellos habrán estado estudiando inglés.", english: "They will have been studying English.", tense: "Future Perfect Continuous", options: ["They will have been studying English.", "They will be studying English.", "They will study English."] },

    // Adding more sentences for diversity
    // Present Simple
    { spanish: "Él trabaja en una oficina.", english: "He works in an office.", tense: "Present Simple", options: ["He works in an office.", "He worked in an office.", "He will work in an office."] },
    { spanish: "Nosotros vivimos en Londres.", english: "We live in London.", tense: "Present Simple", options: ["We live in London.", "We lived in London.", "We will live in London."] },

    // Past Simple
    { spanish: "Nosotros fuimos al cine ayer.", english: "We went to the cinema yesterday.", tense: "Past Simple", options: ["We went to the cinema yesterday.", "We go to the cinema yesterday.", "We will go to the cinema yesterday."] },
    { spanish: "Ellos terminaron su tarea.", english: "They finished their homework.", tense: "Past Simple", options: ["They finished their homework.", "They finish their homework.", "They will finish their homework."] },

    // Future Simple
    { spanish: "Ella comprará un coche nuevo.", english: "She will buy a new car.", tense: "Future Simple", options: ["She will buy a new car.", "She buys a new car.", "She bought a new car."] },
    { spanish: "Yo visitaré a mis abuelos.", english: "I will visit my grandparents.", tense: "Future Simple", options: ["I will visit my grandparents.", "I visit my grandparents.", "I visited my grandparents."] },

    // Present Continuous
    { spanish: "Nosotros estamos viendo una película.", english: "We are watching a movie.", tense: "Present Continuous", options: ["We are watching a movie.", "We watch a movie.", "We watched a movie."] },
    { spanish: "Ellos están corriendo en el parque.", english: "They are running in the park.", tense: "Present Continuous", options: ["They are running in the park.", "They run in the park.", "They ran in the park."] },

    // Past Continuous
    { spanish: "Él estaba conduciendo a casa.", english: "He was driving home.", tense: "Past Continuous", options: ["He was driving home.", "He is driving home.", "He drove home."] },
    { spanish: "Nosotros estábamos cocinando la cena.", english: "We were cooking dinner.", tense: "Past Continuous", options: ["We were cooking dinner.", "We are cooking dinner.", "We cooked dinner."] },

    // Future Continuous
    { spanish: "Él estará trabajando mañana.", english: "He will be working tomorrow.", tense: "Future Continuous", options: ["He will be working tomorrow.", "He works tomorrow.", "He worked tomorrow."] },
    { spanish: "Nosotros estaremos viajando la próxima semana.", english: "We will be traveling next week.", tense: "Future Continuous", options: ["We will be traveling next week.", "We travel next week.", "We traveled next week."] },

    // Present Perfect
    { spanish: "Yo he visto esa película.", english: "I have seen that movie.", tense: "Present Perfect", options: ["I have seen that movie.", "I saw that movie.", "I see that movie."] },
    { spanish: "Nosotros hemos terminado el proyecto.", english: "We have finished the project.", tense: "Present Perfect", options: ["We have finished the project.", "We finish the project.", "We finished the project."] },

    // Past Perfect
    { spanish: "Yo había terminado mi trabajo antes de irme.", english: "I had finished my work before I left.", tense: "Past Perfect", options: ["I had finished my work before I left.", "I finished my work before I left.", "I finish my work before I leave."] },
    { spanish: "Ellos habían comprado los boletos.", english: "They had bought the tickets.", tense: "Past Perfect", options: ["They had bought the tickets.", "They bought the tickets.", "They buy the tickets."] },

    // Future Perfect
    { spanish: "Yo habré terminado para cuando llegues.", english: "I will have finished by the time you arrive.", tense: "Future Perfect", options: ["I will have finished by the time you arrive.", "I finish by the time you arrive.", "I will finish by the time you arrive."] },
    { spanish: "Ellos habrán vendido la casa.", english: "They will have sold the house.", tense: "Future Perfect", options: ["They will have sold the house.", "They sell the house.", "They will sell the house."] },

    // Present Perfect Continuous
    { spanish: "Yo he estado esperando por horas.", english: "I have been waiting for hours.", tense: "Present Perfect Continuous", options: ["I have been waiting for hours.", "I wait for hours.", "I have waited for hours."] },
    { spanish: "Ellos han estado practicando toda la mañana.", english: "They have been practicing all morning.", tense: "Present Perfect Continuous", options: ["They have been practicing all morning.", "They practice all morning.", "They have practiced all morning."] },

    // Past Perfect Continuous
    { spanish: "Nosotros habíamos estado trabajando todo el día.", english: "We had been working all day.", tense: "Past Perfect Continuous", options: ["We had been working all day.", "We were working all day.", "We worked all day."] },
    { spanish: "Ella había estado estudiando mucho antes del examen.", english: "She had been studying a lot before the exam.", tense: "Past Perfect Continuous", options: ["She had been studying a lot before the exam.", "She was studying a lot before the exam.", "She studied a lot before the exam."] },

    // Future Perfect Continuous
    { spanish: "Yo habré estado trabajando aquí por 10 años el próximo mes.", english: "I will have been working here for 10 years next month.", tense: "Future Perfect Continuous", options: ["I will have been working here for 10 years next month.", "I work here for 10 years next month.", "I will work here for 10 years next month."] },
    { spanish: "Ellos habrán estado esperando por más de una hora cuando llegues.", english: "They will have been waiting for over an hour when you arrive.", tense: "Future Perfect Continuous", options: ["They will have been waiting for over an hour when you arrive.", "They wait for over an hour when you arrive.", "They will wait for over an hour when you arrive."] },

    { spanish: "Ella siempre se levanta temprano.", english: "She always gets up early.", tense: "Present Simple", options: ["She always gets up early.", "She got up early.", "She will get up early."] },
{ spanish: "Ellos visitan a sus abuelos cada verano.", english: "They visit their grandparents every summer.", tense: "Present Simple", options: ["They visit their grandparents every summer.", "They visited their grandparents every summer.", "They will visit their grandparents every summer."] },

// Past Simple
{ spanish: "Nosotros viajamos a París el año pasado.", english: "We traveled to Paris last year.", tense: "Past Simple", options: ["We traveled to Paris last year.", "We travel to Paris last year.", "We will travel to Paris last year."] },
{ spanish: "Ella leyó ese libro la semana pasada.", english: "She read that book last week.", tense: "Past Simple", options: ["She read that book last week.", "She reads that book last week.", "She will read that book last week."] },

// Future Simple
{ spanish: "Voy a empezar un nuevo trabajo mañana.", english: "I will start a new job tomorrow.", tense: "Future Simple", options: ["I will start a new job tomorrow.", "I start a new job tomorrow.", "I started a new job tomorrow."] },
{ spanish: "Ellos se mudarán a una nueva casa el próximo mes.", english: "They will move to a new house next month.", tense: "Future Simple", options: ["They will move to a new house next month.", "They move to a new house next month.", "They moved to a new house next month."] },

// Present Continuous
{ spanish: "Ella está aprendiendo a conducir.", english: "She is learning to drive.", tense: "Present Continuous", options: ["She is learning to drive.", "She learns to drive.", "She learned to drive."] },
{ spanish: "Ellos están planeando sus vacaciones.", english: "They are planning their vacation.", tense: "Present Continuous", options: ["They are planning their vacation.", "They plan their vacation.", "They planned their vacation."] },

// Past Continuous
{ spanish: "Yo estaba viendo la televisión cuando llamó.", english: "I was watching TV when he called.", tense: "Past Continuous", options: ["I was watching TV when he called.", "I am watching TV when he called.", "I watched TV when he called."] },
{ spanish: "Ellos estaban cocinando cuando llegó.", english: "They were cooking when he arrived.", tense: "Past Continuous", options: ["They were cooking when he arrived.", "They are cooking when he arrived.", "They cooked when he arrived."] },

// Future Continuous
{ spanish: "Ella estará durmiendo a esta hora mañana.", english: "She will be sleeping at this time tomorrow.", tense: "Future Continuous", options: ["She will be sleeping at this time tomorrow.", "She is sleeping at this time tomorrow.", "She sleeps at this time tomorrow."] },
{ spanish: "Nosotros estaremos cenando a las 8 PM.", english: "We will be having dinner at 8 PM.", tense: "Future Continuous", options: ["We will be having dinner at 8 PM.", "We are having dinner at 8 PM.", "We have dinner at 8 PM."] },

// Present Perfect
{ spanish: "Ellos han visitado tres países este año.", english: "They have visited three countries this year.", tense: "Present Perfect", options: ["They have visited three countries this year.", "They visited three countries this year.", "They visit three countries this year."] },
{ spanish: "Yo he vivido en Londres por cinco años.", english: "I have lived in London for five years.", tense: "Present Perfect", options: ["I have lived in London for five years.", "I lived in London for five years.", "I live in London for five years."] },

// Past Perfect
{ spanish: "Ellos ya habían salido cuando llegué.", english: "They had already left when I arrived.", tense: "Past Perfect", options: ["They had already left when I arrived.", "They left when I arrived.", "They leave when I arrive."] },
{ spanish: "Nosotros habíamos terminado la tarea antes de que él llegara.", english: "We had finished the homework before he arrived.", tense: "Past Perfect", options: ["We had finished the homework before he arrived.", "We finished the homework before he arrived.", "We finish the homework before he arrives."] },

// Future Perfect
{ spanish: "Ella habrá terminado su ensayo para mañana.", english: "She will have finished her essay by tomorrow.", tense: "Future Perfect", options: ["She will have finished her essay by tomorrow.", "She finishes her essay by tomorrow.", "She finished her essay by tomorrow."] },
{ spanish: "Nosotros habremos completado el proyecto para el viernes.", english: "We will have completed the project by Friday.", tense: "Future Perfect", options: ["We will have completed the project by Friday.", "We complete the project by Friday.", "We completed the project by Friday."] },

// Present Perfect Continuous
{ spanish: "Ella ha estado practicando piano por dos horas.", english: "She has been practicing piano for two hours.", tense: "Present Perfect Continuous", options: ["She has been practicing piano for two hours.", "She practices piano for two hours.", "She practiced piano for two hours."] },
{ spanish: "Ellos han estado trabajando en ese informe durante toda la semana.", english: "They have been working on that report all week.", tense: "Present Perfect Continuous", options: ["They have been working on that report all week.", "They work on that report all week.", "They worked on that report all week."] },

// Past Perfect Continuous
{ spanish: "Nosotros habíamos estado esperando durante horas antes de que él llegara.", english: "We had been waiting for hours before he arrived.", tense: "Past Perfect Continuous", options: ["We had been waiting for hours before he arrived.", "We waited for hours before he arrived.", "We wait for hours before he arrives."] },
{ spanish: "Ella había estado buscando sus llaves por toda la casa.", english: "She had been looking for her keys all over the house.", tense: "Past Perfect Continuous", options: ["She had been looking for her keys all over the house.", "She looked for her keys all over the house.", "She looks for her keys all over the house."] },

// Future Perfect Continuous
{ spanish: "Ellos habrán estado estudiando por tres horas cuando llegues.", english: "They will have been studying for three hours when you arrive.", tense: "Future Perfect Continuous", options: ["They will have been studying for three hours when you arrive.", "They study for three hours when you arrive.", "They studied for three hours when you arrive."] },
{ spanish: "Nosotros habremos estado viajando por 10 horas para cuando lleguemos.", english: "We will have been traveling for 10 hours by the time we arrive.", tense: "Future Perfect Continuous", options: ["We will have been traveling for 10 hours by the time we arrive.", "We travel for 10 hours by the time we arrive.", "We traveled for 10 hours by the time we arrive."] },

// Present Simple
{ spanish: "Ella trabaja como maestra.", english: "She works as a teacher.", tense: "Present Simple", options: ["She works as a teacher.", "She worked as a teacher.", "She will work as a teacher."] },
{ spanish: "Nosotros nadamos en la piscina todos los días.", english: "We swim in the pool every day.", tense: "Present Simple", options: ["We swim in the pool every day.", "We swam in the pool every day.", "We will swim in the pool every day."] },

// Past Simple
{ spanish: "Yo vi esa película ayer.", english: "I saw that movie yesterday.", tense: "Past Simple", options: ["I saw that movie yesterday.", "I see that movie yesterday.", "I will see that movie yesterday."] },
{ spanish: "Ella ganó el primer lugar en la carrera.", english: "She won first place in the race.", tense: "Past Simple", options: ["She won first place in the race.", "She wins first place in the race.", "She will win first place in the race."] },

// Future Simple
{ spanish: "Ellos construirán una nueva casa el próximo año.", english: "They will build a new house next year.", tense: "Future Simple", options: ["They will build a new house next year.", "They build a new house next year.", "They built a new house next year."] },
{ spanish: "Nosotros compraremos un coche nuevo pronto.", english: "We will buy a new car soon.", tense: "Future Simple", options: ["We will buy a new car soon.", "We buy a new car soon.", "We bought a new car soon."] },

];

function loadSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[randomIndex];
    document.getElementById("spanish-sentence").textContent = `${sentence.spanish} (${sentence.tense})`;
    
    const options = document.getElementById("verb-options");
    options.innerHTML = "";
    
    sentence.options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        options.appendChild(opt);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-sentence").style.display = "none";
    document.getElementById("check-answer").style.display = "inline-block";
}

document.getElementById("check-answer").addEventListener("click", function() {
    const selectedOption = document.getElementById("verb-options").value;
    const sentence = sentences.find(s => s.spanish === document.getElementById("spanish-sentence").textContent.split(' (')[0]);

    if (selectedOption === sentence.english) {
        document.getElementById("feedback").textContent = "¡Correcto!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = `Incorrecto. La respuesta correcta es: ${sentence.english}`;
        document.getElementById("feedback").style.color = "red";
    }

    document.getElementById("check-answer").style.display = "none";
    document.getElementById("next-sentence").style.display = "inline-block";
});

document.getElementById("next-sentence").addEventListener("click", function() {
    loadSentence();
});

loadSentence();