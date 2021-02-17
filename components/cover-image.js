import { useEffect, useState } from "react";
import { Spinner, Image, Flex } from "@chakra-ui/react";
import { getMedia } from "../lib/api";

export default function CoverImage({ title, coverImage, slug, ...rest }) {
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMedia(coverImage)
      .then((media) => {
        setImage(media);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [coverImage]);

  if (isLoading) {
    return (
      <Flex minH={200} width="100%" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  if (image) {
    return (
      <Image src={image.media_details.sizes.medium.source_url} {...rest} />
    );
  }

  return null;
}
