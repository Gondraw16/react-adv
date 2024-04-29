import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

 
 export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {
    // console.log('onProductCountChange', count, product);
    setShoppingCart( oldShoppingCartState => {

      const ProductInCart: ProductInCart = oldShoppingCartState[product.id] || { ...product, count: 0 };


      if( Math.max( ProductInCart.count + count, 0 )  > 0) {
        ProductInCart.count += count;
        return {
          ...oldShoppingCartState,
          [product.id]: ProductInCart
        }
      }

      // Borrar el producto

      const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
      return rest;      

    //   if( count === 0 ) {

    //     const { [product.id]: toDelete, ...rest } = oldShoppingCartState;

    //     return rest;

    //   }

    //   return {
    //     ...oldShoppingCartState,
    //     [ product.id ]: { ...product, count }
    //   }
    } )
  }

   return {
      onProductCountChange,
      shoppingCart
   }
 }
 