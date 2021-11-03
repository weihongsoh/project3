import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("")
  const [calories, setCalories] = useState()
  const [carbohydrates, setCarbohydrates] = useState()
  const [protein, setProtein] = useState()
  const [fats, setFats] = useState()
  const [currentWeight, setCurrentWeight] = useState()
  const [targetWeight, setTargetWeight] = useState()

  const history = useHistory()

  const handleUsernameChange = async (event) => {
    await setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value)
    console.log(password)
  }

  const handleVerifyPasswordChange = async (event) => {
    await setVerifyPassword(event.target.value)
    console.log(verifyPassword)
  }

  const handleCaloriesChange = async (event) => {
    await setCalories(event.target.value)
  }

  const handleCarbohydratesChange = async (event) => {
    await setCarbohydrates(event.target.value)
  }

  const handleProteinChange = async (event) => {
    await setProtein(event.target.value)
  }

  const handleFatsChange = async (event) => {
    await setFats(event.target.value)
  }

  const handleCurrentWeightChange = async (event) => {
    await setCurrentWeight(event.target.value)
  }

  const handleTargetWeightChange = async (event) => {
    await setTargetWeight(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === verifyPassword) {
      const newUser = {
        username: username,
        password: password,
        targetCalories: calories,
        targetCarbohydrates: carbohydrates,
        targetProtein: protein,
        targetFats: fats,
        currentWeight: currentWeight,
        targetWeight: targetWeight
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }

      const res = await fetch("http://localhost:5000/nutrition/user/create", requestOptions)

      history.push('/signin')

    } else {
      console.log("Passwords do not match. Please try again")
    }
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 min-h-screen">

      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Sign Up.</h1>

        <Link to="/signin" className="text-sm text-indigo-600 pb-6">Already have an account? Sign in here</Link>
        <form className="pt-4">

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="text" placeholder="Username" onChange={handleUsernameChange} />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="password" placeholder="Password" onChange={handlePasswordChange} />

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="password" placeholder="Verify Password" onChange={handleVerifyPasswordChange} />

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Target Calories" onChange={handleCaloriesChange} />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Target Carbohydrates" onChange={handleCarbohydratesChange} />

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Target Protein" onChange={handleProteinChange} />

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Target Fats" onChange={handleFatsChange} />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Current Weight" onChange={handleCurrentWeightChange} />

          <input className="block border border-grey-light w-full p-3 rounded mb-4" type="number" placeholder="Set Target Weight" onChange={handleTargetWeightChange} />


          <button className="block bg-indigo-600 text-white hover:bg-indigo-700 w-full p-3 rounded mb-4" type="submit" onClick={handleSubmit} >Next</button>

        </form>
      </div>
      <span className="text-xs relative inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">©2021 Counting Bros</span>
    </div>
  )
}

export default Signup
