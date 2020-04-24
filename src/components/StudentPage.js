import React from "react"

const StudentPage = ({ name }) => {
    console.log(name)

    return (
        <div className="StudentPage">
            <h1>{`This are the results of ${name}`}</h1>
            <div className="MainPageRatingButtons">
                <label><input type="checkbox" defaultChecked />enjoyable</label>
                <label><input type="checkbox" defaultChecked />difficulty</label>
            </div>
        </div>
    )
}

export default StudentPage






