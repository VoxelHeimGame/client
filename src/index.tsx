import { render } from 'solid-js/web'
import App from './App'

const root = document.getElementById('root')

if (root instanceof HTMLElement) {
  render(() => <App />, root)
} else {
  console.error('Root element not found')
}

