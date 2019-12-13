// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Navbar extends Component {
//     render(){
//         return(
//             <nav className="navbar navbar-dark bd-dark navbar-expand-lg">
//                 <Link to="/" className="navbar-brand">
//                     ExerciseTracker
//                 </Link>
//                 <div className="collapse navbar-collapse">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="navbar-item">
//                             <Link to="/" className="nav-link">
//                                 Exercises
//                             </Link>
//                         </li>
//                         <li className="navbar-item">
//                             <Link to="/create" className="nav-link">
//                                 Create Exercise Log
//                             </Link>
//                         </li>
//                         <li className="navbar-item">
//                             <Link to="/user" className="nav-link">
//                                 Ceate User
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }

const Navbar = () => {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    ExerciseTracker
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">
                                Exercises
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">
                                Create Exercise Log
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">
                                Ceate User
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        ); 
}

export default Navbar;