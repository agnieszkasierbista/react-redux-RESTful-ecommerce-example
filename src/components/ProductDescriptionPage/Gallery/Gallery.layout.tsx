import {PropsWithChildren, PureComponent} from 'react';
import { StyledGallery, StyledMainPic, StyledThumbnails } from './Gallery.styled';
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
              <div key={pic}>
                <img
                  width="100"
                  height="100"
                  src={pic}
                  onClick={() => this.props.dispatchSetMainPic(pic)}
                  alt="prodPic"
                />
              </div>
            );
          })}
        </StyledThumbnails>
        <StyledMainPic src={this.props.mainPicture || this.props.pictures[0]}/>
      </StyledGallery>);
  }
}

export default Gallery;