// All quiz questions
const quizQuestions = [
    {
        question: "Wie viele Elemente gibt es in der Welt von Avatar?",
        answers: ["Drei", "Vier", "Fünf", "Sechs"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Wie heißt Aangs fliegender Bison?",
        answers: ["Momo", "Appa", "Naga", "Pabu"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Welches Element konnte Aang am Anfang der Serie bändigen?",
        answers: ["Wasser", "Erde", "Feuer", "Luft"],
        correct: 3,
        series: "ATLA"
    },
    {
        question: "Wie heißt Zukos Onkel?",
        answers: ["Ozai", "Iroh", "Roku", "Sozin"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Welche Stadt wird als 'uneinnehmbar' bezeichnet?",
        answers: ["Omashu", "Ba Sing Se", "Republica", "Zaofu"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Wie heißt die spezielle Wasserbändiger-Technik, mit der man Blut kontrollieren kann?",
        answers: ["Blutbändigen", "Blitzbändigen", "Metallbändigen", "Energiebändigen"],
        correct: 0,
        series: "ATLA"
    },
    {
        question: "Wie heißt das blinde Erdbändiger-Mädchen, das Aang trainiert?",
        answers: ["Suki", "Mai", "Ty Lee", "Toph Beifong"],
        correct: 3,
        series: "ATLA"
    },
    {
        question: "Wer war der Avatar vor Aang?",
        answers: ["Kyoshi", "Roku", "Wan", "Kuruk"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Wie heißen die beiden letzten Drachen?",
        answers: ["Ran und Shaw", "Fang und Claw", "Fire und Ice", "Red und Blue"],
        correct: 0,
        series: "ATLA"
    },
    {
        question: "Welche spezielle Bändigungstechnik erfindet Toph?",
        answers: ["Sandbändigen", "Lavabändigen", "Metallbändigen", "Kristallbändigen"],
        correct: 2,
        series: "ATLA"
    },
    {
        question: "Wie heißt der Feuerlord, den Aang besiegen muss?",
        answers: ["Sozin", "Azulon", "Ozai", "Zuko"],
        correct: 2,
        series: "ATLA"
    },
    {
        question: "Welche Fähigkeit nutzt Aang, um Ozai zu besiegen ohne ihn zu töten?",
        answers: ["Blutbändigen", "Energiebändigen", "Geistprojektion", "Avatar-Zustand"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Wie heißt Sokkas Meister im Schwertkampf?",
        answers: ["Piandao", "Bumi", "Pakku", "Jeong Jeong"],
        correct: 0,
        series: "ATLA"
    },
    {
        question: "Aus welchem Material schmiedet Sokka sein Schwert?",
        answers: ["Stahl", "Eisen", "Meteorit", "Gold"],
        correct: 2,
        series: "ATLA"
    },
    {
        question: "Welcher frühere Avatar gründete die Kyoshi-Insel?",
        answers: ["Avatar Wan", "Avatar Kyoshi", "Avatar Roku", "Avatar Yangchen"],
        correct: 1,
        series: "ATLA"
    },
    {
        question: "Aus welcher Nation stammt Avatar Korra?",
        answers: ["Nördlicher Wasserstamm", "Südlicher Wasserstamm", "Republica", "Erdreich"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "In welcher Stadt finden Korras Abenteuer hauptsächlich statt?",
        answers: ["Ba Sing Se", "Republica", "Zaofu", "Omashu"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Mit welchem Element hatte Korra am meisten Schwierigkeiten?",
        answers: ["Wasser", "Erde", "Feuer", "Luft"],
        correct: 3,
        series: "Korra"
    },
    {
        question: "Wie heißt Korras Polarbärhund?",
        answers: ["Appa", "Momo", "Naga", "Pabu"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Wer ist der Hauptantagonist in Staffel 1 von Korra?",
        answers: ["Unalaq", "Zaheer", "Kuvira", "Amon"],
        correct: 3,
        series: "Korra"
    },
    {
        question: "Wie heißt Aangs jüngster Sohn?",
        answers: ["Bumi", "Tenzin", "Meelo", "Rohan"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Wie heißt das Pro-Bending-Team, dem Korra beitritt?",
        answers: ["Die Wolfsbären", "Die Feuerfrettchen", "Die Platypusbären", "Die Tigerdillos"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Wer war Korras direkter Vorgänger als Avatar?",
        answers: ["Roku", "Kyoshi", "Aang", "Wan"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Wie heißt der dunkle Geist in Staffel 2?",
        answers: ["Raava", "Vaatu", "Wan Shi Tong", "Koh"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Welche Fähigkeit entwickelt Zaheer in Staffel 3?",
        answers: ["Blitzbändigen", "Flugfähigkeit", "Lavabändigen", "Geistprojektion"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Wie heißt die Anführerin des Erdimperiums?",
        answers: ["Suyin", "Lin", "Kuvira", "Opal"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Wessen Tochter ist Lin Beifong?",
        answers: ["Katara", "Toph", "Suki", "Mai"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Wie heißt der Geist des Lichts?",
        answers: ["Vaatu", "Raava", "Wan Shi Tong", "La"],
        correct: 1,
        series: "Korra"
    },
    {
        question: "Wie heißt der erste Avatar überhaupt?",
        answers: ["Yangchen", "Kuruk", "Wan", "Szeto"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Mit wem beginnt Korra am Ende der Serie eine Beziehung?",
        answers: ["Mako", "Bolin", "Asami", "Tahno"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Welches Wesen lehrte die Menschen ursprünglich das Wasserbändigen?",
        answers: ["Himmels-Bisons", "Dachsmaulwürfe", "Vulkan", "Drachen"],
        correct: 3,
        series: "ATLA"
    },
    {
        question: "Wie heißt Tenzins ältestes Kind?",
        answers: ["Jinora", "Ikki", "Tenzin Junior", "Oogi"],
        correct: 0,
        series: "Korra"
    },
    {
        question: "Wie heißt Varricks Assistentin?",
        answers: ["Zhu Di", "P'Li", "Zhu Li", "Yin"],
        correct: 2,
        series: "Korra"
    },
    {
        question: "Wie heißt die Schauspielerin die das Fräulein in Not in den Nuktuk-Filmen spielt?",
        answers: ["Gina", "Ginger", "Helena", "Agnes"],
        correct: 1,
        series: "Korra"
    }
];