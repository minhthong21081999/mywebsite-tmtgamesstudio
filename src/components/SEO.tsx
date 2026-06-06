import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  url,
  image
}: {
  title: string
  description?: string
  url?: string
  image?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TMTGamesStudio',
    url: url || 'https://tmtgamesstudio.example',
    logo: image || 'https://via.placeholder.com/400x100.png?text=TMTGames',
    description: description || ''
  }

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
