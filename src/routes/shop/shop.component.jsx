// import SHOP_DATA from '../../shop-data';
// import { UserContext } from '../../contexts/user.context';
// import { CategoriesContext } from '../../contexts/categories.context';
// import CategoryPreview from '../../components/category-preview/category-preview.component';
// import { useContext,Fragment } from 'react';
// import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    return (
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path =':category' element={<Category/>}/>
       </Routes>
        //  <div className='products-container'>

        //  </div>
    );
};

export default Shop;