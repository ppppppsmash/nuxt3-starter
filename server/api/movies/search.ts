export default async (event: any) => {
  const { query } = getQuery(event)
  const config = useRuntimeConfig()

  const result = await $fetch(
    `${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.apiKey}`
      }
    }
  )

  return result
}