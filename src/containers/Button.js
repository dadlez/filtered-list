import { connect } from 'react-redux';
import { fetchList } from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(fetchList())
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Button);;