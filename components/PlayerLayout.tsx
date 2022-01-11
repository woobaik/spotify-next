import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const playerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top={0}
        height="100vh"
        width={240}
        border="1px solid black"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" bottom={0} left={0}>
        Player
      </Box>
    </Box>
  );
};

export default playerLayout;
