import { ajax } from './http'
import { urls } from './api'
export function caseSummaryList (params) {
  return ajax({
    url: urls.caseSummaryList,
    method: 'GET',
    data: {},
    params: params
  })
}
