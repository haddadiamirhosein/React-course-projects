import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'

interface Props{
    onSelectPlatform : (platform:Platform) => void;
    selectedPlatform : Platform | null;
}

function PlatformSelector({onSelectPlatform , selectedPlatform}:Props) {

    const {data ,error} = usePlatforms()
    if(error) return null

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform ? selectedPlatform?.name : "SelectPlatform"}
            </MenuButton>
            <MenuList>
                {data.map(paltform => (
                    <MenuItem onClick={() => onSelectPlatform(paltform)} key={paltform.id}>{paltform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector