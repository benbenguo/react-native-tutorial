/**
 * @flow
 */
import { combineReducers } from 'redux'
import player from './playerReducer'
// import homePage from './homeReducer'
// import joke from './JokeReducer'
import loading from './loadingReducer'
import searchPage from './searchReducer'
// import route from './routeReducer'
import musicListData from './MusicListModuleReducer'
import getMusicDetailMsg from './MusicDetailReducer'
import counter from './counterReducer'

const reducers = {
  loading,
  // homePage,
  player,
  // joke,
  // route,
  searchPage,
  musicListData,
  getMusicDetailMsg,
  counter
}
export default combineReducers(reducers)
