// @flow
export default (error: string, short?: mixed) => {
  if (error === 'Network error: Failed to fetch') {
    return short ? 'No Connection' : 'Network error, please check your internet connection'
  }
  return error.replace('GraphQL error: ', '')
}
