import React,{useState} from "react";



export function Easy(){
    const questions = [
		{
			questionText: 'Full Form of HTML is?',
			answerOptions: [
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
				{ answerText: 'Home Tool Markup Languare', isCorrect: false },
				
			],
		},
		{
			questionText: 'How many sizes of headers are available in HTML by default?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: 'What is the smallest header in HTML by default?',
			answerOptions: [
				{ answerText: 'H1', isCorrect: false },
				{ answerText: 'H3', isCorrect: false },
				{ answerText: 'H4', isCorrect: false },
				{ answerText: 'H6', isCorrect: true },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
            if(score>=1){

                window.location.href = "/modurate";
            }
			
			
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
					<div className='question-section mr-auto ml-auto'>
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