import { useContext } from "react"
import { Button, Grid, Icon, Table } from "semantic-ui-react"
import { StepperContext, Steps } from "../../Home"

const ThirdComponent = () => {

    const { activeStep, setActiveStep } = useContext(StepperContext)
    return (
        <Grid>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Agreement <Icon name="sort"/></Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Agreement One</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link/>
                                    <Icon name="trash alternate" color='red' link/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Two</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link/>
                                    <Icon name="trash alternate" color='red' link/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Agreement Three</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link/>
                                    <Icon name="trash alternate" color='red' link/>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Grid.Column>
            <Grid.Column width={16} textAlign="right">
                <Button className="btn-primary" onClick={() => setActiveStep(Steps.Second)}>Back</Button>
            </Grid.Column>
        </Grid>
    )

}

export default ThirdComponent