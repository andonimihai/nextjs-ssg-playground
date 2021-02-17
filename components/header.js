import Link from "next/link";
import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box textAlign="center" py={8} mb={2} fontWeight="bold" fontSize="2xl">
      <Link href="/">
        <a>Demo SSG blog</a>
      </Link>
    </Box>
  );
}
