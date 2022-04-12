import axios from "axios";
import { useState } from "react"

export default function SignUp(){

    const [inputs, setInputs] = useState({})

    const handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        setInputs({...inputs, [name]:value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/user/signup', inputs)
        .then(res=>{
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err =>alert(err))
    }

    return (<>
    <h1>회원가입폼</h1>
    <form action="" onSubmit={handleSubmit}>
  
    <div>
    <label><b>사용자 ID</b></label>
    <input type="text" name='username' onChange={handleChange}/><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password' onChange={handleChange}/><br />

    <label><b>이름</b></label>
    <input type="text" name='name' onChange={handleChange}/><br />

    <label><b>전화번호</b></label>
    <input type="text" name='telephone' onChange={handleChange}/><br />

    <input type='submit' value='가입'></input><br />
    </div>
    <div><span id ='result-span'></span></div>
    </form>
    </>
    )
}