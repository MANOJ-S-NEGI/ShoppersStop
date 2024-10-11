import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;


export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector( [selectCategories], (categories) =>
   {
    const categoriesMap = Object.keys(categories).reduce((acc, title) => 
      {
        acc[title.toLowerCase()] = categories[title];
        return acc;
      },
      {});
    return categoriesMap;
  }
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);