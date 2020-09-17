import { connect } from "react-redux";
import AllContacts from "./AllContacts";

// console.log("mapStateToProps -> state", state.contactsReducer.contacts);
const mapStateToProps = (state) => ({
  contacts: state.contactsReducer.contacts,
});

export default connect(mapStateToProps, null)(AllContacts);
