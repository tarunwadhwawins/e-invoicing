import React from 'react'
import { useState } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';

const InvoiceTemplate = () => {

    const [value, setValue] = useState("");
    const handleChange = (e, { value }) => setValue(value);

    return (
        <Grid className="templateList">
            <Grid.Column width={16}>
                <Header as="h2">Invoice List</Header>
            </Grid.Column>
            <Grid.Column width={4}> 
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 1</Header>
                </div>
            </Grid.Column>
            <Grid.Column width={4}> 
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 2</Header>
                </div>
            </Grid.Column>
            <Grid.Column width={4}> 
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 3</Header>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 4</Header>
                </div>
            </Grid.Column>
            <Grid.Column width={4}> 
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 5</Header>
                </div>
            </Grid.Column>
            <Grid.Column width={4}> 
                <div className="tempList">
                    <Header as="h5" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}><Icon name="file outline" color="blue" title="file" link /> Invoice Template 6</Header>
                </div> 
            </Grid.Column>
            
        </Grid>
    )
}

export default InvoiceTemplate
