import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const SignupNext = () => {
  const [calories, setCalories] = useState()
  const [carbohydrates, setCarbohydrates] = useState()
  const [protein, setProtein] = useState()
  const [fats, setFats] = useState()
  const [currentWeight, setCurrentWeight] = useState()
  const [targetWeight, setTargetWeight] = useState()
  const history = useHistory()

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

    const newUser = {
      // username: username,
      // password: password,
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

    const res = await fetch("http://localhost:5000/nutrition/user", requestOptions)

    history.push('/main')
  }

  return (
    <div>
      <div>
        <div>Enter the following ... to keep track of your progress</div>
      </div>
      <div className="place-content-center">
        <div>targetCalories</div>
        <input type="number" onChange={handleCaloriesChange} />
      </div>
      <div className="place-content-center">
        <div>targetCarbs</div>
        <input type="number" onChange={handleCarbohydratesChange} />
      </div>
      <div className="place-content-center">
        <div>Protein</div>
        <input type="number" onChange={handleProteinChange} />
      </div>
      <div className="place-content-center">
        <div>Fats</div>
        <input type="number" onChange={handleFatsChange} />
      </div>
      <div className="place-content-center">
        <div>Weight</div>
        <input type="number" onChange={handleCurrentWeightChange} />
      </div>
      <div className="place-content-center">
        <div>targetWeight</div>
        <input type="number" onChange={handleTargetWeightChange} />
      </div>
      <div className="mt-4">
        <button className="black border-3 border-white border-opacity-100" type="submit" onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  )
}

export default SignupNext