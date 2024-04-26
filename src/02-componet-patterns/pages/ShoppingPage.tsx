import { useShoppingCart } from '../hooks/useShoppingCart';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/product';
import  '../styles/custom-styles.css';



export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();  

  return (
    
    <div>

        <h1>Shopping Store</h1>
        <hr />

        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
         }}>

            {/* <ProductCard product={ product }/> */}

            {/* <ProductCard product={ product } className="bg-dark text-white">
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className="text-bold" />
                <ProductCard.Buttons className="custom-buttons" />
            </ProductCard> */}

            {
              products.map( product => ( 
                <ProductCard 
                    product={ product }
                    key={ product.id }
                    className="bg-dark text-white"
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>                
              ))
            }

        </div>
{/* 
        <input 
            value={ counter }
            onChange={ (e) => setCounter( e.target.value ) }
        /> */}

        <div className="shopping-cart">


                {
                  Object.entries( shoppingCart ).map( ([ key, product ]) => (
                    <ProductCard 
                      key={ key }
                      product={ product }
                      className="bg-dark text-white"
                      style={{ width: '100px' }}
                      value={ shoppingCart[product.id]?.count || 0 }
                      >
                      <ProductImage className="custom-image" />
                      <ProductButtons 
                        className="custom-buttons"
                        style={{
                          display: 'flex',
                          justifyContent: 'center'
                      }}
                      />
                    </ProductCard>
                  )) 
                }


        </div>


    </div>

  )
}
