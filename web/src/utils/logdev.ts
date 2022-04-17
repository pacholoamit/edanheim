export const logdev = (data: any) => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (!isDevelopment) return
  console.log(data)
}
