import cryptojs from 'crypto-js'

export const encrypt = (str: string) => {
  const cipher = cryptojs.AES.encrypt(str, process.env.ENCRYPTION_SECRET)
  return cipher.toString()
}

export const decrypt = (str: string) => {
  const bytes = cryptojs.AES.decrypt(str, process.env.ENCRYPTION_SECRET)
  const decrypted = bytes.toString(cryptojs.enc.Utf8)
  return decrypted
}
