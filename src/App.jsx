import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import FriendsPage from './pages/FriendsPage/FriendsPage.jsx'
import AddFriendPage from './pages/AddFriendPage/AddFriendPage.jsx'
function App() {
  //[ ]https://www.ag-grid.com/charts/gallery/stacked-area/
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/friends' element={<FriendsPage/>}/>
        <Route path='/friends/add' element={<AddFriendPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
