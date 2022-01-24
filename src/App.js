import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import More from './routes/More'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id" //단순히 id라고 쓰면 /movie/id로 보내버린다 
                                // :필수 
                                //이렇게되면 Movie컴포넌트에 id가 필요하게 된다
        >
          <Detail />
        </Route>
        <Route path="/movie/more">
          <h1>More</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
