const initialState = {
  data: [],
  loading: false,
  error: null
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'menu/setLoading':
      return { ...state, loading: payload }
    case 'menu/setError':
      return { ...state, error: payload }
    case 'menu/setMenu':
      return { ...state, data: payload }
      case 'menu/addMenu':
        return { ...state, data: state.data.concat(payload) }
    default:
      return state
  }
}