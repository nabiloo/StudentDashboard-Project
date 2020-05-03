import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Data from "./data/Data"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import StudentPage from "./components/StudentPage"
import Footer from "./components/Footer"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            data: Data,
            difficulty: true,
            enjoyable: true,
        }
    }

    render() {
        const handleCheckBoxesChange = (event) => {
            const { name, checked } = event.target
            this.setState({
                [name]: checked
            })
        }

        const uniqueChallenges = [...new Set(Data.map(item => item.challenge))]

        const uniqueNames = [...new Set(Data.map(item => item.name))]

        const newChallange = uniqueChallenges.map(chall => {
            const filtered = Data.filter(student => student.challenge === chall)
            return filtered
        })

        const averageRatingDifficulty = newChallange.map(row => {
            const difficultyReduce = row.map(item => item.difficulty).reduce((total, number) => total + number)
            return difficultyReduce / 10
        })

        const averageRatingEnjoyable = newChallange.map(row => {
            const enjoyableReduce = row.map(item => item.enjoyable).reduce((total, number) => total + number)
            return enjoyableReduce / 10
        })

        return (
            <BrowserRouter>
                <Header />

                <Route
                    path='/' exact
                    render={(props) => <MainPage {...props}
                        state={{ ...this.state }}
                        handleCheckBoxesChange={handleCheckBoxesChange}
                        uniqueChallengesArray={uniqueChallenges}
                        averageRatingDifficulty={averageRatingDifficulty}
                        averageRatingEnjoyable={averageRatingEnjoyable} />}
                />

                {uniqueNames.map((studentName, index) => (
                    <Route
                        path={`/${studentName}`} exact key={index}
                        render={props => <StudentPage {...props} state={{ ...this.state }}
                            name={studentName}
                            handleCheckBoxesChange={handleCheckBoxesChange}
                            uniqueChallengesArray={uniqueChallenges} />}
                    />
                ))}

                <Footer studentNames={uniqueNames} />
            </BrowserRouter>
        )
    }
}

export default Container 