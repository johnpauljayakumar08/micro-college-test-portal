import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./micro-logo.png";
import './add.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import date from 'date-and-time';

export default function Otp() {
    // const [timee,setTime]=useState()

    // var Time = new Date();
    // document.getElementById('date-time').innerHTML=dt;



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
                    <div className='col-lg-3'>
                    <p> <span id='date-time'></span>.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-12'></div>
            <div className='row mt-5'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2'>
                    <h5 className='text-center'>Enter your OTP:</h5>
                </div>
                <div className='col-lg-4'>
                    <input type='text' name='otp' id='otp' className=' box bg-light otp' />
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className='row'>
                <div className='col-lg-5'></div>
                <div className='col-lg-2 mt-4'>
                    <Link to="/test">
                        <button type='submit' className=' btn btn-success col-lg-12' value='submit' name='submit'>Verify</button></Link>
                </div>
                <div className='col-lg-5'></div>
            </div>
        </>
    );
}