import React from 'react'
import WeightForm from './WeightForm'
import SideNavBar from '../SideNavBar'
import Settings from '../Settings/Settings'

const SettingsPage = ({ user }) => {
    return (
        <div>
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64 pt-12">
                <div className="grid grid-cols-3 space-x-7">
                    <div className="col-span-2">
                        <Settings user={user} />
                    </div>


                    <div>
                        <WeightForm />
                    </div>

                </div>
            </main>
        </div>
    )
}

export default SettingsPage
