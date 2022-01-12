import * as React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react'
import useFetch from 'react-fetch-hook'


// Site Components
import Nav from './components/Nav'
import Main from './components/Main';
import HeroCardsDisplay from './components/HeroCardsDisplay'
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound'
import MissingHero from './components/MissingHero'

const nameConvert = (name) => {
  // Convert typed name to Capitalized word
  let hero = name.split(' ')

  let heroName = hero.map(firstAndLast => {
    return firstAndLast[0].toUpperCase() + firstAndLast.slice(1).toLowerCase();
  }).join(' ');

  return heroName
}


const App = () => {
  // Navigate Hook to Change Page
  const navigate = useNavigate()
  // Hook to fetch API data
  const { isLoading, data, error } = useFetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
  // State to store User Super Hero query
  const [query, setQuery] = useState('')
  // State to store User searched hero / clicked hero
  const [hero, setHero] = useState('')


  // function to send search to api
  const search = (evt) => {
    // Search once 'Enter' key is hit
    if (evt.key == 'Enter') {
      try {
        let heroName = nameConvert(evt.target.value)
        let heroStats = data.filter(heroData => heroData.name === heroName);

        // If a Hero is found
        if (heroStats.length > 0) {
          setHero(heroStats);
          let heroNameUrl = heroName.split(' ').join('')
          navigate(`/hero/${heroNameUrl}`)
          // Else no Hero by that name
        } else {
          setHero('');
          navigate('/missing')
      
        }
        // Catch any errors
      } catch (err) {
          console.log(err)
      };
    }
  }

  return (
    <>
      <Nav query={query} setQuery={setQuery} search={search} />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Main />} />
        <Route path='/missing' element={<MissingHero />} />
        <Route path="/hero/:hero" element={<HeroCardsDisplay hero={hero} setHero={setHero} />} />
        <Route path="/hero/details/:hero" element={<HeroDetails hero={hero} />} />
      </Routes>
    </>
  );
}


export default App