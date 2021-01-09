import './static/styles/variables.css'
import './static/styles/style.css'
import './static/styles/menu.css'
import '../node_modules/nprogress/nprogress.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
