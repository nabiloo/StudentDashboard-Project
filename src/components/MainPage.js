import React from "react";
import { Bar } from 'react-chartjs-2';

const MainPage = ({ state, handleCheckBoxesChange, uniqueChallengesArray, averageRatingDifficulty, averageRatingEnjoyable }) => {

    const chartData = {
        labels: uniqueChallengesArray,
        datasets: [
            {
                label: 'Difficulty',
                data: state.difficulty ? averageRatingDifficulty : null,
                backgroundColor: 'rgb(17, 157, 164)'
            },
            {
                label: 'Enjoyable',
                data: state.enjoyable ? averageRatingEnjoyable : null,
                backgroundColor: 'rgb(114, 25, 90)'
            }
        ]
    }

    const handleChange = (event) => {
        handleCheckBoxesChange(event)
    }

    return (
        <div className="MainPage">
            <div className="MainPageCheckboxButtons">
                <p>Students average rating for Winc Academy challenges and projects</p>
            </div>

            <div className="MainPageRatingButtons">
                <label className="enjoyableGeneral"><input type="checkbox" name="enjoyable" checked={state.enjoyable} onChange={handleChange} />Enjoyable</label>
                <label className="difficultyGeneral"><input type="checkbox" name="difficulty" checked={state.difficulty} onChange={handleChange} />Difficulty</label>
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

        </div >
    )
}

export default MainPage




