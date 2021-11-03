import React, { useEffect, useState } from 'react';

const Settings = ({ user }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [calories, setCalories] = useState("")
  const [carbohydrates, setCarbohydrates] = useState("")
  const [protein, setProtein] = useState("")
  const [fats, setFats] = useState("")
  const [currentWeight, setCurrentWeight] = useState("")
  const [targetWeight, setTargetWeight] = useState("")
  // below state for testing ack
  const [ack, setAck] = useState("")


  // MAYBE NO NEED TO USE THIS ANYMORE, DIRECT SET PROPS TO INPUT VALUES
  //
  const checkUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/nutrition/user/find");
      const data = await res.json();
      console.log("checkuser: ", data.user)
      console.log(user)
      // console.log("checkusername: ", user.username)
      setUsername(user.username)
      setPassword(user.password)
      setCalories(user.targetCalories)
      setCarbohydrates(user.targetCarbohydrates)
      setProtein(user.targetProtein)
      setFats(user.targetFats)
      setCurrentWeight(user.currentWeight)
      setTargetWeight(user.targetWeight)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkUser();
    // console.log(user.username)
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleVerifyPasswordChange = (event) => {
    setVerifyPassword(event.target.value)
  }

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value)
  }

  const handleCarbohydratesChange = (event) => {
    setCarbohydrates(event.target.value)
  }

  const handleProteinChange = (event) => {
    setProtein(event.target.value)
  }

  const handleFatsChange = (event) => {
    setFats(event.target.value)
  }

  const handleCurrentWeightChange = (event) => {
    setCurrentWeight(event.target.value)
  }

  const handleTargetWeightChange = (event) => {
    setTargetWeight(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === verifyPassword) {
      const editUser = {
        username: user.username,
        password: password,
        targetCalories: calories,
        targetCarbohydrates: carbohydrates,
        targetProtein: protein,
        targetFats: fats,
        currentWeight: currentWeight,
        targetWeight: targetWeight
      }

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser)
      }
      const res = await fetch("http://localhost:5000/nutrition/user/update", requestOptions)

      const data = await res.json()
      console.log("data", data)
    } else {
      console.log("passwords do not match")
    }

  }

  return (
    <div className="container mx-auto flex-1 flex flex-col px-2 bg-white bg-opacity-40 shadow-lg rounded-xl px-8 pt-7 pb-8 mb-4">
      <h1 className="text-left text-2xl leading-tight font-bold pb-4 m-3">Settings.</h1>
      <main className="grid grid-cols-2 space-x-7 justify-center text-left align-top m-3">

        <div className="space-y-4">
          {/* <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                        <div>Details</div>
                        <div>Current</div>
                        <div>New</div>
                    </div> */}
          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Username</label>
            <div className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">{user.username}</div>
            <span className="text-xs capitalize">current: {user.username}</span>
            {/*}                    <input type="text" onChange={handleUsernameChange} />   */}
          </div>

          <div className="pb-9">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Password*</label>
            <div className="flex">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Set New Password" onChange={handlePasswordChange} />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Verify New Password" onChange={handleVerifyPasswordChange} />
            </div>
          </div>

          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Target Calories (Kcal)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Set A New Target" onChange={handleCaloriesChange} />
            <span className="text-xs capitalize">current: {user.targetCalories}</span>
          </div>

          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Target Carbohydrates (g)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Set A New Target" onChange={handleCarbohydratesChange} />
            <span className="text-xs capitalize">Current: {user.targetCarbohydrates}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Target Protein (g)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Set A New Target" onChange={handleProteinChange} />
            <span className="text-xs capitalize">Current:{user.targetProtein}</span>
          </div>

          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Target Fats (g)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Set A New Target" onChange={handleFatsChange} />
            <span className="text-xs capitalize">Current:{user.targetFats}</span>
          </div>

          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Weight (Kg)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Update Weight" onChange={handleCurrentWeightChange} />
            <span className="text-xs capitalize">Current:{user.currentWeight}</span>
          </div>
          <div className="pb-3">
            <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-1">Target Weight (Kg)</label>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Set A New Target" onChange={handleTargetWeightChange} />
            <span className="text-xs capitalize">Current:{user.targetWeight}</span>
          </div>
        </div>


      </main >
      <button type="submit" onClick={handleSubmit} className="justify-center block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline">Save</button>
    </div >
  )
}

export default Settings