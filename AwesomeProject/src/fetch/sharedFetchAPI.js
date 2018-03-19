/**
 * @flow
 */
import {fetchAPI} from '../utils/Common';

export const APIParams = {
  cookie: '',
}

export default async function (url, params) {
  return await fetchAPI(`https://rnplayer.leanapp.cn${url}`, {
    ...params,
  })
}

export async function sharedPostAPI(url, params) {
  return await fetchAPI(url, {
    method: 'POST',
    headers: {
      Host: 'music.163.com',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    ...params,
  })
}
