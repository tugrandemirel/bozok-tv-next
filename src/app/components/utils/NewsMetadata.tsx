import Head from 'next/head'

interface NewsMetadataProps {
  title: string
  description: string
  image: string
  publishDate: string
  author: string
  url: string
}

export const NewsMetadata = ({
  title,
  description,
  image,
  publishDate,
  author,
  url
}: NewsMetadataProps) => {
  return (
    <Head>
      {/* Pinterest Rich Pins */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="article:published_time" content={publishDate} />
      <meta property="article:author" content={author} />
      <meta property="og:url" content={url} />
      
      {/* Pinterest özel meta etiketleri */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:media" content={image} />
    </Head>
  )
} 