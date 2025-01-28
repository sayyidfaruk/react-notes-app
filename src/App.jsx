import React from 'react';
import NotesApp from './components/NotesApp';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    })
  }

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue} >
        <div className="app-container">
          <NotesApp />
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
