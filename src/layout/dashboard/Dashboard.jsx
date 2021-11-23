import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Home from '../../views/home/Home'

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
     
            <Home/>

        </div>
    )
}

export default Dashboard
