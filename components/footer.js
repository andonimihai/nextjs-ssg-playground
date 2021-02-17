import Container from "./container";
import { EXAMPLE_URL } from "../lib/constants";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Box borderTop="1px solid #E2E8F0" mt={10}>
        <Container>
          <Box textAlign="center" py="4" px="8">
            <Text fontWeight="medium" fontSize="xl" mb="2">
              Statically Generated with Next.js.
            </Text>
            <Flex justifyContent="center">
              <Link href="https://nextjs.org/docs/basic-features/pages" mr={4}>
                Read Documentation
              </Link>
              <Link href={EXAMPLE_URL}>View on GitHub</Link>
            </Flex>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
