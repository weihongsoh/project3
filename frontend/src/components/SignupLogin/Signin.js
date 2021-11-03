import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Signin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // send props from APP.js down to here

  const history = useHistory()

  const handleUsernameChange = async (event) => {
    await setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value)
    console.log(password)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === "") {
      console.log("Username cannot be empty")
    } else {


      const existingUser = {
        username: username,
        password: password
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(existingUser)
      }

      try {
        const res = await fetch("http://localhost:5000/nutrition/user/login", requestOptions)
        const data = await res.json()
        // console.log(data)
        // console.log(data.status)
        // console.log(data.user)
        // console.log(data.user.password)

        if (data.status === "ok") {
          // set user and set auth
          // props.setAuth(true)
          console.log("user valid")
          console.log("signin: ", data.user)
          props.handleChange(data.user)
          history.push("/settings")
          // console.log(theUser)
        } else {
          console.log("username/password invalid")
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center min-h-screen px-2">

      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Sign In.</h1>
        <Link to="/signup" className="text-sm text-indigo-600 pb-6">Don't have an account? Create one here</Link>
        <form className="pt-4">

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="text" placeholder="Username" onChange={handleUsernameChange} />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="password" placeholder="Password" onChange={handlePasswordChange} />


          <button className="block bg-indigo-600 text-white hover:bg-indigo-700 w-full p-3 rounded mb-4" type="submit" onClick={handleSubmit} >Submit</button>

        </form>
      </div>
      <span className="text-xs absolute inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">©2021 Counting Bros</span>
    </div>
  )
}

export default Signin
