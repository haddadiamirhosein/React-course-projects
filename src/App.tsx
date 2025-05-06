import React, { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'

function App() {

  const [SelectedGenre , SetselectedGenre] = useState<Genre | null>(null)

  return (
    <Grid 
      templateAreas={{
        base : `"nav" "main"`,
        lg : `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base:"1fr",
        lg: '200px'
      }}

    >
      
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show  above='lg'>
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={SelectedGenre} onSelectGenre={(genre) => SetselectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid selectedGenre ={SelectedGenre}></GameGrid>
      </GridItem>

    </Grid>
  )
}

export default App

// 8