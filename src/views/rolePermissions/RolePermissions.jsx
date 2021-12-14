import React from 'react';
import { Grid, Header, Form, Icon, Table, Label, Menu, List, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import'; 



const RolePermissions = () => {
    return (
        <Grid>
            <Grid.Column width={4} verticalAlign="middle">
                <Header as="h2">Roles & Permissions</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/custom-role`} className="btn-secondary">Custom Role</Button>
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Role Name<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Type of Role  <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Description <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Active/Inactive <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to="#">Billing Admin</Link></Table.Cell>
                                <Table.Cell>Predefined</Table.Cell>
                                <Table.Cell>Full System Access</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List> 
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">Manager</Link></Table.Cell>
                                <Table.Cell>Predefined</Table.Cell>
                                <Table.Cell>Full System Access</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List> 
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">User Admin</Link></Table.Cell>
                                <Table.Cell>Predefined</Table.Cell>
                                <Table.Cell>Full System Access</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item ><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List> 
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

export default RolePermissions;