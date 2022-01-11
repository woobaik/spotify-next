import {
  Box,
  List,
  ListItem,
  Link,
  LinkBox,
  LinkOverlay,
  Divider,
  ListIcon,
} from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";
import { MdFavoriteBorder, MdAddBox } from "react-icons/md";

const topMenuItems = [
  { name: "Home", route: "/" },
  { name: "Your Music", route: "/library" },
];

const actionMenuItems = [
  { name: "Create Playlist", route: "/", icon: MdAddBox },
  { name: "Liked Song", route: "/favorite", icon: MdFavoriteBorder },
];

const Sidebar = () => {
  return (
    <Box height="calc(100vh - 120px)" bg="black" color="gray" paddingX="10px">
      <Box paddingY="10px">
        <Box height="50px" width="100px">
          <NextImage height="50px" width="150px" src="/logo_white.png" />
        </Box>
        <Divider mb="10px" />
        <Box mb="10px">
          <List spacing={2}>
            {topMenuItems.map(({ name, route }) => (
              <ListItem key={name}>
                <LinkBox _hover={{ color: "white" }}>
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <Link>{name}</Link>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider mb="10px" />
        <Box mb="10px">
          <List spacing={2}>
            {actionMenuItems.map(({ name, route, icon }) => (
              <ListItem key={name}>
                <LinkBox _hover={{ color: "white" }}>
                  <ListIcon as={icon} color="white" />
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <Link>{name}</Link>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
