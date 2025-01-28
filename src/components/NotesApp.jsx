import React from 'react'
import Navigation from './Navigation'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ArchivePage from '../pages/ArchivePage'
import DetailPage from '../pages/DetailPage'
import AddPage from '../pages/AddPage'
import NotFoundPage from '../pages/NotFoundPage'
import { getUserLogged, putAccessToken } from '../utils/network-data'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

function NotesApp() {
  const [authUser, setAuthUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthUser(data);
      setInitializing(false);
    })
  }, [])

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
  }

  function onLogout() {
    setAuthUser(null)
    putAccessToken('')
    navigate('/')
  }

  if (initializing === true) {
    return null
  }

  return (
    <>
      <Navigation user={authUser} logout={onLogout}/>
      <main>
        {authUser === null ? (
          <Routes>
            <Route path='/' element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/archives' element={<ArchivePage />} />
            <Route path='/notes/:id' element={<DetailPage />} />
            <Route path='/notes/new' element={<AddPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
    </>
  )
}

export default NotesApp