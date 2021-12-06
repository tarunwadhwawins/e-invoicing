// import { lazy } from 'react';
import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Home from "../views/home/Home";
import Profile from '../views/home/Home'
import Invoices from "../views/invoices/Invoices";
import Invoice from "../views/invoice-list/Invoice";
import Login from '../views/signin/Signin'
import Subscription from "../views/subscription/Subscription";
import { env } from '../shared/functional/global-import/index';
import dashboard from "../views/dashboard/Dashboard";
import BusinessProfile from "../views/businessProfile/BusinessProfile";
import Catalogue from "../views/catalogue/Catalogue";
import Agreement from "../views/agreement/Agreement";
import Team from "../views/team/Team";
import SubscriptionPlan from "../views/subscription-plan/SubscriptionPlan";
import Notifications from "../views/notifications/Notifications";
import InvoiceDetail from "../views/invoiceDetail/InvoiceDetail";
import CustomerDetail from "../views/customerDetail/CustomerDetail";
import CRM from "../views/crm/CRM";
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
            <Route exact path={`${env.PUBLIC_URL}/dashboard/dashboard`} component={dashboard}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/business-profile`} component={BusinessProfile}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/catalogue`} component={Catalogue}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/agreement`} component={Agreement}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/team`} component={Team}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription-plan`} component={SubscriptionPlan}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/notifications`} component={Notifications}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-detail`} component={InvoiceDetail}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/customer-detail`} component={CustomerDetail}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/crm`} component={CRM}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes