import { connect } from 'react-redux';
import { fetchList } from '../actions';
import List from '../components/List';

const mapStateToProps = state => {
  console.log('List mapstateotprops state', state)
  return {
    items: state.list.items,
    errors: state.errors
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