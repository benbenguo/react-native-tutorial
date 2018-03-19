/**
 * @flow
 */
import { combineReducers } from 'redux'

function musicList(state = {}, action = {}) {
  if (action.type === 'setPlayMusicList') {
    return [
      ...action.playMusicList,
    ]
  }
  return state
}

function currentMusicLrc(state = {}, action = {}) {
  if (action.type === 'setCurrentMusicLrc') {
    return {
      ...state,
      ...action.musicLrc,
    }
  }
  return state
}

function currentMusicInfo(state = {
  name: '',
  album: {
    picUrl: 'http://p1.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg',
  },
  artists: [{ name: '' }],
}, action = {}) {
  if (action.type === 'setCurrentMusicInfo') {
    return {
      ...state,
      ...action.musicInfo,
    }
  }
  return state
}

function searchResultList(state = {}, action = {}) {
  if (action.type === 'setSearchResultList') {
    return {
      ...state,
      ...action.searchResultList,
    }
  }
  return state
}

function status(state = {
  paused: true,
  muted: false,
  volume: 0.8,
  currentTime: 0,
  duration: 0,
  cyclicalPattern: 'repeat',
}, action = {}) {
  if (action.type === 'setPlayerStatus') {
    return {
      ...state,
      ...action.status,
    }
  }
  return state
}

export default combineReducers({
  status,
  musicList,
  currentMusicLrc,
  currentMusicInfo,
  searchResultList,
})
