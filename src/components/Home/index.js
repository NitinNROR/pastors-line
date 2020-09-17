import { connect } from "react-redux";
import Home from "./Home";
import { fetchData } from "../../actions";

const mapStateToProps = (state) => ({
  loading: state.contactsReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => fetchData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
