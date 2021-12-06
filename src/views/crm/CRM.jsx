import React from 'react'
import { Grid, Button, Table, Icon, Header, Form, Image, Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/images/active-client.svg'
import Image2 from '../../assets/images/subscription.svg'
import Image3 from '../../assets/images/cancel.svg'
import Image4 from '../../assets/images/lost-client.svg'
import Image5 from '../../assets/images/new-client.svg'
import { env } from '../../shared/functional/global-import';
import "./crm.scss"

const CRM = () => {
    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">CRM</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button.Group floated='right' className="crmBtns">
                    <Button className="active">Week</Button>
                    <Button>Month</Button>
                    <Button>Year</Button>
                </Button.Group>
            </Grid.Column>
            <Grid.Column width={16}>
                <Grid columns="equal">
                    <Grid.Column>
                        <div className="crmBox blue">
                            <div className="crmInnerBox">
                                <Header as="h2">20</Header>
                                <Image src={Image1} />
                            </div>
                            <Header as="h4">Active Clients</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox purple">
                            <div className="crmInnerBox">
                                <Header as="h2">18</Header>
                                <Image src={Image2} />
                            </div>
                            <Header as="h4">Active Invoice</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox yellow">
                            <div className="crmInnerBox">
                                <Header as="h2">15</Header>
                                <Image src={Image3} />
                            </div>
                            <Header as="h4">Overdue Invoice</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox red">
                            <div className="crmInnerBox">
                                <Header as="h2">12</Header>
                                <Image src={Image4} />
                            </div>
                            <Header as="h4">Pending Invoice</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox blue">
                            <div className="crmInnerBox">
                                <Header as="h2">25</Header>
                                <Image src={Image5} />
                            </div>
                            <Header as="h4">New Invoice</Header>
                        </div>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Company Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Email <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Phone <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Mission Beach Villas</Link></Table.Cell>
                                <Table.Cell><Link>smith@gmail.com</Link></Table.Cell>
                                <Table.Cell>(854) 555-6545</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Joseph William</Link></Table.Cell>
                                <Table.Cell><Link>joseph@gmail.com</Link></Table.Cell>
                                <Table.Cell>(546) 854-8545</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell><Link>doejane@gmail.com</Link></Table.Cell>
                                <Table.Cell>(754) 885-6555</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='8'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default CRM
