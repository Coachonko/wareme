import { component } from '@dark-engine/core'
import { createRoot } from '@dark-engine/platform-browser'

import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'

const App = component(() => {
  return (
    <div>
      <h1>@wareme/currency-input</h1>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  )
})

createRoot(document.getElementById('dark-root')).render(<App />)
