const useAuthForm = () => {
  const validate = {
    email: (value: string) =>
      /^\S+@\S+$/.test(value) ? null : 'Invalid email',
  }
  return { validate }
}

export default useAuthForm
