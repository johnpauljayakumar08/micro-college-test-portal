// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import img from "./micro-logo.png";
// import './add.css';
// import { Link } from 'react-router-dom';
// export default function Questions() {

//     const [question,setQuestion]=useState([])

//     useEffect(()=>{
//         fetch("http://localhost:3000/questions.json")
//         .then(response=>response.json())
//         .then(json=>setQuestion(json))
//     })
//     return (
//         <>
//             <div className='container-fluid mt-3'>
//                 <div className='row'>
//                     <div className='col-lg-3'>
//                         <img src={img} className='col-lg-12' />
//                     </div>
//                     <div className='col-lg-5'></div>
//                     <div className='col-lg-4'></div>
//                 </div>
//                 <div className='row'>
//                     <div className='col-lg-3'></div>
//                     <div className='col-lg-6 text-center mt-3 bg-light p-2'>
//                         <h1>KGM Admission Test</h1>
//                     </div>
//                     <div className='col-lg-3'></div>
//                 </div>
//                 <div className='container mt-4'>
//                     {
//                         question.map((value,index)=>{
//                             return (
//                                 <div className='row'>
//                                     <div className='col-lg-12 mt-5'>
//                                         <h5>{value.question}</h5>
//                                         <div className='row'>
//                                             <input type="radio" className='check' /> 
//                                             <p className='mt-3 ml-2'>{value.answer1}</p> 
//                                         </div>
//                                         <div className='row'>
//                                         <input type="radio" className='check'/>
//                                         <p className='mt-3 ml-2'>{value.answer2}</p>
//                                         </div>
//                                         <div className='row'>
//                                         <input type="radio" className='check'/>
//                                         <p className='mt-3 ml-2'>{value.answer3}</p>
//                                         </div>
//                                         <div className='row'>
//                                         <input type="radio" className='check'/>
//                                         <p className='mt-3 ml-2'>{value.answer4}</p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             );
//                         })

//                     }
//                     <div className='row'>
//                         <div className='col-lg-10'></div>
//                         <div className='col-lg-2'>
//                             <button type='submit' className='btn btn-danger col-lg-12' value='submit' name='submit'>Submit</button>
//                         </div>
//                     </div>
//                 </div>
                
                
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css';
import img from "./micro-logo.png";

export default function Question() {

    const [showFinalResult, setFinalResult] = useState(false);
    const [score, setscore] = useState(0);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);

    const Question = [
        {
            text: " What is the capital of India",
            options: [
                { id: 0, text: "Chennai", isCorrect: false },
                { id: 0, text: "Delhi", isCorrect: true },
                { id: 0, text: "Suret", isCorrect: false },
                { id: 0, text: "Kenya", isCorrect: false },
            ],
        },
        {
            text: " What is the capital of southi",
            options: [
                { id: 0, text: "1253", isCorrect: false },
                { id: 0, text: "Delhi", isCorrect: true },
                { id: 0, text: "4586", isCorrect: false },
                { id: 0, text: "Kenya", isCorrect: false },
            ],
        },
        {
            text: " What is the capital of Tamil Nadu",
            options: [
                { id: 0, text: "Chennai", isCorrect: false },
                { id: 0, text: "Delhi", isCorrect: true },
                { id: 0, text: "Suret", isCorrect: false },
                { id: 0, text: "Kenya", isCorrect: false },
            ],
        },
        {
            text: " What is the capital of Kerala",
            options: [
                { id: 0, text: "Chennai", isCorrect: false },
                { id: 0, text: "Delhi", isCorrect: true },
                { id: 0, text: "Suret", isCorrect: false },
                { id: 0, text: "Kenya", isCorrect: false },
            ],
        },
        {
            text: " What is the capital of India",
            options: [
                { id: 0, text: "Chennai", isCorrect: false },
                { id: 0, text: "Delhi", isCorrect: true },
                { id: 0, text: "Suret", isCorrect: false },
                { id: 0, text: "Kenya", isCorrect: false },
            ],
        },
    ];

    const optionClick = (isCorrect) => {
        console.log(isCorrect);
        if (isCorrect) {
            setscore(score + 35);
        }

        if (CurrentQuestion + 1 < Question.length) {
            setCurrentQuestion(CurrentQuestion + 1);
        }
        else {
            setFinalResult(true);
        }
    }
    const restaartassesment = () => {
        setscore(0);
        setCurrentQuestion(0);
        setFinalResult(false);
    }
    return (
        <>
        <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <img src={img} className='col-lg-12' />
                    </div>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-4'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center mt-3 bg-light p-2'>
                        <h1>KGM Admission Test</h1>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                
            <div className='container'>
                <div className=' App row '>
                    <div className='col-lg-12'>
                        <h2 className='mt-4'>Current Score: {score}</h2>

                        {showFinalResult ? (

                            <div className='final-result'>
                                <h1>Final Result</h1>
                                <h2>{score} out of {Question.length}  correct - ({(score / Question.length) * 100}%)</h2>
                                <button type='submit' onClick={() => restaartassesment()} className='btn btn-danger'>Restart Assesment</button>

                            </div>
                        ) : (

                            <div className='question'>
                                <h3>Question {CurrentQuestion + 1} out of {Question.length} </h3>
                                <h1 className='question-text mt-3'>{Question[CurrentQuestion].text}</h1>

                                <ul>
                                    {Question[CurrentQuestion].options.map((options) => {
                                        return (
                                            <li onClick={() => optionClick(options.isCorrect)} key={options.id}>{options.text}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                        )}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
 