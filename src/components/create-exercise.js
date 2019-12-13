import React, { useState, useEffect} from 'react';
// import React, { useState, useEffect, Component } from 'react';
import DatePicker from 'react-datepicker';
import Axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

// class CreateExerciseList extends Component {
//     coonstructor(props){
//         super(props);

//         this.state = {
//             username: '',
//             description: '',
//             duration: 0,
//             date: new Date(),
//             users: []
//         }
//     }



//     onChageUsername = (e) => {
//         this.setState({
//             username: e.target.value
//         });
//     }

//     onChageDescription = (e) => {
//         this.setState({
//             description: e.target.value
//         });
//     }

//     onChageDuration = (e) => {
//         this.setState({
//             duration: e.target.value
//         });
//     }

//     onChageDate = (date) => {
//         this.setState({
//             date: date
//         });
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         const exercise = {
//             username: this.state.username,
//             description: this.state.description,
//             duration: this.state.duration,
//             date: this.state.date
//         }
//         console.log(exercise);

//         window.location = '/';
//     }

//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Username: </label>
//                         <select 
//                             ref="userInput"
//                             className="form-control"
//                             value={this.state.username}
//                             onChange={this.onChageUsername}
//                         >
//                             {
//                                 this.state.users.map((user) => {
//                                     return(
//                                         <option
//                                             key={user}
//                                             value={user}
//                                         >
//                                             {user}
//                                         </option>
//                                     )
//                                 })
//                             }
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label>Description: </label>
//                         <input 
//                             type="text"
//                             required
//                             className="form-control"
//                             value={this.state.description}
//                             onChange={this.onChageDescription}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Duration (in minutes)</label>
//                         <input 
//                             type="text"
//                             className="form-control"
//                             value={this.state.duration}
//                             onChange={this.onChageDuration}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Date: </label>
//                         <div>
//                             <DatePicker
//                                 selected={this.state.date}
//                                 onChange={this.onChageDate}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="create exercise log" className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

const CreateExerciseList = () => {

    const [ username, setUsername ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ duration, setDuration] = useState(0);
    const [ date, setDate ] = useState(new Date());
    const [ users, setUsers] = useState([])

    useEffect(() => {
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
                     setUsername(response.data[0].username)
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

        Axios.post('http://localhost:5000/exercises/add', exercise)
             .then((res) => console.log(res.data));

        // window.location = '/';
    }

    return(
        <div>
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
                    <input type="submit" value="create exercise log" className="btn btn-primary"/>
                </div>
            </form>
        </div> 
    )

}

export default CreateExerciseList