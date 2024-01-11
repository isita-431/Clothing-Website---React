import './categories-preview.styles.scss'



// import SHOP_DATA from '../../shop-data';
// import { UserContext } from '../../contexts/user.context';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useContext,Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            { Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title];

                    // <Fragment key={title}>
                    //     <h2>{title}</h2>
                    //     <div className='products-container'>
                    //         {categoriesMap[title].map((product)=>(
                    //             <ProductCard key={product.id} product={product}/>
                    //         ))}
                    //     </div>

                    // </Fragment>
                return (<CategoryPreview key={title} title={title} products={products}/>);
            })}
            </Fragment>
        //  <div className='products-container'>

        //  </div>
    );
};

export default CategoriesPreview;