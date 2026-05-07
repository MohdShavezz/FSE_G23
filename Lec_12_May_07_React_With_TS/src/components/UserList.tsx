import React from 'react'
import useMyuserlist from '../hooks/useMyuserlist'

const UserLIst: React.FC = () => {
    const { data, loading, error } = useMyuserlist('https://jsonplaceholder.typicode.com/users')
    //  console.log(data,loading,error)

    if(loading){
        return <p>LOADING...</p>
    }
    if(error){
        return <p>ERROR: {error}</p>
    }

    return (
        <div>
            User List
            {
               data.slice(0,5).map(user => (
                    <div key={user.id}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <p style={{ background: 'yellow' }}>{user.name}</p>
                            <p style={{ background: 'red' }}>{user.email}</p>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default UserLIst
