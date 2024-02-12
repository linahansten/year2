import { useState } from "react"
import './index.css'

export default function LoginComponent() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('http://10.111.3.78:3001/api/login', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    console.log(data);
  }

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <div className="loginBackDiv">
          <h1>Please log in</h1>
          <div className="lighterBackDiv">
            <input type="text" name="email" id="emailInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name="password" id="passwordInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <div className="signupLinkDiv">
              <p>Dont have an account? </p>
              <a href="/Register">Register here!</a>
            </div>
          </div>
        </div>
        <div className="submitButtonOuterDiv">
          <div className="submitButtonInnerDiv">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}