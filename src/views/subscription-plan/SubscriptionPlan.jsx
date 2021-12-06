import React from 'react'
import { Grid, Button, Form, Header, Icon, Table, Label, Dropdown, Popup } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';


const SubscriptionPlan = () => {
    return (
        <Form size='large'>
            <Grid>
                <Grid.Column width={8} verticalAlign="middle">
                    <Header as="h2">Subscription Plan</Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} animated className="btn-secondary">
                        <Button.Content hidden>Back</Button.Content>
                        <Button.Content visible>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
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
                                        <Dropdown multiple icon='ellipsis horizontal' floating>
                                            <Dropdown.Menu>
                                                <Dropdown.Item><Icon name="redo" /> Renew Plan</Dropdown.Item>
                                                <Dropdown.Item><Icon name="plus" /> Upgrade Plan</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
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
        </Form>
    )
}

export default SubscriptionPlan
