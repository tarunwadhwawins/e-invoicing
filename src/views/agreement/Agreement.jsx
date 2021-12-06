import { Button, Grid, Icon, Table, Tab, Header, Dropdown, Menu } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';

const Agreement = () => {

    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Agreement</Header>
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
                                <Table.HeaderCell>Agreement <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Agreement Four</Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu>
                                            <Dropdown.Menu scrolling>
                                                <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                                <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                                <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Five</Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu>
                                            <Dropdown.Menu scrolling>
                                                <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                                <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                                <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Six</Table.Cell>
                                <Table.Cell>
                                    <Dropdown multiple icon='ellipsis horizontal'>
                                        <Dropdown.Menu scrolling>
                                            <Dropdown.Item><Icon name="edit outline" /> Edit</Dropdown.Item>
                                            <Dropdown.Item><Icon name="eye" /> View</Dropdown.Item>
                                            <Dropdown.Item><Icon name="trash alternate outline" /> Delete</Dropdown.Item>
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
            <Grid.Column width={16} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
            </Grid.Column>
        </Grid>
    )

}

export default Agreement