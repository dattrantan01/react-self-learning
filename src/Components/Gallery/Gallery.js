import React from 'react';
import { GalleryProvider } from '../../Contexts/galleryContext';
import Cart from './Cart';
import HeaderGallery from './HeaderGallery';
import PhotoList from './PhotoList';

const Gallery = () => {
    return (
        <div className="relative">
            <GalleryProvider>
                <HeaderGallery></HeaderGallery>
                <Cart></Cart>
                <PhotoList></PhotoList>
  
            </GalleryProvider>
        </div>
    );
};

export default Gallery;