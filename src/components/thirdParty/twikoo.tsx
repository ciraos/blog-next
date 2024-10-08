'use client'
import Script from 'next/script'

export default function Twikoo() {
  return (
    <div>
      <div id="tcomment"></div>
      <Script
        src="https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.nocss.js"
        onReady={() => {
          window.twikoo.init({
            envId: 'https://twikoo.ciraos.top',
            el: '#tcomment',
            lang: 'zh-CN',
          })
        }}
      />
    </div>
  )
}
