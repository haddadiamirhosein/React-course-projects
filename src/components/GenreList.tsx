import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useData';
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre : (genre:Genre) => void;
  selectedGenre : Genre | null;
}

function GenreList({onSelectGenre , selectedGenre}:Props) {
  const {data , error ,isloading} = useGenres();

  if (error) return null;
  if (isloading) return <Spinner/>


  return (
    <>
        <List>
            {data.map(genre => 
              <ListItem key={genre.id} padding={1}>
                <HStack>
                  <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                  <Button fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}  onClick={() => onSelectGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
                </HStack>

              </ListItem>
            )}
        </List>
    </>
  )
}

export default GenreList