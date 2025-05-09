import {FaWindows , FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props{
    platforms : Platform[];
}

function PlatformIconList({platforms}:Props) {

  const iconMap : Record<string,IconType> = {
    pc : FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    nintendo : SiNintendo,
    mac : FaApple,
    linux : FaLinux,
    android:FaAndroid,
    ios : MdPhoneIphone,
    web : BsGlobe
  }

  return (
    <HStack marginTop={"10px"}>
        {platforms.map((platform) => (
          
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
        ))}
    </HStack>
  )
}

export default PlatformIconList