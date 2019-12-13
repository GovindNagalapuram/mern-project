// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import Exercise from './exercise';

// export default class ExerciseList extends Component {
//     render(){
//         return(
//             <div>
//                 <p>Exercise list component</p>
//             </div>
//         )
//     }
// }

const ExerciseList = () => {

    const [ exercises, setExercises ] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/exercises/')
             .then((res) => setExercises(res.data))
             .catch((error) => {console.log(error)})
    },[])

    const deleteExercise = (id) => {
        Axios.delete('http://localhost:5000/exercises/' + id)
             .then((res) => console.log(res.data))

        setExercises(exercises.filter(item => item._id !== id))
    }

    const exerciselist = () => {
        return exercises.map((item) => {
            return (
                <Exercise 
                exercise={item}
                deleteExercise={deleteExercise}
                key={item._id}
            />
            )
        })
    }

    return(
        <div>
            <h3>exercises list</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciselist()}
                </tbody>
            </table>
        </div>
    )

}

export default ExerciseList;