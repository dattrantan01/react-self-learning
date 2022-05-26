import React, { useContext, useState } from 'react';

const fakeData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      isFavorite: false,
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
      isFavorite: false,
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
      isFavorite: false,
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
      isFavorite: false,
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      isFavorite: false,
    },
  ];
  

const GalleryContext = React.createContext();

const GalleryProvider = (props) => {
    const [photos, setPhotos] = useState(fakeData);
    const [cardItems, setCardItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    // hàm cập nhật lại favorites
    const favoritesList = (id) => {
        const newList = photos.map((photo) => {
            if(photo.id === id) {
                photo.isFavorite = !photo.isFavorite;
                return photo;
            }
            return photo;
        });

        setFavorites(newList)

    }

    const cardItemsList = (photo) => {
      const check = cardItems.every((item) => {
        return item.id !== photo.id;
      })
      if(check){
        setCardItems([...cardItems, photo]);
      }
    }
    const deleteCartItems = (photo) => {
      const newCardItems = cardItems.filter((item) => {
        if(item.id !== photo.id) {
          return item;
        }
      })
      setCardItems(newCardItems);
    }
   

  
    
    const value = { photos, cardItems, favorites, setPhotos, setFavorites, setCardItems, favoritesList, cardItemsList, setShowCart, showCart, deleteCartItems, showFavorites, setShowFavorites}
    return <GalleryContext.Provider value={value} {...props}>{props.children}</GalleryContext.Provider>
}


const useGallery = () => {
    const context = useContext(GalleryContext);
    if(typeof context === 'undefined'){
        throw new Error('useGallery must be used within a GalleryProvider');
    }
    return context;
}
export { useGallery, GalleryProvider}