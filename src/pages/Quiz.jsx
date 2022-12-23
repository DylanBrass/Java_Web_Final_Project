import React, { useEffect, useState } from 'react';
import QuestionDisplay from '../Components/QuestionDisplay';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


function Quiz() {
    const location = useLocation()
    const { CountrySelected } = location.state

    const [questions, setQuestions] = useState([]);

    const loadQuestionsFromAPI = () => {

        if (CountrySelected != null) {


            axios.get("http://localhost:8080/api/countries/" + CountrySelected.id + "/questions")
                .then(function (response) {
                    if (response.status === 200) {
                        console.log(response);
                        setQuestions(response.data);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        } else {


            axios.get("http://localhost:8080/api/questions")
                .then(function (response) {
                    if (response.status === 200) {
                        console.log(response);
                        setQuestions(response.data);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
    useEffect(() => {
        loadQuestionsFromAPI();
    }, [CountrySelected]);

    useEffect(() => {
        loadQuestionsFromAPI();
    }, []);

    const getMultipleRandom = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    return (
        <div>
            <div className='text-center'>
                <h1>this is the quiz page</h1>
                {
                    CountrySelected == null &&
                    < button className='m-2' onClick={() => {
                        window.location.reload(false)
                    }}>
                        New set of Questions
                    </button>
                }
                <button className='m-2'>
                    <Link to="/CreateQuestion">Know a bit about history ? Create your Question !</Link>
                </button>
            </div>
            <div className='container'>
                {
                    getMultipleRandom(questions, 5).map((question) => (
                        <QuestionDisplay
                            key={question.id}
                            question={question}
                        />
                    ))
                }
            </div>
        </div >
    );
}

export default Quiz;