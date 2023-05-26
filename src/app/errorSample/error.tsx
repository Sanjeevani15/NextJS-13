//now bydefault every component in next js is server component, so make any compononet a client component we do "use client"
"use client"
import React from 'react'

const Error = () => {
  return (
    <div>Sorry! but there is an loading the data</div>
  )
}

export default Error;