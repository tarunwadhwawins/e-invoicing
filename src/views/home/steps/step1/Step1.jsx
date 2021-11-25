import { useContext } from "react"
import { Grid, Button, Icon, Form } from "semantic-ui-react"
import { StepperContext, Steps } from "../../Home"

const category = [
    { key: 'm', text: 'Category 1', value: 'Category 1' },
    { key: 'f', text: 'Category 2', value: 'Category 2' },
    { key: 'o', text: 'Category 3', value: 'Category 3' },
]


const FirstComponent = () => {

    const { activeStep, setActiveStep } = useContext(StepperContext)
    return (
        <Grid>
            <Grid.Column width={4} textAlign="center">
                <div className="uploadImg">
                    <Icon name="arrow up" />
                    <span>Drag logo to upload</span>
                </div>
                <Button className="btn-secondary"><Icon name="upload" /> Upload</Button>
            </Grid.Column>
            <Grid.Column width={12}>
                <Form size='large'>
                    <Grid>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Business Name' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Business Email Address' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Phone Number' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='State' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='City' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Zip Code' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.TextArea placeholder='Business Address' rows="1" fluid />
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <Form.Select placeholder='Business Category' fluid options={category} />
                        </Grid.Column>
                    </Grid>
                </Form>
            </Grid.Column>
            <Grid.Column width={16} textAlign="right">
                <Button className="btn-secondary" onClick={() => setActiveStep(Steps.Second)}>Continue</Button>
            </Grid.Column>
        </Grid>
    )

}

export default FirstComponent