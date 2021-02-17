import { Box } from "@chakra-ui/react";

export default function PostTitle({ children }) {
  return (
    <Box
      mt={4}
      fontSize="3xl"
      fontWeight="medium"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
