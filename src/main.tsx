import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ---------------------------------------------------------------
// Zina-Regular load check (dev diagnostic).
// The @font-face is declared in index.css and should just work once
// real font binaries are in place. This purely *reports* whether the
// browser actually parsed a usable "Zina-Regular" font -- it changes
// nothing about rendering. Check the browser console after a hard
// refresh (Cmd/Ctrl+Shift+R) to see which case you're in.
// ---------------------------------------------------------------
if (typeof document !== 'undefined' && 'fonts' in document) {
  document.fonts
    .load('400 16px "Zina-Regular"')
    .then(() => {
      const isUsable = document.fonts.check('400 16px "Zina-Regular"')
      if (!isUsable) {
        console.warn(
          '[Wraft] "Zina-Regular" did not load a usable font -- the hero headline is ' +
            'rendering its Anton fallback instead. This almost always means the files at ' +
            'public/Font/Zina_Complete/Fonts/WEB/fonts/Zina-Regular.woff2 (.woff / .ttf) are ' +
            'still placeholders rather than real font binaries. Open DevTools -> Network, ' +
            'reload, filter for "Zina-Regular", and check the response size: a real woff2 ' +
            'file is tens of KB; a placeholder is a few bytes of plain text.',
        )
      } else {
        console.info('[Wraft] "Zina-Regular" loaded successfully.')
      }
    })
    .catch((err) => {
      console.warn('[Wraft] "Zina-Regular" failed to load:', err)
    })
}
