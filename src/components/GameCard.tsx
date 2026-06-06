import React from 'react'

type Game = {
  id: string
  title: string
  short: string
  cover: string
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="game-card">
      <img src={game.cover} alt={game.title} className="thumb" />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.short}</p>
      </div>
    </div>
  )
}
