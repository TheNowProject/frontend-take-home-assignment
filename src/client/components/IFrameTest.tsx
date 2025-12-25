import React, { useRef } from 'react'

export const IFrameTest = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">IFrame Test</h1>

      <div className="max-w-md border-gray-400">
        <iframe
          ref={iframeRef}
          src="https://www.housenow.com.vn/wv/c/bat-dong-san/tim-kiem"
          title="Test House"
          width="100%"
          height="1000px"
          className="border-none"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  )
}
