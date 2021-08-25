const initialState = {
  access_token: "",
  loading: false,
  error: null
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'loading/setLoading':
      return { ...state, loading: payload }
    case 'error/setError':
      return { ...state, error: payload }
    case 'accessToken/setAccessToken':
      console.log(payload, 'ini payload token di reducer user ')
      return { ...state, access_token: payload }
    default:
      return state
  }
}