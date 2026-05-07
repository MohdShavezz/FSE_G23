import { useEffect, useState } from "react"

type API_USER_DATA = {
    id: number,
    name: string,
    email: string
}
const useMyuserlist = (url: string) => {
    const [data, setData] = useState<API_USER_DATA[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        try {
            async function fetchUser() {
                setLoading(true)
                const res = await fetch(url)
                const data: API_USER_DATA[] = await res.json()
                setData(data)
                setLoading(false)
            }
            fetchUser()
            
        } catch (error: any) {
            setLoading(false)
            setError(error.message)
            console.log('error:', error)
        } finally{
            setLoading(false)
        }
    }, [])

    // console.log(data,loading,error)

    return { data, loading, error }
}

export default useMyuserlist
