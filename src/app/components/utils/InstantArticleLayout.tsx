interface InstantArticleLayoutProps {
  title: string
  publishDate: string
  updateDate: string
  author: string
  image: string
  imageCaption: string
  content: string
  url: string
}

export const InstantArticleLayout = ({
  title,
  publishDate,
  updateDate,
  author,
  image,
  imageCaption,
  content,
  url
}: InstantArticleLayoutProps) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <time className="op-published" dateTime={publishDate}>{publishDate}</time>
        <time className="op-modified" dateTime={updateDate}>{updateDate}</time>
        <address>{author}</address>
        <meta property="og:url" content={url} />
      </header>
      <figure>
        <img src={image} />
        <figcaption>{imageCaption}</figcaption>
      </figure>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
} 