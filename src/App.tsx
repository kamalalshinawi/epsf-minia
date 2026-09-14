import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Events } from './pages/Events'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { StudentExchange } from './pages/StudentExchange'

const App = (): React.JSX.Element => (
  <BrowserRouter><Routes><Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="events" element={<Events />} />
    <Route path="about" element={<About />} />
    <Route path="history" element={<History />} />
    <Route path="student-exchange" element={<StudentExchange />} />
    <Route path="contact" element={<Contact />} />
  </Route></Routes></BrowserRouter>
)
export default App
