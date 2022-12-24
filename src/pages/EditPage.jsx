import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";



function EditPage() {
    const location = useLocation()
    const { QuestionSelected } = location.state

    const deleteQuestion = (id) => {
        axios.delete("http://localhost:8080/api/questions/" + id)
            .then(function (response) {
                if (response.status == 200) {
                    alert("Question Deleted");
                }
            })
            .catch(function (error) {
                // handle error
                alert("The error : " + error.status + " has occured");
            })

    }
    const onSubmit = (event) => {
        event.preventDefault();
        const question = {
            "question": event.target.elements.Question.value,
            "answer": event.target.elements.Answer.value,
            "fakeAnswerOne": event.target.elements.FakeOne.value,
            "fakeAnswerTwo": event.target.elements.FakeTwo.value,
            "fakeAnswerThree": event.target.elements.FakeThree.value,
        }

        editQuestion(QuestionSelected.Id, question);
    }




    useEffect(() => {
        document.getElementById('Q').value = QuestionSelected.Question;
        document.getElementById('A').value = QuestionSelected.Answer;
        document.getElementById('FO').value = QuestionSelected.FakeAnswerOne;
        document.getElementById('FT').value = QuestionSelected.FakeAnswerTwo;
        document.getElementById('FTH').value = QuestionSelected.FakeAnswerThree;
    }, []);


    const editQuestion = (id, question) => {
        console.log(id)
        axios.put('http://localhost:8080/api/questions/' + id, question)
            .then(function (response) {
                if (response.status == 200) {
                    alert("Question was modified");
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert("The error : " + error.status + " has occured");
            })

    }

    return (
        <div className='container text-center'>
            <form className='' onSubmit={onSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <label>What is the Question ?</label>
                                <input className='w-100 m-3' required id='Q' name='Question' placeholder='What is the question ?' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <label>What is the answer to that question ?</label>
                            <input className='w-100 m-3' required id='A' name='Answer' placeholder='What is the answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <label>What is a erroneous answer to that question ?</label>
                            <input className='w-100 m-3' required id='FO' name='FakeOne' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <label>What is a erroneous answer to that question ?</label>
                            <input className='w-100 m-3' required id='FT' name='FakeTwo' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <label>What is a erroneous answer to that question ?</label>
                            <input className='w-100 m-3' required id='FTH' name='FakeThree' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>

                            <button className='submit-button' type='submit'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>

            </form >



            <Link className="btn btn-outline-dark" to="/Quiz" state={{ CountrySelected: null }} onClick={() => {
                deleteQuestion(QuestionSelected.Id)
            }}>Delete</Link>
        </div >
    )
}

export default EditPage