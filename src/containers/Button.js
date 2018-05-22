import { connect } from 'react-redux';
import { fetchList } from '../actions';
import Button from '../components/Button';

const mapStateToProps = state => {
  return {
    text: state.filterPhrase
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(fetchList())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);;