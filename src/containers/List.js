import { connect } from 'react-redux';
import { fetchList } from '../actions';
import List from '../components/List';

const mapStateToProps = state => {
  return {
    items: state.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(fetchList())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);;