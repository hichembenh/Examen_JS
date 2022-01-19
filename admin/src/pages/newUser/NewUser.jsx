import "./newUser.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userRequest} from "../../requestMethods";

export default function NewUser() {
    const [inputs,setInputs] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInputs(() => {
            return { ...inputs, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            dispatch(await userRequest.post('/auth/register',inputs))
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" name='username' onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" name='password' onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" name='address' onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" onChange={handleChange}
                        />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={handleChange}
                        />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" onChange={handleChange}
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active" onChange={handleChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
}
