import {PropsWithChildren, PureComponent} from 'react';
import { StyledGallery, StyledMainPic, StyledThumbnail, StyledThumbnails } from './Gallery.styled';
import {GalleryProps} from './Gallery.types';

export class Gallery extends PureComponent<PropsWithChildren<GalleryProps>> {
  componentWillUnmount() {
    this.props.dispatchSetMainPic('');
  }

  render() {
    return (
      <StyledGallery>
        <StyledThumbnails>
          {this.props.pictures.map((pic) => {
            return (
              <StyledThumbnail
                key={pic}
                onClick={() => this.props.dispatchSetMainPic(pic)}
                src={pic}
              />
            );
          })}
        </StyledThumbnails>
        <StyledMainPic src={this.props.mainPicture || this.props.pictures[0]}/>
      </StyledGallery>);
  }
}

export default Gallery;