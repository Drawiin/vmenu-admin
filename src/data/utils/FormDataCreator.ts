const imageKeys = 'photos'

export default function createFormData(fiels: {
  [key: string]: any
}): FormData {
  const formData = new FormData()

  Object.entries(fiels).forEach(([key, value]) => {
    console.log(key, value)
    if (key === imageKeys) {
      console.log(key, value)
      const files = value as File[]
      files.forEach(file => formData.append(key, file))
    } else {
      formData.append(key, String(value))
    }
  })

  return formData
}
