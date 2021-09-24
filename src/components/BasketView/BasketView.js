import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromBasket, addToBasket, deleteFromBasket } from '../../reducers/basketSlice'
import { Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import {Wrapper , CloseWrapper , InfoWrapper , QuantityWrapper, ImageWrapper} from './Styles';

function BasketView({title, price, id, quantity, image}) {
  console.log('image', image)
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket( {id}  ))
  }
  

  const addItem = () => {
    const productToAdd = {
      id, title, price, quantity, image
    }
    dispatch(addToBasket(productToAdd))
  }

  const deleteItemFromBasket = () => {
    dispatch(deleteFromBasket( {id}  ))
  }

  return (
    <Wrapper>
      <CloseWrapper onClick = {deleteItemFromBasket}>
      <DeleteIcon />
      </CloseWrapper>
      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>
      <InfoWrapper>
      <p>{title}</p>
      <p><strong>£{price}</strong></p>
      <p><strong>Quantity: {quantity}</strong></p>
      </InfoWrapper>
      <QuantityWrapper>
      <Button variant="contained" color="primary" onClick = {removeItemFromBasket}>-</Button>
        <p><strong>{quantity}</strong></p>
      <Button variant="contained" color="primary" onClick = {addItem}>+</Button>
      </QuantityWrapper>
    </Wrapper>
  )
}

export default BasketView

