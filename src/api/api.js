const localUrl = '/api/api/v1'
const buildUrl = 'http://172.16.124.16:9002/api/v1'
const baseUrl = process.env.NODE_ENV === 'development' ? localUrl : buildUrl

export const urls = {
  caseSummaryList: `${baseUrl}/caseSummary/list`
}
