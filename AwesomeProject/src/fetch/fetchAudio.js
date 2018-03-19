/**
 * @flow
 */
import sharedFetchAPI from "./sharedFetchAPI"

export async function search(keywords) {
  return sharedFetchAPI('/search?keywords=' + keywords) || {}
}


export async function getRecommendResource() {
  return sharedFetchAPI('/recommend/resource')
}

export async function getMusicLrc(id) {
  return sharedFetchAPI('/lyric?id=' + id) || {}
}

export async function getMusicUrlById(id) {
  return sharedFetchAPI(`/music/url?id=${id}`) || {}
}

export async function getMusicDetail(id) {
  return sharedFetchAPI('/playlist/detail?id=' + id) || {}
}

export async function getSongDetailById(id) {
  return sharedFetchAPI('/song/detail?ids=' + id) || {}
}