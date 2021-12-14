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
import CustomerList from "../views/customerList/CustomerList";
import AddCustomer from "../views/addCustomer/AddCustomer";
import UpdateCustomer from "../views/updateCustomer/UpdateCustomer";
import UpdateInvoice from "../views/updateInvoice/UpdateInvoice";
import RolePermissions from "../views/rolePermissions/RolePermissions";
import CustomRole from "../views/customRole/CustomRole";
import Reports from "../views/reports/Reports";
import InvoiceTemplate from "../views/invoiceTemplate/InvoiceTemplate";
import EditInvoiceTemplate from "../views/editInvoiceTemplate/EditInvoiceTemplate";
import InvoiceTemplate1 from "../views/invoiceTemplate1/InvoiceTemplate1";
// import { env } from '../shared/functional/global-import/global-import';




const Routes = ()=>{
    return  <>
    <Redirect exact from='/' to ='/e-invoicing'/>
    <Route exact path='/e-invoicing' component = {Login}/>
    <Route path='/e-invoicing/dashboard' component = {DashboardContainer}/>
    </>

}


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
            <Route exact path={`${env.PUBLIC_URL}/dashboard/customer-list`} component={CustomerList}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/add-customer`} component={AddCustomer}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/update-customer`} component={UpdateCustomer}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/update-invoice`} component={UpdateInvoice}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/role-permissions`} component={RolePermissions}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/custom-role`} component={CustomRole}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/reports`} component={Reports}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template`} component={InvoiceTemplate}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/edit-invoice-template`} component={EditInvoiceTemplate}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template-1`} component={InvoiceTemplate1}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes