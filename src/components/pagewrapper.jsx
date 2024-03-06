import React from 'react'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

export default function pageWrapper({ children }) {

    const {data:session} = useSession()

    if(session) {

        return 
         
       <>logged in as {session.user.name}</> 
    }
     
    return {children}
}
