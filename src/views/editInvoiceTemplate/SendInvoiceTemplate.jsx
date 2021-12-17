import React from 'react'
import { Grid, Header, Button, Table, Icon, Image, Tab, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import Logo from "../../assets/images/logo.png"

const secCode = [
    { key: 'PPD (personal)', value: 'PPD (personal)', text: ' PPD (personal)' },
    { key: 'CCD (corporate)', value: 'CCD (corporate)', text: ' CCD (corporate)' },
    { key: 'WEB', value: 'WEB', text: ' WEB' },
]
const panes = [
  

    { menuItem: 'Bank', render: () => 
    <Tab.Pane>
        <Grid columns="3">
            <Grid.Column width="8">
                <Form.Input placeholder="Account Number" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                <Form.Input placeholder="Routing Number" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                <Form.Input placeholder="Account Type" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                <Form.Select placeholder="SEC Code" options={secCode} fluid />
            </Grid.Column>
        </Grid>
    </Tab.Pane> },
    { menuItem: 'Card', render: () => 
    <Tab.Pane>
         <Grid columns="3">
            <Grid.Column width="10">
                <h4>Card Number</h4>
                <Form.Input placeholder="XXXX XXXX XXXX XXXX" fluid />
            </Grid.Column>
            <Grid.Column width="6">
                <h4>Exp.</h4>
                <Form.Input placeholder="MM/YY" fluid />
            </Grid.Column>
            <Grid.Column width="6">
                <h4>CVC No.</h4>
                <Form.Input placeholder="XXX" fluid />
            </Grid.Column>
        </Grid>
    </Tab.Pane> },
    { menuItem: 'Email', render: () => 
    <Tab.Pane>
    <Grid columns="3">
       <Grid.Column width="16">
            <h3>Please mail a check to the following address:</h3>
           <p>GARDNER  GARDNER <br/>MISSION BEACH RENTALS <br/>3136 MISSION BLVD <br/>SAN DIEGO, CA 92109</p>
       </Grid.Column>
   </Grid>
</Tab.Pane> },
]

const EditInvoiceTemplate = () => {
    return (
        
        <Grid>  
            <Grid.Column width={16}>
                <Grid>
                    <Grid.Column width={10} className="tempInvoiceDetail">
                        <Grid>
                            <Grid.Column width={8} className="tempInvoiceDetail">
                                <Image src={Logo} size="small"/>
                                <Header as="h4"><span className="alternate-color-900">Company Name</span> : Steve Smith</Header>
                                <Header as="h4"> <span className="alternate-color-900">Customer Number</span> : 5454652</Header>
                            </Grid.Column>
                            <Grid.Column width={8} verticalAlign="middle" className="tempInvoiceDetail">
                                <Header as="h3">Invoice Number : #595625</Header>
                                <Header as="h4"><span className="alternate-color-900">Issue Date</span> : 10/02/21</Header>
                                <Header as="h4"><span className="alternate-color-900">Due Date</span> : 10/11/21</Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as="h2" className="detailCaption">Payable To :</Header>
                                <Header as="h3" className="removeM">Steve Smith</Header>
                                <p>132, My Street, Kingston, New York 12401.</p>
                                <p>janedoe@gmail.com</p>
                                <p>(555) 555-1234</p>
                            </Grid.Column>
                                <Grid.Column width={8}>
                                <Header as="h2" className="detailCaption">Bill To :</Header>
                                <Header as="h3" className="removeM">Jane Doe</Header>
                                <p>128, My Street, Kingston, New York 12401.</p>
                                <p>smith@gmail.com</p>
                                <p>(454) 655-556</p>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <div className="commonTable">
                                    <Table singleLine striped>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>#</Table.HeaderCell>
                                                <Table.HeaderCell>Item <Icon name="sort" /></Table.HeaderCell>
                                                <Table.HeaderCell>Description</Table.HeaderCell>
                                                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
                                                <Table.HeaderCell textAlign="right">Qty</Table.HeaderCell>
                                                <Table.HeaderCell textAlign="right">Discount</Table.HeaderCell>
                                                <Table.HeaderCell textAlign="right">Total</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>1</Table.Cell>
                                                <Table.Cell>Item 1</Table.Cell>
                                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                                <Table.Cell textAlign="right">$10.00</Table.Cell>
                                                <Table.Cell textAlign="right">15</Table.Cell>
                                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>2</Table.Cell>
                                                <Table.Cell>Item 2</Table.Cell>
                                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                                <Table.Cell textAlign="right">$20.00</Table.Cell>
                                                <Table.Cell textAlign="right">5</Table.Cell>
                                                <Table.Cell textAlign="right">0.00</Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>3</Table.Cell>
                                                <Table.Cell>Item 3</Table.Cell>
                                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                                <Table.Cell textAlign="right">$30.00</Table.Cell>
                                                <Table.Cell textAlign="right">5</Table.Cell>
                                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>4</Table.Cell>
                                                <Table.Cell>Item 4</Table.Cell>
                                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                                <Table.Cell textAlign="right">$40.00</Table.Cell>
                                                <Table.Cell textAlign="right">10</Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                                <Table.Cell textAlign="right">$300.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Subtotal</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right">$600.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Tax(Flat)</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Shipping</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Total</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Amount Paid</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Adjustment</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell colSPan="6" textAlign="right">
                                                    <Header as="h4">Amount Due</Header>
                                                </Table.Cell>
                                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                                            </Table.Row>
                                        </Table.Body>

                                    </Table>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header>Message</Header>
                                <Form>
                                    <Form.TextArea rows="3" placeholder="Type your message" />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header>Have question or need support?</Header> 
                            </Grid.Column>
                            <Grid.Column width={6} className="removeP">
                                <p>Contact us admin@gmail.com</p>
                            </Grid.Column>                            
                            {/* <Grid.Column width={16} textAlign="right">
                                <Button className="btn-secondary" as={Link} to={`${env.PUBLIC_URL}/dashboard/send-invoice`}><Icon name="send" />Send Invoice</Button>
                            </Grid.Column> */}
                        </Grid>
                    </Grid.Column>
                    
                    
                    <Grid.Column width={6} className="templateCardPayment">
                        <Grid>
                            <Grid.Column width={10} className="tabSection">
                                <Header as="h3">Your Payment Information</Header>
                            </Grid.Column>
                            <Grid.Column width={6} className="tabSection" textAlign="right">
                                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`} className="btn-primary">Back</Button>
                            </Grid.Column>
                            
                            <Grid.Column width={16} className="tabSection">
                                <Tab menu={{ text: true }} panes={panes} />                                 
                            </Grid.Column>
                            <Grid.Column width={16} textAlign="right" className="rightAlign">
                                <Button className="btn-secondary">Save</Button>
                            </Grid.Column>
                        </Grid>                        
                    </Grid.Column>
                </Grid>                
            </Grid.Column>   

            
            
        </Grid>
    )
}

export default EditInvoiceTemplate
