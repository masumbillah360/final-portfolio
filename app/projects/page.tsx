'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProjectPage = () => {
  const router = useRouter()
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <h1>Project Page</h1>
        <Button onClick={() => router.replace('/')}>Home</Button>
      </div>
    </div>
  )
}

export default ProjectPage;