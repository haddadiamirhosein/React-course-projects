import React, { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

export interface GameQuery{
  genre : Genre | null;
  paltform : Platform | null;
}

function App() {

const [gamequery , Setgamequery] = useState<GameQuery>({
  genre : null ,
  paltform : null
})

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
          <GenreList selectedGenre={gamequery?.genre} onSelectGenre={(genre) => Setgamequery({...gamequery , genre:genre})}></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector selectedPlatform ={gamequery.paltform} onSelectPlatform={(platform) => Setgamequery({...gamequery , paltform:platform})}/>
        <GameGrid gamequery={gamequery} ></GameGrid>
      </GridItem>

    </Grid>
  )
}

export default App

// 8