import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from "./micro-logo.png";
import './add.css';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


import axios from 'axios';
export default function Login() {

    const handelsubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctype": "multipart/form-data" } };


        var firstname = document.getElementById("candidatename").value;
        var lastname = document.getElementById("phoneno").value;
        var email = document.getElementById("email").value;
        var phoneno = document.getElementById("email").value;
        var counsellorname = document.getElementById("email").value;
        var aboutinstitute = document.getElementById("email").value;
        var nativecity = document.getElementById("email").value;
        var recidencecity = document.getElementById("email").value;


        if (firstname === '' || firstname === null) {
            alert("Enter your First Name");
        }
        else if (lastname === '' || lastname === null) {
            alert(" Enter your Last Name");
        }
        else if (email === '' || email === null) {
            alert("Enter your email");
        }
        else if (phoneno === '' || phoneno === null) {
            alert("Enter your phoneno");
        }
        else if (counsellorname === '' || counsellorname === null) {
            alert("Enter your counsellorname");
        }
        else if (aboutinstitute === '' || aboutinstitute === null) {
            alert("Enter your aboutinstitute");
        }
        else if (nativecity === '' || nativecity === null) {
            alert("Enter your nativecity");
        }
        else if (recidencecity === '' || recidencecity === null) {
            alert("Enter your recidencecity");
        }
        else {
            await axios.post('http://localhost:3002/add', key, value)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('error');
                        window.location.reload();
                    }
                    else if (res.data.status === 'Success') {
                        alert("Inserted");
                        window.location.href = "./otp";

                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }
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
                {/* <div className='container'>
                <form onSubmit={handelsubmit}>
                    <div className='form'>
                        <div className='row mt-5 '>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-3 text-center'>
                                <h5>Candidate-Name:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='text' name='candidatename' id='candidatename'  classname='box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Phone-No:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='text' name='phoneno' id='phoneno'  classname=' box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2 text-center'>
                                <h5>Email:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='email' name='email' id='email'  classname=' box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2 mt-5 '>
                                <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Submit</button>
                            </div>
                            <div className='col-lg-5'></div>
                        </div>
                    </div>
                </form>
                </div> */}
                <div className='container'>
                    <form onSubmit={handelsubmit}>
                        <div className='form'>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>FirstName:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='firstname' id='firstname' classname='box form-control' />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>LastName:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='lastname' id='lastname' classname='box form-control' />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Email:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='email' name='email' id='email' classname='box form-control' />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>PhoneNo:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='phoneno' id='phoneno' classname='box form-control' />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>CounsellorName:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='counsellorname' id='counsellorname' classname='box form-control' />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>AboutInstitute:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='institute' id='institute' classname='box form-control' />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>NativeCity:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='nativecity' id='nativecity' classname='box form-control' />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>ResidenceCity:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='recidencecity' id='recidencecity' classname='box form-control' />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Degree:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='degree' id='degree' classname='box form-control' />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>EmployeStatus:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle='dropdown' id="dropdownMenuButton" aria-expanded="false">Dropdown button</button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li class="dropdown-item">YES</li>
                                                <li class="dropdown-item">NO</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-lg-5'></div>
                                <div className='col-lg-2'>
                                <Link to="/otp">
                                    <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Submit</button></Link>
                                </div>
                                <div className='col-lg-5'></div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}