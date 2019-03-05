import { all } from 'redux-saga/effects'
import propertyWatcher from './propertyWatcher'

export default function* rootSaga() {
    yield all([
        propertyWatcher()
    ])
  }