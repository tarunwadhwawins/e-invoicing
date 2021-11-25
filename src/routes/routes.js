import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import Dashboard from "../layout/dashboard/DashboardLayout";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Home from "../views/home/Home";
import Profile from '../views/home/Home'
import Invoices from "../views/invoices/Invoices";
import Invoice from "../views/invoice-list/Invoice";
import Login from '../views/signin/Signin'

const Routes = ()=>{
    return  <>
    {/* <Redirect exact from='/' to ='/login'/> */}
    <Route exact path='/' component = {Login}/>
    <Route path='/dashboard' component = {DashboardContainer}/>
    </>

}

const DashboardContainer = ({match})=>(
    <DashboardLayout>
        <Switch>
            <Route exact path={`${match.path}/profile`} component={Home}/>
            <Route exact path={`${match.path}/invoices`} component={Invoices}/>
            <Route exact path={`${match.path}/invoice`} component={Invoice}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes