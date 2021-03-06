import { Button, Grid, Icon, Table, Header, Menu, Form, Checkbox, List} from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';

const Agreement = () => {

    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Agreement</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                <Button as="a" target="_blank" href="https://youtu.be/2ZII3HOlIfA" className="btn-secondary">Create Agreement</Button>
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-primary">Back</Button>
            </Grid.Column>
            <Grid.Column width={8} textAlign="left">
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Agreement Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Active/Inactive </Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Agreement Four</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item><Icon name="eye" color="black" title="View" link /></List.Item>
                                        <List.Item><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Five</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item><Icon name="eye" color="black" title="View" link /></List.Item>
                                        <List.Item><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Company Agreement</Table.Cell>
                                <Table.Cell><Checkbox toggle /></Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item><Icon name="eye" color="black" title="View" link /></List.Item>
                                        <List.Item><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
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
            <Grid.Column width={16} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
            </Grid.Column>
        </Grid>
    )

}

export default Agreement