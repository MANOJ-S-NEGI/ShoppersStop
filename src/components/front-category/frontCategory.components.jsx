import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../category-directory.json";
import { FrontCategoryRootConainer, CategoryContainer, BackgroundImage, CategoryBodyContainer } from "./frontCategory.styles.jsx";

const FrontCategory = () => {
  const navigate = useNavigate(); // useNavigate should be at the top level

  function NavigationHandler(route) {
    navigate(route);  // Simply call navigate when the handler is triggered
  }

  return (
    <FrontCategoryRootConainer>
      {categories.map((categoryRange) => {
        const { id, title, imageUrl, route } = categoryRange;
        return (
          <CategoryContainer key={id}>
            <BackgroundImage $imageUrl={imageUrl} />
            <CategoryBodyContainer onClick={() => NavigationHandler(route)}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainer>
          </CategoryContainer>
        );
      })}
    </FrontCategoryRootConainer>
  );
};

export default FrontCategory;
