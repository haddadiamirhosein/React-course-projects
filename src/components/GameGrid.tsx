import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props{
  gamequery : GameQuery;
}

function GameGrid({gamequery}:Props) {
    
  const {data , error , isloading} = useGames(gamequery)
  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5 }} padding="10px" spacing={3}>

      {isloading && skeletons.map(item => (

        <GameCardContainer key={item}>
          <GameCardSkeleton />
        </GameCardContainer> 

      ))}

      {data.map(game => (
        <GameCardContainer  key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}


    </SimpleGrid>
    </>
  )
}

export default GameGrid