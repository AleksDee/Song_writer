import { useState } from 'react'

const RHYME_ENDINGS = [
  ['fire', 'higher', 'desire', 'inspire', 'wire'],
  ['flow', 'know', 'show', 'glow', 'go'],
  ['night', 'right', 'tight', 'might', 'light'],
  ['game', 'flame', 'name', 'fame', 'claim'],
  ['beat', 'street', 'heat', 'feat', 'elite'],
  ['mind', 'grind', 'find', 'blind', 'rewind'],
  ['top', 'drop', 'hop', 'stop', 'nonstop'],
  ['real', 'feel', 'deal', 'steal', 'reveal'],
]

const VERSE_TEMPLATES = [
  (w: string) => `Yo, listen up, I got something to say about ${w},`,
  (w: string) => `They talk about ${w} but they don't know the half,`,
  (w: string) => `I been thinking 'bout ${w} since the crack of dawn,`,
  (w: string) => `${w} on my mind, can't shake it loose,`,
  (w: string) => `When I think about ${w}, I feel the fire,`,
  (w: string) => `Started from the bottom, now it's all about ${w},`,
]

const FILLER_LINES = [
  'Yeah, yeah, uh-huh, that\'s how we do,',
  'Represent the hustle, stay true to the grind,',
  'No cap, no filter, this is straight from the heart,',
  'Every word I spit is art from the start,',
  'They tried to hold me back but I pushed through the pain,',
  'Rising to the top, ain\'t nothing gonna stop the reign,',
  'Stack the paper, chase the dream, never lose the vision,',
  'Cut through the noise, make every move a precision,',
  'Hooks and bars, I\'m spitting fire like a dragon,',
  'While the haters keep on hating, I keep on dragging,',
]

function pickRhymePair(): [string, string] {
  const set = RHYME_ENDINGS[Math.floor(Math.random() * RHYME_ENDINGS.length)]
  const i = Math.floor(Math.random() * set.length)
  const j = (i + 1 + Math.floor(Math.random() * (set.length - 1))) % set.length
  return [set[i], set[j]]
}

function generateRapSong(input: string): string {
  const words = input.trim().split(/\s+/).filter(Boolean)
  const keyword = words[Math.floor(Math.random() * words.length)] || 'life'

  const lines: string[] = []

  // Hook
  const [r1, r2] = pickRhymePair()
  lines.push(`[Hook]`)
  lines.push(VERSE_TEMPLATES[0](keyword))
  lines.push(`Got that ${r1}, rising ${r2},`)
  lines.push(FILLER_LINES[0])
  lines.push(`All about ${keyword}, yeah, that's my desire,`)
  lines.push('')

  // Verse 1
  lines.push(`[Verse 1]`)
  lines.push(VERSE_TEMPLATES[2](keyword))
  lines.push(FILLER_LINES[1])
  const [r3, r4] = pickRhymePair()
  lines.push(`I got that ${r3} energy, never gonna ${r4},`)
  lines.push(FILLER_LINES[2])
  lines.push(FILLER_LINES[3])
  lines.push(`${keyword} is the key that unlocks every door,`)
  lines.push(FILLER_LINES[4])
  lines.push('')

  // Verse 2
  lines.push(`[Verse 2]`)
  lines.push(VERSE_TEMPLATES[5](keyword))
  lines.push(FILLER_LINES[5])
  const [r5, r6] = pickRhymePair()
  lines.push(`${r5} on my sleeve, I ${r6} every bet,`)
  lines.push(FILLER_LINES[6])
  lines.push(FILLER_LINES[7])
  lines.push(`When they mention ${keyword}, they better respect,`)
  lines.push(FILLER_LINES[8])
  lines.push(FILLER_LINES[9])
  lines.push('')

  // Outro
  lines.push(`[Outro]`)
  lines.push(`${keyword.toUpperCase()} — that's the word, that's the way,`)
  lines.push(`Writer spitting truth, every single day.`)

  return lines.join('\n')
}

const RAP_IMAGE = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'

export default function SongGenerator() {
  const [input, setInput] = useState('')
  const [song, setSong] = useState('')
  const [showMusic, setShowMusic] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setSong(generateRapSong(input))
    setShowMusic(true)
  }

  return (
    <div className="generator">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="word-input"
          type="text"
          placeholder="Enter a word or phrase…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Generate Rap
        </button>
      </form>

      {song && (
        <div className="result">
          <div className="result-image-wrap">
            <img
              className="result-image"
              src={RAP_IMAGE}
              alt="Rap artist on stage"
            />
          </div>

          <div className="result-content">
            <h2 className="result-title">Your Rap Song</h2>
            <pre className="song-text">{song}</pre>
          </div>
        </div>
      )}

      {showMusic && (
        <div className="music-wrap">
          <h3 className="music-title">Beat for your song</h3>
          <iframe
            className="music-player"
            src="https://www.youtube.com/embed/uelHwf8o7_U?autoplay=0"
            title="Rap beat"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}
