import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

const EditExerciseList = (props) => {

    const [ username, setUsername ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ duration, setDuration] = useState(0);
    const [ date, setDate ] = useState(new Date());
    const [ users, setUsers] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/exercises/'+ props.match.params.id)
             .then(response => {
                setUsername(response.data.username)
                setDescription(response.data.description)
                setDuration(response.data.duration)
                setDate(new Date(response.data.date))
             })
             .catch((error) => console.log(error))

        Axios.get('http://localhost:5000/users/')
             .then(response => {
                 if(response.data.length > 0){
                    //  setUsers(response.data.map((user) => {
                    //     return user.username
                    //  }))
                    setUsers(response.data.map((item) => {
                        return (
                            item.username
                        )
                    }))
                    //  setUsers(response.data.map(user => user.username)),
                    // console.log(response.data);
                 }
             });
    }, [])

    const onChageUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChageDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChageDuration = (e) => {
        setDuration(e.target.value)
    }

    const onChageDate = (date) => {
        setDate(date)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);

        Axios.post('http://localhost:5000/exercises/update/'+ props.match.params.id, exercise)
             .then((res) => console.log(res.data));

        window.location = '/';
    }

    return(
        <div>
            <h3>Edit exercise</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select 
                        // ref="userInput"
                        className="form-control"
                        value={username}
                        onChange={onChageUsername}
                    >
                        {
                            users.map((user) => {
                                return(
                                    <option
                                    key={user}
                                    value={user}
                                >
                                    {user}
                                </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input 
                        type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={onChageDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes)</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChageDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChageDate}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit exercise log" className="btn btn-primary"/>
                </div>
            </form>
        </div> 
    )

}

export default EditExerciseList;