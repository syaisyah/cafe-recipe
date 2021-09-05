const initialState = {
  data: [],
  loading: true,
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'loading/setLoading':
      return { ...state, loading: payload }
    case 'error/setError':
      return { ...state, error: payload }
    case 'ingredients/setIngredients':
      return { ...state, data: payload }
    case 'ingredients/addIngredients':
      return { ...state, data: state.data.concat(payload) }
    default:
      return state
  }
}