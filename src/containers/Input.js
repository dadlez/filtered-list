import { connect } from 'react-redux';
import { updatePhrase } from '../actions';
import Input from '../components/Input';

const mapStateToProps = state => {
  return {
    text: state.text
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: text => dispatch(updatePhrase(text))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);;