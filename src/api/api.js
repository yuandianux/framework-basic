const localUrl = '/api/api/test'
const buildUrl = 'http://0.0.0.0:0/api/test'
const baseUrl = process.env.NODE_ENV === 'development' ? localUrl : buildUrl

export const urls = {
  test: `${baseUrl}/test`
}
