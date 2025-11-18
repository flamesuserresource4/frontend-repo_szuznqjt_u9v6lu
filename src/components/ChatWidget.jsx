import { useEffect, useMemo, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

function resolveBackendUrl() {
  const envUrl = import.meta.env.VITE_BACKEND_URL
  if (envUrl) return envUrl.replace(/\/$/, '')
  try {
    const { origin, host } = window.location
    // Heuristic: replace -3000 with -8000 on the host used in this environment
    if (host.includes('-3000')) {
      return origin.replace('-3000', '-8000')
    }
  } catch {}
  return ''
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hei! Jeg er din Nex Rail-hjelper. Spør meg om nybygg, vedlikehold, sikkerhet eller beredskap.' },
  ])

  const backend = useMemo(resolveBackendUrl, [])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  async function send(text) {
    const content = (text ?? input).trim()
    if (!content) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', content }])
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      })
      if (!res.ok) throw new Error('Nettverksfeil')
      const data = await res.json()
      const reply = data?.reply || 'Beklager, noe gikk galt.'
      const suggestions = Array.isArray(data?.suggestions) ? data.suggestions : []
      setMessages((m) => [...m, { role: 'assistant', content: reply, suggestions }])
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Kunne ikke koble til server. Prøv igjen senere eller bruk kontaktskjemaet.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50"
        >
          <MessageCircle className="h-5 w-5" />
          Chat
        </button>
      )}

      {open && (
        <div className="w-[92vw] sm:w-96 h-[70vh] sm:h-[520px] rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-2xl flex flex-col">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="text-white font-semibold">Nex Rail – Chat</div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={
                    'inline-block max-w-[85%] rounded-2xl px-4 py-2 text-sm ' +
                    (m.role === 'user'
                      ? 'bg-sky-600 text-white'
                      : 'bg-white/5 text-slate-100 border border-white/10')
                  }
                >
                  {m.content}
                </div>
                {m.suggestions && m.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => send(s)}
                        className="text-xs rounded-full border border-white/15 px-3 py-1 text-slate-200 hover:bg-white/5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-block rounded-2xl px-4 py-2 text-sm bg-white/5 text-slate-100 border border-white/10">
                  Skriver...
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Still et spørsmål på norsk..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-2 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          {!backend && (
            <div className="px-4 pb-3 text-[11px] text-amber-300/80">
              Tips: Sett VITE_BACKEND_URL i miljøvariabler for pålitelig chat.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
