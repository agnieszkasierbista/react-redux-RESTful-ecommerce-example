export interface GalleryProps extends GalleryOwnProps,
    GalleryStateProps,
    GalleryDispatchProps {
}

export interface GalleryOwnProps {
    pictures: string[]
}

export interface GalleryStateProps {
    mainPicture: string
}

export interface GalleryDispatchProps {
    dispatchSetMainPic: (pic: string) => void;
}