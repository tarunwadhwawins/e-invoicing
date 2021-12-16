import React from 'react'
import { Button, Header, Image, Modal, Grid, Form, Checkbox } from 'semantic-ui-react'



function CatalogueModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
    open={props.openModal}
    closeIcon
    onClose={props.closeModal}
    size={"small"}
    >
      <Modal.Header>Subscribe new Plan</Modal.Header>
      <Modal.Content image>        
        <Modal.Description className="modalDescription">
        <Form size="large">
          <Grid>
            <Grid.Column width={8}>
                <h3>Item Name</h3>
                <Form.Input placeholder="Item Name" fluid />
            </Grid.Column>
            <Grid.Column width={8}>
                <h3>Short Description</h3>
                <Form.Input placeholder="Short Description" fluid />
            </Grid.Column>
            <Grid.Column width={8}>
                <h3>Price Per Unit</h3>
                <Form.Input placeholder="Price Per Unit" fluid />
            </Grid.Column>            
          </Grid>
          
        </Form>
            
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="btn-secondary">Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CatalogueModal