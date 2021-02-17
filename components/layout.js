import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "../components/header";

export default function Layout({ children }) {
  return (
    <Box>
      <Meta />
      <Header />
      <Box>
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
