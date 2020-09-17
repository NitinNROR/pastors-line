import { connect } from "react-redux";
import USContacts from "./USContacts";

const mapStateToProps = (state) => {
  const contacts = state.contactsReducer.contacts.filter(
    (contact) => contact.country_id === 226
  );

  return { contacts };
};

export default connect(mapStateToProps, null)(USContacts);
