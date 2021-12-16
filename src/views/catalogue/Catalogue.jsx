import React from 'react'
import { Grid, Button, Form, Header, Icon, Table, Menu, Dropdown } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import  CatalogueModal from '../modal/CatalogueModal';


const Catalogue = () => {

    const [openModal, setOpenModal] = React.useState(false)

    const closeCatalogueModal=()=>{
        setOpenModal(!openModal)
    }

    return (
        <Form size='large'>
            <Grid>
                <Grid.Column width={8} verticalAlign="middle">
                    <Header as="h2">Catalogue</Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-primary">Back</Button>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Form.Input placeholder="Item Name" />
                </Grid.Column>
                <Grid.Column width={7}>
                    <Form.Input placeholder="Short Description" />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Form.Input placeholder="Price Per Unit" />
                </Grid.Column>

                <Grid.Column width={16} textAlign="right">
                    <Button className="btn-primary">Save</Button>
                </Grid.Column>

                <Grid.Column width={16}>
                    <div className="commonTable">
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Item<i aria-hidden="true" class="sort icon"></i></Table.HeaderCell>
                                    <Table.HeaderCell>Short Description <i aria-hidden="true" class="sort icon"></i></Table.HeaderCell>
                                    <Table.HeaderCell>Price <i aria-hidden="true" class="sort icon"></i></Table.HeaderCell>
                                    <Table.HeaderCell>Actions</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Item 1</Table.Cell>
                                    <Table.Cell> Lorem ipsum dolor sit amet consectetur. </Table.Cell>
                                    <Table.Cell>$20.00</Table.Cell>
                                    <Table.Cell>
                                        <Icon onClick={closeCatalogueModal} name="edit outline" color="blue" title="Edit" link />
                                        <Icon name="trash alternate outline" color="red" title="Delete" link />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Item 2</Table.Cell>
                                    <Table.Cell> Lorem ipsum dolor sit amet consectetur. </Table.Cell>
                                    <Table.Cell>$15.00</Table.Cell>
                                    <Table.Cell>
                                        <Icon onClick={closeCatalogueModal} name="edit outline" color="blue" title="Edit" link />
                                        <Icon name="trash alternate outline" color="red" title="Delete" link />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Item 3</Table.Cell>
                                    <Table.Cell> Lorem ipsum dolor sit amet consectetur. </Table.Cell>
                                    <Table.Cell>$15.00</Table.Cell>
                                    <Table.Cell>
                                        <Icon onClick={closeCatalogueModal} name="edit outline" color="blue" title="Edit" link />
                                        <Icon name="trash alternate outline" color="red" title="Delete" link />
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
            <CatalogueModal openModal={openModal} closeModal={closeCatalogueModal}/>
        </Form>
    )
}

export default Catalogue
