import Script from 'next/script'

export const ThirdPartyScripts = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="ga-script"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      {/* Sosyal Medya Paylaşım Scriptleri */}
      <Script
        strategy="lazyOnload"
        src="https://platform.twitter.com/widgets.js"
      />
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/tr_TR/sdk.js"
      />
    </>
  )
} 