import React ,{useState, useContext} from'react' 
import userContext from '../Context/UserContext'

function Login(){
    const[username, setUsername] = useState('')
    const [pswrd , setpswrd] = useState('')
    const {setuser} = useContext(userContext)

    const handleSubmit=(e) =>{
    e.preventDefault()
    setuser({username, pswrd})

     } 

    return(
        <div>
            <h2>Login</h2>
            <input
            value ={username} 
            onChange={(e) => setUsername(e.target.value)}
            type ='text' placeholder ='username' />
             {"     "}

            <input 
            value ={pswrd} 
            onChange={(e) => setpswrd(e.target.value)}
            type ='text' placeholder ='password' />
            <button onClick ={handleSubmit} >Click me </button>
        </div>
    )
}

export default Login 