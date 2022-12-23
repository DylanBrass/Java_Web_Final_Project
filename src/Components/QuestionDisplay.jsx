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
        <div className='row border'>
            <h4>{question.Question}</h4>
            <select id={question.Id}>
                {
                    shuffle(Answers).map((answer) => (
                        <option key={"Option:" + answer}
                        >{answer}</option>
                    ))

                }
            </select>
            <div className='p-auto'>
                <button className='w-25 btn btn-secondary' onClick={() => {
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
            {display && <div className='text-danger'>Wrong Answer !</div>}
            {verify && <div className='text-success'>Good Answer ! The Answer was {question.Answer}</div>}
        </div>
    )
}

export default QuestionDisplay