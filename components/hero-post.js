import Link from "next/link";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Date from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({ title, coverImage, date, excerpt, slug }) {
  return (
    <Flex
      borderRadius="md"
      border="1px solid #CBD5E0"
      boxShadow="md"
      overflow="hidden"
    >
      <Box width={{ base: "100%", md: "60%" }} p={{ base: "2", md: "10" }}>
        <Text fontSize="2xl" fontWeight="bold">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: excerpt }} my="4" />
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">
            <Date dateString={date} />
          </Text>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Button
              as="a"
              variant="outline"
              colorScheme="black"
              cursor="pointer"
            >
              Read more
            </Button>
          </Link>
        </Flex>
      </Box>

      {coverImage && (
        <Box width={{ base: "100%", md: "40%" }}>
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      )}
    </Flex>
  );
}
