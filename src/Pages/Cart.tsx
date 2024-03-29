import { useSelector } from 'react-redux';
import ProductItemInfo from '../component/ProductItemInfo';
import { ProductItemWrapper } from '../styles/globalStyle';
import styled from 'styled-components';
import CartCtaContainer from '../component/CartItemCta';

const ProductItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CartProductItem = styled(ProductItemWrapper)`
  padding:0px;
  margin:20px;
`

function Cart() {
  const cartItems = useSelector((state: any) => state.cartSlice.cart);

  return cartItems?.length > 0 ?  (
    <ProductItemBox>
      {cartItems.map((data:any, index : number)=>{
        return (
          <CartProductItem>
            <ProductItemInfo productdata = {data} />
            <CartCtaContainer productdata = {data} qty = {data.quantity} itemId = {data.id} />
          </CartProductItem>
        )
      })}
    </ProductItemBox>
  ) :  <div>Please add Items to the cart</div>

}

export default Cart
