'use client'

import { useState } from 'react'
import ResultCard from './ResultCard'
import { Spinner } from './spinner'

export default function Form() {
  const [topic, setTopic] = useState('')
  const [niche, setNiche] = useState('fashion')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ topic, niche }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to generate')
      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md space-y-5 w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter a topic"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm sm:text-base"
          required
        />

        <select
          value={niche}
          onChange={e => setNiche(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        >
          <option value="fashion">Fashion</option>
          <option value="fitness">Fitness</option>
          <option value="finance">Finance</option>
        </select>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition text-sm sm:text-base disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size={16} />
              Generating...
            </>
          ) : (
            'Generate Idea'
          )}
        </button>
      </form>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {result && <ResultCard {...result} />}
    </div>
  )
}
