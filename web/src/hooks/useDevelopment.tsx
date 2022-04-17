/**
 * Hooks to run on development evnrionment
 */

const useDevelopment = () => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const log = (data: any) => {
    if (!isDevelopment) return
    console.log(data)
  }

  return { log }
}

export default useDevelopment
