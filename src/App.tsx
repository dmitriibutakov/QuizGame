import React, {useState} from 'react';
import './App.css';

// export type QuestionsType = {
//     questionText: string
//     answerOptions: AnswerOptionsType[]
// }
// type AnswerOptionsType = {
//     answerText: string
//     isCorrect: boolean
// }
//
// type AppType = {
//     questions: Array<QuestionsType>
//     setShareScore: (a: boolean) => void
// }

const App = () => {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                {answerText: 'New York', isCorrect: false},
                {answerText: 'London', isCorrect: false},
                {answerText: 'Paris', isCorrect: true},
                {answerText: 'Dublin', isCorrect: false},
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                {answerText: 'Jeff Bezos', isCorrect: false},
                {answerText: 'Elon Musk', isCorrect: true},
                {answerText: 'Bill Gates', isCorrect: false},
                {answerText: 'Tony Stark', isCorrect: false},
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                {answerText: 'Apple', isCorrect: true},
                {answerText: 'Intel', isCorrect: false},
                {answerText: 'Amazon', isCorrect: false},
                {answerText: 'Microsoft', isCorrect: false},
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                {answerText: '1', isCorrect: false},
                {answerText: '4', isCorrect: false},
                {answerText: '6', isCorrect: false},
                {answerText: '7', isCorrect: true},
            ],
        },
    ];

    const [countQuestion, setCountQuestion] = useState<number>(0)
    const [shareScore, setShareScore] = useState<boolean>(false)
    const [scores, setScores] = useState<number>(0)

    const onClickHandler = (isCorrect: boolean) => {
        if (isCorrect) setScores(scores + 1)
        const nextQuestion = countQuestion + 1
        if (nextQuestion < questions.length) {
            setCountQuestion(nextQuestion)
        } else setShareScore(true)

    }

    return (
        <div className="App">
            <div className="mainblock">
                {shareScore ? (
                    <div className='score-section'>You scored {scores} out of {questions.length}</div>) : (
                    <div className="main">
                        <div className="leftBlock">
                            <div className="headerQuestion">
                                <span className="title">Question {countQuestion + 1}</span>
                                <span className="count">/ {questions.length}</span>
                            </div>
                            <div className="question">{questions[countQuestion].questionText}</div>
                            <div className="countCorrect">currentQuestions: {scores}</div>
                        </div>
                        <div className="rightBlock">
                            {questions[countQuestion].answerOptions.map(a => <button
                                onClick={() => onClickHandler(a.isCorrect)}
                                className="btn">{a.answerText}</button>)}
                        </div>
                    </div>)}
            </div>

        </div>
    );
}

export default App;
