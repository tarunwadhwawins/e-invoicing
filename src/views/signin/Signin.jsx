import React from 'react';
import './signin.scss';
import { Grid, Image, Form, Button } from 'semantic-ui-react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'



const Signin = () => {
    return (
        <div className="signIn">
            <div className="signInner">
                <Grid>
                    <Grid.Column width={16}>
                        <Image src={Logo} />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Form>
                            <Form.Input fluid label='Username' placeholder='Enter Your Username' icon='user outline' iconPosition='left' />
                            <Form.Input fluid label='Password' placeholder='Enter Your Password' icon='mail outline' iconPosition='left' />
                            <Button as={Link} to='/dashboard/profile'  className='btn-primary' type='button' fluid>Sign In</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}

export default Signin
