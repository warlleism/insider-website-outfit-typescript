
import Main from './content'
import { Provider } from './context/provider'
import Rotas from './routes/route'

function App() {

  return (
    <div className="App">
      <Provider>
        <Rotas />
      </Provider>
    </div>
  )
}

export default App
