import React, { useState } from 'react';
import { Grid, Icon, Image, Dropdown, Card, Feed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo-2.png"
import Profile from "../../assets/images/profile.jpg"
import "./header.scss"
import { env } from '../../shared/functional/global-import';
import AddMemberModal from "../../views/team/AddMemberModal";


const Header = () => {
    const [showAddMemberModal, setShowAddMemberModal] = useState(false)

    return (
        <div className="headerTop">
            <AddMemberModal open={showAddMemberModal} setOpen={setShowAddMemberModal} />
            <Grid>
                <Grid.Column width={8}>
                    <div className="logoMenu">
                        <Link to={`${env.PUBLIC_URL}/dashboard/dashboard`}>
                            <Image src={Logo} />
                        </Link>
                        <Icon name="sidebar" size="big" link />
                    </div>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right" verticalAlign="middle">

                    <div className="dropDowns">
                        <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`} className="btn-secondary"><Icon name="plus" /> Create Invoice</Button>
                        <Dropdown multiple icon='bell outline' floating>
                            <Dropdown.Menu className='left'>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>Notifications</Card.Header>
                                    </Card.Content>
                                    <Card.Content>
                                        <Feed>
                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You generated invoice for <a>Mission Beach Villas</a>.
                                                    </Feed.Summary>
                                                    <Feed.Date content='1 day ago' />
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You added <a>Smith</a> as Business Admin.
                                                    </Feed.Summary>
                                                    <Feed.Date content='3 days ago' />
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You added <a>Robert</a> as Staff.
                                                    </Feed.Summary>
                                                    <Feed.Date content='4 days ago' />
                                                </Feed.Content>
                                            </Feed.Event>
                                        </Feed>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Link to={`${env.PUBLIC_URL}/dashboard/notifications`}>All Notifications</Link>
                                    </Card.Content>
                                </Card>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="user">
                            <p>Jane Doe</p>
                            <Image src={Profile} />
                            <Dropdown multiple floating icon='angle down' >
                                <Dropdown.Menu className='left'>
                                    <Dropdown.Menu scrolling>
                                        <Dropdown.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`}><Icon name="setting" /> User Setting</Dropdown.Item>
                                        <Dropdown.Item as={Link} to={`${env.PUBLIC_URL}/`}><Icon name="log out" /> Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Header
