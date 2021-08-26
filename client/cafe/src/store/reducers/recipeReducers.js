const initialState = {
  data: [],
  loading: true,
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'loading/setLoading':
      return { ...state, loading: payload }
    case 'error/setError':
      return { ...state, error: payload }
    case 'recipes/setRecipes':
      return { ...state, data: payload }
    default:
      return state
  }
}