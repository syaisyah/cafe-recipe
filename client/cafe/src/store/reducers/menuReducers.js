const initialState = {
  data: [],
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
    case 'menu/setMenu':
      return { ...state, data: payload }
    default:
      return state
  }
}