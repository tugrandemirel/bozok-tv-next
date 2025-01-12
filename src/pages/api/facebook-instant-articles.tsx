import { NextApiRequest, NextApiResponse } from 'next'
import { getMainHeadlines, getLastMinutes, getFeaturedNews } from '@/services/newsletterService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [headlines, lastMinutes, featuredNews] = await Promise.all([
      getMainHeadlines(),
      getLastMinutes(),
      getFeaturedNews()
    ])
    
    const allNews = [...headlines, ...lastMinutes, ...featuredNews]
    
    // RSS header
    res.setHeader('Content-Type', 'application/rss+xml')
    
    // RSS içeriği oluştur
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>Bozok TV</title>
        <link>${process.env.NEXT_PUBLIC_URL}</link>
        <description>Yozgat'ın Haber Portalı</description>
        ${allNews.map(item => `
          <item>
            <title>${item.title}</title>
            <link>${process.env.NEXT_PUBLIC_URL}/haber/${item.slug}</link>
            <content:encoded>
              <![CDATA[
                <!doctype html>
                <html lang="tr" prefix="op: http://media.facebook.com/op#">
                  <head>
                    <meta charset="utf-8">
                    <link rel="canonical" href="${process.env.NEXT_PUBLIC_URL}/haber/${item.slug}">
                    <meta property="op:markup_version" content="v1.0">
                  </head>
                  <body>
                    <article>
                      <header>
                        <h1>${item.title}</h1>
                        <time class="op-published" datetime="${item.createdAt}">${item.createdAt}</time>
                        <time class="op-modified" datetime="${item.updatedAt}">${item.updatedAt}</time>
                        <address>${item.author || 'Bozok TV'}</address>
                      </header>
                      <figure>
                        <img src="${process.env.NEXT_PUBLIC_URL}${item.image?.path || '/test/default.jpg'}">
                        <figcaption>${item.title}</figcaption>
                      </figure>
                      ${item.content || item.description || ''}
                    </article>
                  </body>
                </html>
              ]]>
            </content:encoded>
            <pubDate>${item.createdAt}</pubDate>
            <guid>${process.env.NEXT_PUBLIC_URL}/haber/${item.slug}</guid>
          </item>
        `).join('')}
      </channel>
    </rss>`
    
    res.send(rss)
  } catch (error) {
    console.error('RSS feed oluşturma hatası:', error)
    res.status(500).json({ error: 'RSS feed oluşturulamadı' })
  }
} 