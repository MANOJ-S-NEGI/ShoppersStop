import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.components";
import { HeadingTwo, CategoryContainer } from "./category-extended.styles"

import { selectCategoriesMap } from "../../redux-store/category/categories.selector"
import { useSelector } from "react-redux";

const CategoryExtended =()=>{
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);
  //console.log('rendering category');

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <HeadingTwo>{category.toUpperCase()}</HeadingTwo>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default CategoryExtended;
