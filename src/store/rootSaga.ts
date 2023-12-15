import { all, fork } from 'redux-saga/effects';
import { productSaga } from '../modules/cart/ducks/saga';

function* rootSaga(){
    yield all([
     fork(productSaga)
    ]);
}

export default rootSaga;