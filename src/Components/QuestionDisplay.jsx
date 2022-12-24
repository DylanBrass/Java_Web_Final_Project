import React, { useEffect } from 'react'
import { useState } from 'react';

function QuestionDisplay({ question }) {

    const [Answers, setAnswers] = useState([]);
    const [verify, setVerify] = useState(false);
    const [display, setDiplay] = useState(false);
    useEffect(() => {
        setAnswers([question.Answer, question.FakeAnswerOne, question.FakeAnswerTwo, question.FakeAnswerThree]);
        setDiplay(false);
        setVerify(false);
    }, [question]);


    const shuffle = (array) => {
        if (verify == false) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        return array;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='row bg-secondary text-light rounded' style={{ border: "5px solid black" }}>
                    <h4 className='mt-3'>{question.Question}</h4>
                    <ol type='A' className='container mx-5'>
                        <div className='row'>
                            {
                                shuffle(Answers).map((answer) => (
                                    <div className='col-3'>
                                        <li key={"Option:" + answer}
                                        >{answer}</li>
                                    </div>
                                ))
                            }
                        </div>
                    </ol>
                    <div className='text-center'>
                        <select className='w-50' id={question.Id}>
                            {
                                Answers.map((answer) => (
                                    <option key={"Option:" + answer}
                                    >{answer}</option>
                                ))

                            }
                        </select>
                    </div>
                    <div className='row'>
                        <div className='col-10' />
                        <div className='col-2'>
                            <button className='m-1 w-100' onClick={() => {
                                if (document.getElementById(question.Id).value == question.Answer) {
                                    setVerify(true);
                                    setDiplay(false);
                                } else {
                                    setVerify(false);
                                    setDiplay(true);
                                }
                            }}>
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    {display && <div className='text-danger'>Wrong Answer !</div>}
                    {verify && <div className='text-success '>Good Answer ! The Answer was {question.Answer}</div>}
                </div>
            </div>

        </div>
    )
}

export default QuestionDisplay