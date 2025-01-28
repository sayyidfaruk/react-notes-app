import PropTypes from 'prop-types';
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MdGTranslate, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

function Navigation({ user, logout }) {
  const {theme, toggleTheme} = React.useContext(ThemeContext);
  const {locale, toggleLocale} = React.useContext(LocaleContext)

  return (
    <header>
      <h1>
        <Link to={'/'}>{locale === 'id'?'Aplikasi Catatan':'Notes App'}</Link>
      </h1>
      {user && (<nav className='navigation'>
        <ul>
          <li>
            <Link to={'/archives'}>{locale === 'id'?'Arsip':'Archived'}</Link>
          </li>
        </ul>
      </nav>)}
      <button className='toggle-locale' onClick={toggleLocale}><MdGTranslate /></button>
      <button className='toggle-theme' onClick={toggleTheme}>{theme === 'light'? <MdOutlineDarkMode />: <MdOutlineLightMode /> }</button>
      {user && (<button className='button-logout' onClick={logout}><FiLogOut />{user.name}</button>)}
    </header>
  )
}

Navigation.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func.isRequired,
};

export default Navigation