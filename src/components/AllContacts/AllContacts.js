import React, { Component } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AllContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    if (!(this.props.contacts && this.props.contacts.length > 0)) {
      this.props.history.push("/");
    }
  }

  handleClose = () => {
    const { history } = this.props;
    this.setState({ show: false });
    history.push("/");
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="justify-content-center">
            <Modal.Title>All Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>SL.No.</th>
                  <th>Contact Id</th>
                  <th>Name</th>
                  <th>Country Id</th>
                  <th>Phone</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {this.props.contacts.map((contact, index) => {
                  const {
                    id,
                    first_name,
                    last_name,
                    phone_number,
                    email,
                    country_id,
                  } = contact;
                  const name = `${first_name} ${last_name}`;
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{country_id}</td>
                      <td>{phone_number}</td>
                      <td>{email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-a">All Contacts</Button>
            <Link to="/us" className="btn btn-b">
              US Contacts
            </Link>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
