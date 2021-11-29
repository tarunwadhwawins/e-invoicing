// import { lazy } from 'react';
import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import Dashboard from "../layout/dashboard/DashboardLayout";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Home from "../views/home/Home";
import Profile from '../views/home/Home'
import Invoices from "../views/invoices/Invoices";
import Invoice from "../views/invoice-list/Invoice";
import Login from '../views/signin/Signin'
import Subscription from "../views/subscription/Subscription";
import { env } from '../shared/functional/global-import/index';
// import { env } from '../shared/functional/global-import/global-import';




const Routes = ()=>{
    return  <>
    <Redirect exact from='/' to ='/e-invoicing'/>
    <Route exact path='/e-invoicing' component = {Login}/>
    <Route path='/e-invoicing/dashboard' component = {DashboardContainer}/>
    </>

}

// path: `${env.PUBLIC_URL}/dashboard`,


// const DashboardContainer = ({match})=>(
//     <DashboardLayout>
//         <Switch>
//             <Route exact
//              path={`${match.path}/profile`} component={Home}/>
//             <Route exact path={`${match.path}/invoices`} component={Invoices}/>
//             <Route exact path={`${match.path}/invoice`} component={Invoice}/>
//             <Route exact path={`${match.path}/subscription`} component={Subscription}/>
//         </Switch>
//     </DashboardLayout>
// )


const DashboardContainer = ({match})=>(
    <DashboardLayout>
        <Switch>
            <Route exact 
             path={`${env.PUBLIC_URL}/dashboard/profile`} 
             component={Home}/>
            <Route exact  path={`${env.PUBLIC_URL}/dashboard/invoices`} component={Invoices}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice`} component={Invoice}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription`} component={Subscription}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes