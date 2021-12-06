import { Grid, Button, Icon, Form, Header, Image } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import Logo from "../../assets/images/logo.png"

const category = [
    { key: 'm', text: 'Category 1', value: 'Category 1' },
    { key: 'f', text: 'Category 2', value: 'Category 2' },
    { key: 'o', text: 'Category 3', value: 'Category 3' },
]


const BusinessProfile = () => {

    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Business Profile</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} animated className="btn-secondary">
                    <Button.Content hidden>Back</Button.Content>
                    <Button.Content visible>
                        <Icon name='arrow left' />
                    </Button.Content>
                </Button>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
                <div className="uploadImg">
                    <Image src={Logo}/>
                    {/* <Icon name="arrow up" /> */}
                    {/* <span>Drag logo to upload</span> */}
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
                            <Form.TextArea placeholder='Business Address' rows="1" fluid />
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
                            <Form.Select placeholder='Business Category' fluid options={category} />
                        </Grid.Column>
                    </Grid>
                </Form>
            </Grid.Column>
            <Grid.Column width={16} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
            </Grid.Column>
        </Grid>
    )

}

export default BusinessProfile