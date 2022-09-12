import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Gallery from './Gallery.layout';
import {GalleryDispatchProps, GalleryStateProps} from './Gallery.types';
import {State} from '../../App/App.types';
import {setMainPic} from '../../../actions';

function mapStateToProps(state: State): GalleryStateProps {
  return {
    mainPicture: state.gallery.mainPicture
  };
}

function mapDispatchToProps(dispatch: Dispatch): GalleryDispatchProps {
  return {
    dispatchSetMainPic: (pic) => dispatch(setMainPic(pic))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);