/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'

export function useFetch<Data = never>(url: string) {
  const { data } = useSWR<Data>(url, async url => {
    const responses = await fetch(url)
    const data = await responses.json()

    return data
  })

  return { data }
}
