import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs'

function PlatformSelector() {

    const {data ,error} = usePlatforms()
    if(error) return null

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                platforms
            </MenuButton>
            <MenuList>
                {data.map(paltform => (
                    <MenuItem key={paltform.id}>{paltform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector