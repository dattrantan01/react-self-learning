import React from 'react';
import { useGallery } from '../../Contexts/galleryContext';
import PropTypes from 'prop-types'

const PhotoList = () => {
    const { photos, cardItems } = useGallery();

    return (
        <div className="py-10 px-5">
            <div className="grid grid-cols-4 gap-7">
                {photos.length > 0 && photos.map((item) => 
                    <PhotoItem key={item.id} info={item}></PhotoItem>
                )}
            </div>
        </div>
    );
};

const PhotoItem = ({info}) => {
    const { favoritesList, cardItemsList } = useGallery();

    return (
        <div className="relative h-[300px] group">
            <img  
                src={info.url} alt=""
                className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 cursor-pointer w-8">
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full"
                    onClick = {() => favoritesList(info.id)}
                >
                    <path d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z" 
                    fill={ info.isFavorite ? "#FC2872" : "#fff"}/>
                </svg>
                {/* FC2872 */}
            </span>
            <button className="py-2 px-6 absolute bottom-3 left-2/4 -translate-x-2/4 bg-white rounded-lg opacity-0 invisible
                group-hover:visible group-hover:opacity-100 transition-all hover:bg-pink-400"
                onClick={() => {cardItemsList(info)}}
            >
                Add to cart
            </button>
        </div>
    )
}

PhotoItem.propTypes = {
    info: PropTypes.object
}
export default PhotoList;