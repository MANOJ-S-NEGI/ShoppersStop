import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {CATEGORIES_ACTION_TYPES} from './categories.reducer';
import {  fetchCategoriesSuccess, fetchCategoriesFailure, } from './categories.action';

//creating the generator function:
export function* fetchCategoriesAsync() {
  try{
    const categoriesArray  =  yield call( getCategoriesAndDocuments,'product-category' );
    yield put(fetchCategoriesSuccess(categoriesArray));
  }catch(error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
