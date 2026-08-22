import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Brand } from "./Header";
import { businessInfo } from "../constants";

function FooterLinks({ title, links }) {
  return (
    <VStack align="start" gap="9px">
      <Text fontFamily="heading" fontWeight="600" color="white">
        {title}
      </Text>
      {links.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          color="#8193a6"
          _hover={{ color: "white" }}
          fontSize="12px"
        >
          {label}
        </Link>
      ))}
    </VStack>
  );
}

export default function Footer() {
  return (
    <Box as="footer" bg="#050d16" color="#d8e2ec" pt="70px">
      <Container maxW="1160px" px={{ base: 4, md: 5 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="40px" pb="55px">
          <Box>
            <Link href="/">
              <Brand bg={true} />
            </Link>
            <Text color="#8193a6" fontSize="12px" maxW="300px" mt="16px">
              We&apos;re not just a computer repair company — we&apos;re your
              trusted partner in bringing your computers back to life.
            </Text>
          </Box>
          <FooterLinks
            title="Services"
            links={[
              ["All Services", "/services"],
              ["Screen Repair", "/services#broken-screen"],
              ["Keyboard Replacement", "/services#keyboard-replacement"],
              ["Spill Recovery", "/services#laptop-spill"],
              ["Data Recovery", "/services#software-services"],
              ["Hardware Repairs", "/services#hardware-services"],
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              ["Home", "/"],
              ["About PCT", "/about"],
              ["How It Works", "/#process"],
              ["Store & Off-Lease", "/#store"],
              ["FAQ", "/#faq"],
              ["Contact Us", "#contact"],
            ]}
          />
          <VStack align="start" gap="9px">
            <Text fontFamily="heading" fontWeight="600" color="white">
              Contact
            </Text>
            <Link
              href={businessInfo.phone.href}
              color="#8193a6"
              _hover={{ color: "white" }}
              fontSize="12px"
            >
              {businessInfo.phone.display}
            </Link>
            <Link
              href={businessInfo.email.href}
              color="#8193a6"
              _hover={{ color: "white" }}
              fontSize="12px"
            >
              {businessInfo.email.display}
            </Link>
            <Link
              href={businessInfo.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              color="#8193a6"
              _hover={{ color: "white", textDecoration: "none" }}
              fontSize="12px"
            >
              <Text as="span" display="block" color="inherit" fontSize="12px">
                {businessInfo.name}
                <br />
                {businessInfo.address.street}
                <br />
                {businessInfo.address.locality}
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>
       <Box
  borderTop="1px solid"
  borderColor="#1b2938"
  py="18px"
>
  <HStack justify="space-between">
    <Text
      color="#66788b"
      fontSize="11px"
    >
      © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
    </Text>

    <Text fontSize="14px">
      🍁
    </Text>
  </HStack>
</Box>
      </Container>
    </Box>
  );
}
