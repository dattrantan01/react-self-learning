import React from 'react';
import { useGallery } from '../../Contexts/galleryContext';

const Cart = () => {
    const { showCart, cardItems, deleteCartItems, showFavorites, favorites, favoritesList } = useGallery();
    const listFavorites = favorites.filter(item => item.isFavorite === true);
    return (
        <div className={`cart fixed w-[300px] h-[500px] bg-white top-[50px] right-0 z-10 rounded-lg
            transition-all border-2 border-pink-300 flex flex-col gap-5 p-4 overflow-auto
            ${ (showCart || showFavorites) ? "" :"opacity-0 invisible" }
        `}>
            {
                showCart && cardItems.map((item) => {
                    return (
                        <div className="flex items-center gap-7 relative before:w-full before:h-[1px] before:bg-pink-400
                            before:bottom-0 before:absolute before:translate-y-2
                         " key={item.id}>
                            <div className="w-16 h-16">
                                <img 
                                    src={item.url}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <button className="border border-pink-700 bg-pink-600 px-6 py-2 text-white rounded-xl"
                                onClick={() => deleteCartItems(item)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })

            }
            {showFavorites && listFavorites.map((item) => {
                    return (
                        <div className="flex items-center gap-7 relative before:w-full before:h-[1px] before:bg-pink-400
                            before:bottom-0 before:absolute before:translate-y-2" 
                         key={item.id}>
                            <div className="w-16 h-16">
                                <img 
                                    src={item.url}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <button className="border border-pink-700 bg-pink-600 px-6 py-2 text-white rounded-xl"
                                onClick={() => favoritesList(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
        </div>)
    
};

export default Cart;