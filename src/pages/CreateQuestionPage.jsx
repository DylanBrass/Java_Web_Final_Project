import React, { useEffect, useState } from 'react'
import axios from 'axios';

function CreateQuestionPage() {
    const onSubmit = (event) => {
        event.preventDefault();

        const question = {
            "Question": event.target.elements.Question.value,
            "Answer": event.target.elements.Answer.value,
            "FakeAnswerOne": event.target.elements.FakeOne.value,
            "FakeAnswerTwo": event.target.elements.FakeTwo.value,
            "FakeAnswerThree": event.target.elements.FakeThree.value
        }
        addQuestion(question, event.target.elements.Country.value);

    }
    const [countries, setCountries] = useState([]);

    const loadCountriesFromAPI = () => {
        axios.get("http://localhost:8080/api/countries")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    setCountries(response.data);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        loadCountriesFromAPI();
    }, []);


    const addQuestion = (question, id) => {
        axios.post('http://localhost:8080/api/countries/' + id + '/questions', question)
            .then(function (response) {
                if (response.status == 201) {
                    alert("Question was succefully added");
                    document.getElementById('Q').value = '';
                    document.getElementById('A').value = '';
                    document.getElementById('FO').value = '';
                    document.getElementById('FT').value = '';
                    document.getElementById('FTH').value = '';
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
                            <input className='w-75 m-3' required id='Q' name='Question' placeholder='What is the question ?' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <input className='w-75 m-3' required id='A' name='Answer' placeholder='What is the answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <input className='w-75 m-3' required id='FO' name='FakeOne' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <input className='w-75 m-3' required id='FT' name='FakeTwo' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <input className='w-75 m-3' required id='FTH' name='FakeThree' placeholder='What is a erroneous answer to that question ?' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <label>What is the concerned country ?</label>
                            <select className='w-75 m-3' required name='Country'>
                                {
                                    countries.map((country) => (
                                        <option
                                            key={"Option:" + country.id}
                                            value={country.id}
                                        >
                                            {country.countryName}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-12'>

                            <button className='submit-button' type='submit'>Add Question</button>
                        </div>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default CreateQuestionPage