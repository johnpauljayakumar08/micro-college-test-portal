import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./micro-logo.png";
import './add.css';
import { Link } from 'react-router-dom';

export default function Test() {

   
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
                <div className='col-lg-12'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-6 text-center mt-5'>
                            <h3><b>Please read the instructions carefully</b></h3>
                        </div>
                        <div className='col-lg-3'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 mt-3'>
                            <h5>General Instructions:</h5>
                        </div>
                        <div className='col-lg-9'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 mt-2'>
                            <p>1.Each question in TCS NQT have pre-defined time limit based on the question difficulty.</p>
                            <p>2.To conduct the exam in fair means, we are defining maximum time limit for each of the multiple-choice questions. You need to complete each question within time limit defined and you will not be able to revisit the question once you move to next question</p>
                            <p>3.Time saved from one question cannot be utilized to answer the subsequent questions. Even if you complete answering the questions earlier than the specified time limit, you will have to wait for the time limit to expire for that question to proceed to the next question</p>
                            <p>4.You can take the questions only in the order and sequence in which it is appearing.</p>
                            <p>5.You cannot view or edit the responses of Questions you have already attempted or answered</p>
                            <p>6.The clock will be set at the server. The countdown timer in the top right corner of screen will display the time remaining for each question.</p>
                            <p>7.When the time limit defined for each question is reached, automatically it will navigate to the next questions. Until then you will not be able to answer or view the subsequent questions.</p>
                            <p>8.Tools like Notepad and Calculator are provided at the top right corner for you to do any rough work or calculations</p>
                        </div>
                    </div>
                    <div className='row bg-primary'>
                        <div className='col-lg-1 p-3 text-center'>
                            <input type='checkbox' name='check' id='check'/>
                        </div>
                        <div className='col-lg-3 p-3'>
                            <h5 className='text-center'>Read the acknowledged</h5>
                        </div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-2 p-3'>
                        <Link to="/questions">
                            <button type='submit' className='btn btn-danger col-lg-12' value='submit' name='submit'>Start Test</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}