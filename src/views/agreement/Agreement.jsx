import { Button, Grid, Icon, Table, Tab, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';

const panes = [
    {
        menuItem: 'Company Agreement',
        render: () =>
            <Tab.Pane>
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
                                <Table.Cell>Agreement One</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Two</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Tab.Pane>,
    },
    {
        menuItem: 'Customer Agreement',
        render: () =>
            <Tab.Pane>
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
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Five</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Six</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Tab.Pane>,
    },
]


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
                <Tab menu={{ secondary: true }} panes={panes} className="agreementTabs" />
            </Grid.Column>
            <Grid.Column width={16} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
            </Grid.Column>
        </Grid>
    )

}

export default Agreement