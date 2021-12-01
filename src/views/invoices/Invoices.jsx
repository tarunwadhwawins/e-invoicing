import { useState } from 'react'
import { Grid, Header, Accordion, Menu, Form, Button, Table, Input, Select } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './invoices.scss'

import { env } from '../../shared/functional/global-import';


const paymentOptions = [
    { key: 'Line Item', value: 'Line Item', text: ' Line Item' },
    { key: 'Amount', value: 'Amount', text: ' Amount' },
]
const achOptions = [
    { key: 'Direct deposit ', value: 'Direct deposit ', text: ' Direct Deposit ' },
    { key: 'Direct payment', value: 'Direct payment', text: ' Direct Payment' },
]
const taxOptions = [
    { key: 'Percentage', value: 'Percentage', text: ' Percentage' },
    { key: 'Flat', value: 'Flat', text: ' Flat' },
]
const stateOptions = [
    { key: 'Alabama', value: 'Alabama', text: ' Alabama' },
    { key: 'Alaska', value: 'Alaska', text: ' Alaska' },
    { key: 'Arizona', value: 'Arizona', text: ' Arizona' },
    { key: 'Georgia', value: 'Georgia', text: ' Georgia' },
    { key: 'Florida', value: 'Florida', text: ' Florida' },
    { key: 'Mexico', value: 'Mexico', text: ' New Mexico' },
    { key: 'York', value: 'York', text: ' New York' },
]
const currencyOptions = [
    { key: 'United States dollar (USD)', value: 'United States dollar (USD)', text: ' United States dollar (USD)' },
    { key: 'Canadian dollar (CAD)', value: 'Canadian dollar (CAD)', text: ' Canadian dollar (CAD)' },
    { key: 'Chinese Renminbi Yuan (CNY)', value: 'Chinese Renminbi Yuan (CNY)', text: ' Chinese Renminbi Yuan (CNY)' },
    { key: 'Indian Rupee (INR)', value: 'Indian Rupee (INR)', text: ' Indian Rupee (INR)' },
    { key: 'Israel Shekel (ILS)', value: 'Israel Shekel (ILS)', text: ' Israel Shekel (ILS)' },
    { key: 'Kuwaiti Dinar (KWD)', value: 'Kuwaiti Dinar (KWD)', text: 'Kuwaiti Dinar (KWD)' },
    { key: 'United Arab Emirates Dirham (AED)', value: 'United Arab Emirates Dirham (AED)', text: 'United Arab Emirates Dirham (AED)' },
]
const countryOptions = [
    { key: 'usa', value: 'usa', text: 'USA' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
]

const initialRows = [1];




const Invoices = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const [inputRows,setInputRows] = useState(initialRows)




    

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(index)
    }

    const addMoreClick = () => {
       
    }


    const [value, setValue] = useState("");
    const handleChange = (e, { value }) => setValue(value);
    const handleTransactionChange = (e, { value }) => setValue(value);

    return (
        <Grid>
            <Grid.Column width={16}>
                <Header as="h2">Create Invoice</Header>
            </Grid.Column>
            <Grid.Column width={16}>
                <Accordion as={Menu} vertical className="createInvoice">
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            content='Company Name'
                            index={0}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0}>
                            <Form size="large">
                                <Grid columns="3">
                                    <Grid.Column>
                                        <Form.Input placeholder="Company Name" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Customer Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Invoice Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content='Payable To'
                            index={1}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 1}
                        >
                            <Form size="large">
                                <Grid columns="3">
                                    <Grid.Column>
                                        <Form.Input placeholder="First Name" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Last Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Company" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Address Line 1" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Address Line 2" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Select placeholder="Country" options={countryOptions} fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="City" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Select placeholder="State" options={stateOptions} fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Zip Code" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Email" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Phone Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Fax" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 2}
                            content='Bill To'
                            index={2}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 2}
                        >
                            <Form size="large">
                                <Grid columns="3">
                                    <Grid.Column width={16}>
                                        <Form.Checkbox className="commonToggle" label="Require Billing Only on Payment" toggle />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="First Name" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Last Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Company" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Address Line 1" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Address Line 2" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Select placeholder="Country" options={countryOptions} fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="City" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Select placeholder="State" options={stateOptions} fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Zip Code" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Email" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Phone Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Fax" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 3}
                            content='Currency'
                            index={3}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 3}>
                            <Form size="large">
                                <Grid >
                                    <Grid.Column width={16}>
                                        <Form.Select placeholder="Currency" options={currencyOptions} fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 4}
                            content='Items'
                            index={4}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 4}
                        >
                            <Form size="large">






                               {inputRows.map((elem,i)=>(
                                   <Grid >
                                   <Grid.Column width={3}>
                                       <Form.Input placeholder="Item Name" fluid />
                                   </Grid.Column>
                                   <Grid.Column width={4}>
                                       <Form.Input placeholder="Item Description" fluid />
                                   </Grid.Column>
                                   <Grid.Column width={2}>
                                       <Form.Input placeholder="Quantity" fluid />
                                   </Grid.Column>
                                   <Grid.Column width={2}>
                                       <Form.Input icon="dollar sign" iconPosition="left" placeholder="Price" fluid />
                                   </Grid.Column>
                                   <Grid.Column width={2}>
                                       <Form.Input icon="dollar sign" iconPosition="left" placeholder="Discount" fluid />
                                   </Grid.Column>
                                   <Grid.Column width={2} verticalAlign="middle">
                                       <span>Total:$200.00</span>
                                   </Grid.Column>
                                   <Grid.Column width={1} textAlign="right">
                                       <Button size="large" onClick={()=>setInputRows(inputRows.length>1 ?inputRows.filter((item,ind)=>ind!==i):inputRows)} color='red' icon='close' />
                                   </Grid.Column>
                               </Grid>
                               ))}
                                <Grid>
                                    <Grid.Column width={16}>
                                        <Button size="large" icon='plus' onClick={()=>setInputRows([...inputRows,1])} content="Add more item" />
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Table singleLine basic='very'>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>Subtotal</Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$700.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Tax type</Table.Cell>
                                                    <Table.Cell colSpan="2">
                                                        <Select placeholder="Choose Type" options={taxOptions} />
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Tax</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Shipping</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Total</b></Table.Cell>
                                                    <Table.Cell colSpan="2" textAlign="right" colSpan="2"><b>$700.00</b></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Amount Paid</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Adjustment</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Amount Due</Table.Cell>
                                                    <Table.Cell colSpan="2" textAlign="right" colSpan="2">$700.00</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 5}
                            content='Options/Message'
                            index={5}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 5}
                        >
                            <Form size="large">
                                <Grid >
                                    <Grid.Column width={16}>
                                        <Header as="h5">Send Invoice Via</Header>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Radio label='Email' name="radioGroup" value="Email" checked={value === "Email"} onChange={handleChange} />
                                                <Form.Radio label='Text' name="radioGroup" value="Text" checked={value === "Text"} onChange={handleChange} />
                                                <Form.Radio label='Email & Text' name="radioGroup" value="EmailText" checked={value === "EmailText"} onChange={handleChange} />
                                                <Form.Radio label='None' name="radioGroup" value="None" checked={value === "None"} onChange={handleChange} />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input placeholder="Email" />
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input type="date" placeholder="Date Due" />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Header as="h5">Transaction Type</Header>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Radio label='Sale' name="radioGroup" value="Sale" checked={value === "Sale"} onChange={handleTransactionChange} />
                                                <Form.Radio label='Authorization' name="radioGroup" value="Authorization" checked={value === "Authorization"} onChange={handleTransactionChange} />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Checkbox label='Allow Partial Payment' />
                                                <Form.Select placeholder='Partial Payment Type' options={paymentOptions} />
                                                <Form.Checkbox label='Require Shipping Details' />
                                                <Form.Checkbox label='Pay via ACH' />
                                                <Form.Select placeholder='ACH Processor' options={achOptions} />
                                                <Form.Checkbox label='Pay via Plaid' />
                                                <Form.Checkbox label='Pay via Mail' />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Form>
                                            <Form.TextArea rows="3" placeholder="Message" />
                                        </Form>

                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary">Mark as Paid</Button>
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice`}>Create Invoice</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                </Accordion>
            </Grid.Column>
        </Grid>
    )
}


export default Invoices;