import React from 'react'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ArchivePage from '../pages/ArchivePage'
import DetailPage from '../pages/DetailPage'
import AddPage from '../pages/AddPage'
import NotFoundPage from '../pages/NotFoundPage'

function NotesApp() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archives' element={<ArchivePage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
          <Route path='/notes/new' element={<AddPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default NotesApp