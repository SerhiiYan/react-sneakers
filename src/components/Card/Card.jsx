import React, { Fragment, useState, useContext} from 'react'
import cls from './Card.module.scss'
import ContentLoader from "react-content-loader"
import { AppContext } from '../../App';

const Card = ({
  id, 
  title, 
  price, 
  imageUrl, 
  onAddToCart, 
  onAddToFavorites, 
  favorited = false,
  loading = false,
}) => {

  const [isFavorite, setIsFavorite] = useState(favorited)
  const {hasCartItem} = useContext(AppContext)

  function onClickPlus() {
    onAddToCart({id, title, price, imageUrl})
    console.log('render card:', title);
  }

  function onFavorite() {
    console.log('cardID',id);
    setIsFavorite(!isFavorite)
    onAddToFavorites({id, title, price, imageUrl})
  }


  return (
    <div className={cls.card}>
      {
        loading ? <ContentLoader 
          speed={2}
          width={150}
          height={260}
          viewBox="0 0 150 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="150" /> 
          <rect x="0" y="156" rx="5" ry="5" width="150" height="15" /> 
          <rect x="0" y="178" rx="5" ry="5" width="100" height="15" /> 
          <rect x="0" y="232" rx="5" ry="5" width="80" height="25" /> 
          <rect x="118" y="228" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> :
        <Fragment>
          {onAddToFavorites && 
            <div className={cls.favorite}>
              <img onClick={onFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
            </div>
          }
          <img width={133} height={112} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>{price}$</b>
            </div>
            {onAddToCart && 
              <img onClick={onClickPlus} className={cls.plus} src={hasCartItem(id) ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="plus" />
            }
          </div>
        </Fragment>
      }
    </div>
  );
};

export default Card;