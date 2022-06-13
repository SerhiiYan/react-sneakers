import React from 'react';
import Card from '../components/Card/Card';
import { AppContext } from '../App';

const Favorites = () => {

  const {favorites, onAddToFavorites} = React.useContext(AppContext)
  console.log('render FAV', favorites);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
        
      </div>

      <div className="d-flex flex-wrap justify-around">
        {favorites.map(favorite => {
          return (
            <Card key={favorite.id} {...favorite} favorited={true} onAddToFavorites={onAddToFavorites}/>
          )
        }
        )}
      </div>
    </div>
  );
};

export default Favorites;