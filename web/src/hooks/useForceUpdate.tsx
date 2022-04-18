/**
 * Force updates a component
 * @returns {() => void}
 */
const useForceUpdate = () => React.useReducer(() => ({}), {})[1] as () => void

export default useForceUpdate
