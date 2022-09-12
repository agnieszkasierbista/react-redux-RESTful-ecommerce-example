import {PropsWithChildren, PureComponent} from 'react';
import { StyledGallery, StyledMainPic, StyledThumbnails } from './Gallery.styled';
import {GalleryProps} from './Gallery.types';

export class Gallery extends PureComponent<PropsWithChildren<GalleryProps>> {

  render() {
    return (
      <StyledGallery>
        <StyledThumbnails>
          {this.props.pictures.map((pic) => {
            return (
              <div key={pic}>
                <img width="100" height="100" src={pic}/>
              </div>
            );
          })}
        </StyledThumbnails>
        <StyledMainPic src={this.props.pictures[0]}/>
      </StyledGallery>);
  }
}

export default Gallery;