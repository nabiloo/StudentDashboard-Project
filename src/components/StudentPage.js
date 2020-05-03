import React from "react"
import { Bar } from 'react-chartjs-2';

const StudentPage = ({ name, state, handleCheckBoxesChange, uniqueChallengesArray }) => {


    const uniqueChallenges = [...new Set(state.data.map(item => item.challenge))]

    const newChallange = uniqueChallenges.map(chall => {
        const filtered = state.data.filter(student => student.challenge === chall)
        return filtered
    })

    const averageRatingDifficulty = newChallange.map(row => {
        const filterName = row.filter(item => item.name === name)
        const mapDifficulty = filterName.map(item => item.difficulty)
        return mapDifficulty[0]
    })

    const averageRatingEnjoyable = newChallange.map(row => {
        const filterName = row.filter(item => item.name === name)
        const mapEnjoyable = filterName.map(item => item.enjoyable)
        return mapEnjoyable[0]
    })


    const chartData = {
        labels: uniqueChallengesArray,
        datasets: [
            {
                label: 'Difficulty',
                data: state.difficulty ? averageRatingDifficulty : null,
                backgroundColor: 'rgb(3, 64, 120)'
            },
            {
                label: 'Enjoyable',
                data: state.enjoyable ? averageRatingEnjoyable : null,
                backgroundColor: 'rgb(233, 79, 55)'
            }
        ]
    }


    const handleChange = (event) => {
        handleCheckBoxesChange(event)
    }

    return (
        <div className="StudentPage">
            <h1>{`These are the results of ${name}`}</h1>

            <div className="MainPageRatingButtons">
                <label className="enjoyableStudent"><input type="checkbox" name="enjoyable" checked={state.enjoyable} onChange={handleChange} />enjoyable</label>
                <label className="difficultyStudent"><input type="checkbox" name="difficulty" checked={state.difficulty} onChange={handleChange} />difficulty</label>
            </div>


            <div className="chart">
                <Bar
                    data={chartData}
                    height={385}
                    width={600}

                    options={{
                        maintainAspectRatio: false,
                        legend: { display: false }
                    }}
                />
            </div>

        </div>
    )
}

export default StudentPage






