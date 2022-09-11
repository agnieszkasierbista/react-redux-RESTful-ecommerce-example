import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Gallery from './Gallery.layout';
import {GalleryDispatchProps, GalleryStateProps} from './Gallery.types';
import {State} from '../../App/App.types';

function mapStateToProps(state: State): GalleryStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): GalleryDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);