import React from "react";
import { Bar } from 'react-chartjs-2';

const MainPage = ({ state }) => {

    const chartData = {
        labels: state.challenges,
        datasets: [
            {
                label: 'average challenge rating',
                data: state.averageRating,
                backgroundColor: 'rgba(87, 25, 78, 0.9)'
            }
        ]
    }

    return (
        <div className="MainPage">
            <div className="MainPageCheckboxButtons">
                {state.studentNames.map((name, index) => <label><input
                    type="checkbox"
                    className={"MainPageCheckboxButton"}
                    key={index} defaultChecked />{name}</label>)}
            </div>


            <div className="MainPageRatingButtons">
                <label><input type="checkbox" defaultChecked />enjoyable</label>
                <label><input type="checkbox" defaultChecked />difficulty</label>
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




