import React from 'react'
import { Icon, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import "./sidebar.scss"
import { env } from '../../shared/functional/global-import';


const Sidebar = () => {
    return (
        <div className="sideBar">
            <Menu text vertical>
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/dashboard`}><Icon name="dashboard"/><span>Dashboard</span></Menu.Item>
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`}><Icon name="vcard"/><span>Create Invoice</span></Menu.Item>
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice`}><Icon name="vcard"/><span>Invoice</span></Menu.Item>
                {/* <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/subscription`}><Icon name="tags"/><span>Subscription</span></Menu.Item> */}
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/crm`}><Icon name="users"/><span>CRM</span></Menu.Item>
                {/* <div className="dropDownSubmenu">
                        <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/customer-list`}><Icon name="user circle"/><span>Customer</span></Menu.Item>
                    </div>                     */}
                
                
            </Menu>
        </div>
    )
}

export default Sidebar
