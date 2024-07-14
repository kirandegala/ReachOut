import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import Logo from '@components/atoms/Logo';
import { useUser } from '@components/UserProvider';

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href="#">
    {children}
  </Box>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userDetails } = useUser();

  // Ensure userDetails is defined before rendering
  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <Box bg={useColorModeValue('gray.500', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/feed">
            <Logo />
          </Link>
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}>
                <Avatar size="sm" src={userDetails.picture} />
              </MenuButton>
              <MenuList alignItems="center">
                <Center>
                  <Avatar size="2xl" src={userDetails.picture} />
                </Center>
                <Center>
                  <Text>{userDetails.name}</Text>
                </Center>
                <MenuDivider />
                <MenuItem>
                  <Link href="/profile">Account Settings</Link>
                </MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
