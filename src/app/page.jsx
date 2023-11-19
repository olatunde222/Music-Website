import Image from 'next/image'
import Events from './components/events/Events'
import Hero from './components/Hero'
import Player from './components/Player'

export default function Home() {
  return (
    <main>
      {/* Impoting the Hero section component */}
      <Hero/>
      {/* Player Component */}
      <Player/>
      {/* importing the event component */}
      <Events/>
    </main>
  )
}
