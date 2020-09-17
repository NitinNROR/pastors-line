import { callApi } from "./ApiCall";

export const fetchData = (dispatch) => {
  callApi().then((data) => {
    const formatedData = data.contacts_ids.map((id) => {
      let contact = {
        id,
        country_id: data.contacts[id].country_id,
        first_name: data.contacts[id].first_name,
        last_name: data.contacts[id].last_name,
        phone_number: data.contacts[id].phone_number,
        email: data.contacts[id].email,
        contacts_ids: data.contacts[id].contacts_ids,
      };

      return contact;
    });
    dispatch({
      type: "LOAD_DATA",
      payload: { contacts: [...formatedData], loading: false },
    });
  });
};
