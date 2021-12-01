import React from 'react'
import { Grid, Button, Form, Header, Icon } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';


const Catalogue = () => {
    return (
        <Form size='large'>
            <Grid>
                <Grid.Column width={8} verticalAlign="middle">
                    <Header as="h2">Catalogue</Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} animated className="btn-secondary">
                        <Button.Content hidden>Back</Button.Content>
                        <Button.Content visible>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Form.Input placeholder="Item Name" />
                </Grid.Column>
                <Grid.Column width={7}>
                    <Form.Input placeholder="Price Per Unit" />
                </Grid.Column>
                <Grid.Column width={1} textAlign='right'>
                    <Button size='large' icon='add' />
                </Grid.Column>
                <Grid.Column width={16} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-secondary" >Save</Button>
                </Grid.Column>
            </Grid>
        </Form>
    )
}

export default Catalogue
