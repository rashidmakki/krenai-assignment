import { put, takeEvery, call , takeLatest, all} from 'redux-saga/effects';
import * as APIs from '../../../apis/index';
import { setProducts } from './slice';

function* fetchProductList(){
    try{
    // @ts-ignore
    const response = yield call(APIs.productList);
    if(response.status === 200){
        const {data} = response
        const {object}= data
        yield put(setProducts(object))
    }
    }catch(err:any){
       console.log(err.message)
    }
}

function* callToProductList(){
    yield takeEvery('product/getProducts',fetchProductList)
}

export function* productSaga(){
    yield all([
        call(callToProductList)
    ]);
}