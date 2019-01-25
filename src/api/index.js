
const Qs = require('qs')

const axios = require('axios')

function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// params filter
function filterNull (o) {
  for (let key in o) {
    if (o[key] === null) {
      // delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function axiosApi (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' ? params : null,
    params: method === 'GET' ? params : null,
    baseURL: '',
    withCredentials: false,
    paramsSerializer: function (params) {
      return Qs.stringify(params, { indices: false })
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        success(res)
      }
    })
    .catch(function (err) {
      if (err.response && err.response.status === 401) {
        location.hash = '/login'
      }
      if (typeof failure === 'function') {
        failure()
      }
    })
}

function queryBUffer (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' ? params : null,
    params: method === 'GET' ? params : null,
    baseURL: '',
    withCredentials: false,
    responseType: 'arraybuffer',
    paramsSerializer: function (params) {
      return Qs.stringify(params, { indices: false })
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        success(res)
      }
    })
    .catch(function (err) {
      if (err) {
      }
      if (typeof failure === 'function') {
        failure()
      }
    })
}

export default {
  get: function (url, params, success, failure) {
    return axiosApi('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return axiosApi('POST', url, params, success, failure)
  },
  queryBuffer: function (url, params, success, failure) {
    return queryBUffer('GET', url, params, success, failure)
  },
  axios: axios
}
