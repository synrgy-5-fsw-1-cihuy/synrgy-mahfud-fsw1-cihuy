import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const url = 'https://reqres.in/api/register'
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault()
        const payload = {
            email,
            password
        }
        try {
            const res = await axios.post(url, payload)
            setLoading(false)
            setResponse('Anda Berhasil Mendaftar')
            setTimeout(() => {
                navigate('/')   
            }, 3000)
            console.log(res);

        } catch (error) {
            setLoading(false)
            setResponse(error.message)
        }

    }
    return (
        <div className="max-w-[768px] mx-auto mt-20 flex flex-col items-center gap-7">
            <h2 className="text-center text-4xl font-semibold">Register</h2>
            
            <input type="email" className="w-1/2 border px-2 py-2 rounded-md text-md" placeholder="Email"  
            autoComplete="off" 
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input type="password" className="w-1/2 border px-2 py-2 rounded-md text-md" 
            placeholder="Password" 
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            {
                !loading ? (
                    <button onClick={handleRegister} className="text-white bg-blue-600 px-8 py-2 rounded-xl font-semibold hover:bg-blue-700">Register</button>
                )
                :
                (
                    <button onClick={handleRegister} className="bg-slate-500 text-white px-8 py-2 rounded-xl font-semibold">Please Wait..</button>
                )
            }
            <p className=" text-green-500">{response}</p>
        </div>
    )
}

export default Register