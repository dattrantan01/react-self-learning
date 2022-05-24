import React from 'react';
import { GalleryProvider } from '../../Contexts/galleryContext';
import PhotoList from './PhotoList';

const Gallery = () => {
    return (
        <>
            <GalleryProvider>
                <PhotoList></PhotoList>
            </GalleryProvider>
        </>
    );
};

export default Gallery;