import React,{useState} from "react";



export function Advance(){
    const questions = [
		{
			questionText: 'The full form of CSS is:',
			answerOptions: [
				{ answerText: 'Cascading Style Sheets', isCorrect: false },
				{ answerText: 'Coloured Special Sheets', isCorrect: true },
				{ answerText: 'Color and Style Sheets', isCorrect: false },
				{ answerText: 'None of the Above', isCorrect: false },
			],
		},
		{
			questionText: 'How can we change the background color of an element?',
			answerOptions: [
				{ answerText: 'color', isCorrect: false },
				{ answerText: 'background-color', isCorrect: true },
				{ answerText: 'Both A and B', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'How can we change the text color of an element',
			answerOptions: [
				{ answerText: 'color', isCorrect: true },
				{ answerText: 'background-color', isCorrect: false },
				{ answerText: 'Both A and B', isCorrect: false },
				{ answerText: 'None of the Above', isCorrect: false },
			],
		},
		{
			questionText: 'In how many ways can CSS be written in?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
           
			
			
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return(
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

    );
}