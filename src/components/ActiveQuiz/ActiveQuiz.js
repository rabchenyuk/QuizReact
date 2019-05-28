import React from 'react';
import classes from './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.question}</strong>&nbsp;
            </span>

            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>
        <ul>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </ul>
    </div>
)

export default ActiveQuiz;