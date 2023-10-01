import useAxios from "axios-hooks"
import { API_URL } from "../../constants"
import { Character } from "../../types/Character"

export const useGetCharactersByName = (query: string) => {
    return useAxios<{info: {count: number}, results: Character[]}>(
        {
            url: `${API_URL}/character`,
            params: query ? {name: query} : {page: 1}
        },
        {manual: true}
      )
}