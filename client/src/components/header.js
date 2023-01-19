import React from "react";
import img from "./micro-logo.png";
export function Header(){
    return(
        <>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-lg-3'>
                        <img src={img} className='col-lg-12' />
                    </div>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-4'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center  bg-light p-2'>
                        <h1>KGM Admission Test</h1>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        </>
    );
}