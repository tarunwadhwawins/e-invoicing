import { useContext } from "react"
import { StepperContext, Steps } from "../../Home"
import { Grid, Button, Form } from "semantic-ui-react"


const SecondComponent = () => {

    const { activeStep, setActiveStep } = useContext(StepperContext)
    return (
        <Form size='large'>
            <Grid>
                <Grid.Column width={8}>
                    <Form.Input placeholder="Item Name" />
                </Grid.Column>
                <Grid.Column width={7}>
                    <Form.Input placeholder="Price Per Unit" />
                </Grid.Column>
                <Grid.Column width={1} textAlign='right'>
                    <Button  size='large' icon='add' />
                </Grid.Column>
                <Grid.Column width={16} textAlign="right">
                    <Button className="btn-primary" onClick={() => setActiveStep(Steps.First)}>Back</Button>
                    <Button className="btn-secondary" onClick={() => setActiveStep(Steps.Third)}>Continue</Button>
                </Grid.Column>
            </Grid>
        </Form>
    )

}

export default SecondComponent