import React from 'react'
import { Game } from '../hooks/useGames'
import { Badge } from '@chakra-ui/react'

interface Props{
    score :number
}


function CriticScore({score}:Props) {

    let color = score > 90 ? "green" : score > 60 ? 'yellow' : 'red'

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={1} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore