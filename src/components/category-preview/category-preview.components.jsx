import ProductCard from "../product-card/product-card.components";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles.jsx";
import { Link } from "react-router-dom";

const categoryPreview = ({ title, products }) => (

  <CategoryPreviewContainer>
    <h2>
      <Title>
        <Link to={title}>
          { title.toUpperCase() }
        </Link>
      </Title>
    </h2>
    <Preview>
      {
        products.filter((_, idx) => idx < 5)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </ Preview>
  </ CategoryPreviewContainer>
);

export default categoryPreview;
