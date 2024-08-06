'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string>()

  const handleSend = () => {
    setLoading(true)
    fetch('/api/mail', {
      method: 'POST'
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch(err => setResult(err))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <Button onClick={handleSend}>
        Send
      </Button>
      {loading && <div>Sending...</div>}
      <div>{JSON.stringify(result)}</div>
    </div>
  )
}

export default Page
