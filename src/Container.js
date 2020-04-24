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
            challenges: [],
            averageRating: [5, 5, 3, 2, 4, 5, 2, 5, 1, 5],
            studentNames: []
        }
    }


    render() {

        const challengesNotUnique = Data.map(item => {
            return item.challenge
        })
        const uniqueChallenges = [...new Set(challengesNotUnique)]
        this.state.challenges = uniqueChallenges


        const namesNotUnique = Data.map(item => {
            return item.name
        })
        const uniqueNames = [...new Set(namesNotUnique)]
        this.state.studentNames = uniqueNames



        // this.setState({ challenges: this.state.challenges = uniqueChallenges })

        // const averageGrade = (numbersArray) => {
        //     const totalItems = numbersArray.reduce((total, item) => total + item)
        //     return totalItems / numbersArray.length
        // }


        // const allChallengesArray = []
        // this.state.students.forEach(item => {
        //     if (!allChallengesArray.includes(item.challenge)) {
        //         allChallengesArray.push(item.challenge)
        //     }
        //     return allChallengesArray
        // })

        // "name": "Storm",
        // "challenge": "W1D4 - Project - Kleurentoggle",
        // "difficulty": 3,
        // "enjoyable": 2



        return (
            <div>
                <BrowserRouter>
                    <Header />

                    <Route
                        path='/' exact
                        render={(props) => <MainPage {...props} state={{ ...this.state }} />}
                    />

                    {this.state.studentNames.map(studentName => (
                        <Route
                            path={`/${studentName}`} exact
                            render={props => <StudentPage {...props} state={{ ...this.state }} name={studentName} />}
                        />
                    ))}

                    <Footer studentNames={this.state.studentNames} />
                </BrowserRouter>
            </div >
        )
    }

}




export default Container 