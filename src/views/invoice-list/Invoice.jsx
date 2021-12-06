import React from 'react';
import { Grid, Header, Form, Button, Icon, Table, Label, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';



const Invoice = () => {
    return (
        <Grid>
            <Grid.Column width={4} verticalAlign="middle">
                <Header as="h2">Invoice List</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`} className="btn-secondary"><Icon name="plus" /> Create Invoice</Button>
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Invoice Number<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Amount <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Date Due <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Created <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to="#">551516</Link></Table.Cell>
                                <Table.Cell>Mission Beach Villas</Table.Cell>
                                <Table.Cell>$18.00</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="blue"> Pending</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu>
                                            <Dropdown.Menu scrolling>
                                                <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                                <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                                <Dropdown.Item><Icon name="copy outline" /> Copy</Dropdown.Item>
                                                <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">595625</Link></Table.Cell>
                                <Table.Cell>Joseph	William</Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Paid</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu>
                                            <Dropdown.Menu scrolling>
                                                <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                                <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                                <Dropdown.Item><Icon name="copy outline" /> Copy</Dropdown.Item>
                                                <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">65452</Link></Table.Cell>
                                <Table.Cell>Jane Doe</Table.Cell>
                                <Table.Cell>$25.00</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="blue"> Pending</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu>
                                            <Dropdown.Menu scrolling>
                                                <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                                <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                                <Dropdown.Item><Icon name="copy outline" /> Copy</Dropdown.Item>
                                                <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
    );
};

export default Invoice;