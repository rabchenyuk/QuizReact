import React, { Component } from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axiosQuiz';
import Loader from '../../components/UI/Loader/Loader';

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    };

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        Quiz {quiz.name}
                    </NavLink>
                </li>
            )
        });
    }

    async componentDidMount() {
        try {
            const res = await axios.get('quizes.json');
            const quizes = [];
            Object.keys(res.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Quiz № ${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of quizzes</h1>

                     { 
                         this.state.loading ?
                            <Loader />
                        :
                            <ul>
                                { this.renderQuizes() }
                            </ul>
                     }
                </div>
            </div>
        )
    }
}