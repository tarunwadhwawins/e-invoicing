import React from 'react'
import { Grid, Button, Form, Header, Icon, Table, Label, List, Popup } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import  SubscriptionModal from '../modal/SubscriptionModal';

const SubscriptionPlan = () => {
    const [openModal, setOpenModal] = React.useState(false)

    const closeSubscriptionModal=()=>{
        setOpenModal(!openModal)
    }
    
    return (
        <Form size='large'>
            <Grid>
                <Grid.Column width={8} verticalAlign="middle">
                    <Header as="h2">Subscription Plan</Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-primary">Back</Button>
                </Grid.Column>
                <Grid.Column width={16}>
                    <div className="commonTable">
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Plan Name <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Billing Period <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Start Date <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Next Invoice Date <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    {/* <Table.Cell></Table.Cell>    */}
                                    <Table.Cell><Popup content='Lorem Ipsum lorum ipsum' trigger={<span>Silver Plan</span>} /></Table.Cell>
                                    <Table.Cell>Monthly</Table.Cell>
                                    <Table.Cell>Jan 10, 2021</Table.Cell>
                                    <Table.Cell>Feb 10, 2021</Table.Cell>
                                    <Table.Cell><Label color="blue">Active</Label></Table.Cell>
                                    <Table.Cell>
                                        <List horizontal>
                                            <List.Item><Icon name="redo" color="blue" title="Renew Plan" link /></List.Item>
                                            <List.Item><Icon onClick={closeSubscriptionModal} name="plus" color="green" title="Upgrade Plan" link /></List.Item>
                                        </List>                                         
                                        
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Grid.Column>
                <Grid.Column width={16} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
                </Grid.Column>
            </Grid>
            <SubscriptionModal openModal={openModal} closeModal={closeSubscriptionModal}/>
        </Form>
    )
}

export default SubscriptionPlan
