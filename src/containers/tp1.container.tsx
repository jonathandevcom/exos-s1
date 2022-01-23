import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Tp1Component from '../components';
import * as Tp1Actions from '../actions';

const mapStateToProps = (store) => ({
  values: store.reducers,
});

const dispatchMapping = (dispatch) => ({
  actions: bindActionCreators(Tp1Actions, dispatch),
});

export default connect(mapStateToProps, dispatchMapping)(Tp1Component);