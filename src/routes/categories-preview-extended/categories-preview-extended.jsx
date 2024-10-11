import CategoryPreview from '../../components/category-preview/category-preview.components.jsx';
import { ProductContainer } from './categories-preview-extended.styles.jsx'
import { selectCategoriesMap } from '../../redux-store/category/categories.selector.js'
import { useSelector } from 'react-redux';

const CategoriesPreviewExtended = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  //console.log("trigerred previews")
  //console.log(Object.keys(categoriesMap))

  return (
    <ProductContainer>
      { Object.keys(categoriesMap).map((title) =>
       {
        const products = categoriesMap[title];
        //console.log(products)
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
        })
      }
    </ProductContainer>
  )   
 };

export default CategoriesPreviewExtended;
