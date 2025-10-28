import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw, Trophy, Check, X } from 'lucide-react';

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
        question: "Welche Technik erfindet Toph?",
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
        question: "Wie heißt Korras Polartiger-Hund?",
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
    }
];

export default function AvatarQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    useEffect(() => {
        shuffleQuestions();
    }, []);

    const shuffleQuestions = () => {
        const shuffled = [...quizQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        setShuffledQuestions(shuffled);
    };

    const handleAnswerClick = (index) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(index);
        setShowResult(true);

        if (index === shuffledQuestions[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion + 1 < shuffledQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setQuizFinished(true);
        }
    };

    const resetQuiz = () => {
        shuffleQuestions();
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuizFinished(false);
    };

    if (shuffledQuestions.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
                <div className="text-white text-2xl">Lade Quiz...</div>
            </div>
        );
    }

    if (quizFinished) {
        const percentage = (score / shuffledQuestions.length) * 100;
        let message = "";
        if (percentage === 100) message = "Perfekt! Du bist ein wahrer Avatar-Meister! 🏆";
        else if (percentage >= 80) message = "Ausgezeichnet! Du kennst dich sehr gut aus! 🌟";
        else if (percentage >= 60) message = "Gut gemacht! Solides Avatar-Wissen! 👍";
        else if (percentage >= 40) message = "Nicht schlecht! Es gibt noch mehr zu lernen! 📚";
        else message = "Vielleicht Zeit für einen Rewatch? 😊";

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Quiz beendet!</h1>
                    <div className="text-6xl font-bold mb-4 text-indigo-600">
                        {score}/{shuffledQuestions.length}
                    </div>
                    <p className="text-xl mb-6 text-gray-700">{message}</p>
                    <button
                        onClick={resetQuiz}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Nochmal spielen
                    </button>
                </div>
            </div>
        );
    }

    const question = shuffledQuestions[currentQuestion];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-600">
              Frage {currentQuestion + 1}/{shuffledQuestions.length}
            </span>
                    </div>
                    <div className="text-sm font-semibold text-indigo-600">
                        Score: {score}
                    </div>
                </div>

                <div className="mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              question.series === 'ATLA'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-purple-100 text-purple-800'
          }`}>
            {question.series === 'ATLA' ? 'Der Herr der Elemente' : 'Die Legende von Korra'}
          </span>
                </div>

                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    {question.question}
                </h2>

                <div className="space-y-3 mb-6">
                    {question.answers.map((answer, index) => {
                        const isCorrect = index === question.correct;
                        const isSelected = index === selectedAnswer;

                        let bgColor = "bg-gray-50 hover:bg-gray-100";
                        let borderColor = "border-gray-200";
                        let textColor = "text-gray-800";

                        if (showResult) {
                            if (isCorrect) {
                                bgColor = "bg-green-100";
                                borderColor = "border-green-500";
                                textColor = "text-green-800";
                            } else if (isSelected && !isCorrect) {
                                bgColor = "bg-red-100";
                                borderColor = "border-red-500";
                                textColor = "text-red-800";
                            }
                        } else if (isSelected) {
                            bgColor = "bg-indigo-50";
                            borderColor = "border-indigo-400";
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(index)}
                                disabled={showResult}
                                className={`w-full p-4 rounded-lg border-2 ${bgColor} ${borderColor} ${textColor} transition-all text-left font-medium flex items-center justify-between ${
                                    !showResult ? 'hover:scale-102 cursor-pointer' : 'cursor-default'
                                }`}
                            >
                                <span>{answer}</span>
                                {showResult && isCorrect && <Check className="w-5 h-5 text-green-600" />}
                                {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-red-600" />}
                            </button>
                        );
                    })}
                </div>

                {showResult && (
                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                        {currentQuestion + 1 < shuffledQuestions.length ? 'Nächste Frage' : 'Ergebnis anzeigen'}
                    </button>
                )}

                <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}