import React from 'react'
import { redirect } from 'next/navigation'
const page = () => {
  redirect('/page/home')
  return <div>page</div>
}

export default page
