import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tp1Component from '../components/index.components';
import Tp1Actions from '../actions/index.actions';

const mapStateToProps = (store) => ({
  values: store.reducers,
});

const dispatchMapping = (dispatch) => ({
  actions: bindActionCreators(Tp1Actions, dispatch),
});

export default connect(mapStateToProps, dispatchMapping)(Tp1Component);