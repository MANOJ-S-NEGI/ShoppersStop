import CategoriesPreviewExtended from "../categories-preview-extended/categories-preview-extended";
import { Route, Routes } from "react-router-dom";
import CategoryExtended from "../category-extended/category-extended.route"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {fetchCategoriesStart} from '../../redux-store/category/categories.action'

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

 


  return (
    <Routes>
      <Route index element={<CategoriesPreviewExtended />} />
      <Route path=':category' element={<CategoryExtended />} />
    </Routes>
  );
};

export default Shop;
  