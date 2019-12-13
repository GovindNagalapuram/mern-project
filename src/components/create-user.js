// import React, { Component } from 'react';
import React, { useState } from 'react';
import Axios from 'axios';

// export default class CreateUserList extends Component {
//     render(){
//         return(
//             <div>
//                 <p>Create User list component</p>
//             </div>
//         )
//     }
// }

const CreateUserList = () => {

    const [ username, setUsername ] = useState('');

    const onChageUsername = (e) => {
        setUsername(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username
        }
        // console.log(user);

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/users/add',
        //     data: {
        //         user
        //     }
        //   });

        Axios.post('http://localhost:5000/users/add/', user)
             .then((res) => console.log(res.data));

        setUsername('')
    }

    return(
        <div>
            <h3>Create new user</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={onChageUsername}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="create exercise log" className="btn btn-primary"/>
                </div>
            </form>
        </div> 
    )
}

export default CreateUserList;