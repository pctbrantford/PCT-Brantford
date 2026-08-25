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
          {/* Brand */}
          <Box>
            <Link href="/">
              <Brand bg={true} />
            </Link>

            <Text
              color="#8193a6"
              fontSize="12px"
              maxW="300px"
              mt="16px"
              lineHeight="1.7"
            >
              We&apos;re not just a computer repair company — we&apos;re your
              trusted partner in keeping your technology running smoothly.
            </Text>
          </Box>

          {/* Services */}
          <FooterLinks
            title="Services"
            links={[
              ["All Services", "/services"],
              ["Screen Repair", "/services#broken-screen"],
              ["Keyboard Replacement", "/services#keyboard-replacement"],
              ["Spill Recovery", "/services#laptop-spill"],
              ["Hardware Repairs", "/services#hardware-services"],
              ["Virus & Data Recovery", "/services#software-services"],
              ["Motherboard Soldering", "/services#soldering"],
              ["Networking & Wi-Fi", "/services#networking"],
              ["New & Off-Lease PCs", "/services#off-lease"],
            ]}
          />

          {/* Company */}
          <FooterLinks
            title="Company"
            links={[
              ["Home", "/"],
              ["About PCT", "/about"],
              ["How It Works", "/services#how-it-works"],
              ["FAQ", "/services#faq"],
              ["Contact Us", "/contact"],
              ["Terms & Conditions", "/terms-and-conditions"],
              ["Privacy Policy", "/privacy-policy"],
            ]}
          />

          {/* Contact */}
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
              _hover={{
                color: "white",
                textDecoration: "none",
              }}
              fontSize="12px"
            >
              <Text
                as="span"
                display="block"
                color="inherit"
                fontSize="12px"
                lineHeight="1.7"
              >
                {businessInfo.name}
                <br />
                {businessInfo.address.street}
                <br />
                {businessInfo.address.locality}
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box borderTop="1px solid" borderColor="#1b2938" py="18px">
          <HStack
            justify="space-between"
            align="center"
            gap="20px"
            flexWrap="wrap"
            w="100%"
          >
            {/* Copyright */}
            <Text color="#66788b" fontSize="11px">
              © {new Date().getFullYear()} {businessInfo.name}. All rights
              reserved.
            </Text>

            {/* Links + Maple */}
            <HStack
              gap="16px"
              ml={{ base: "0", md: "auto" }}
              justify={{ base: "flex-start", md: "flex-end" }}
              w={{ base: "100%", md: "auto" }}
            >
              <Link
                href="/privacy-policy"
                color="#66788b"
                fontSize="11px"
                _hover={{ color: "white" }}
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                color="#66788b"
                fontSize="11px"
                _hover={{ color: "white" }}
              >
                Terms &amp; Conditions
              </Link>

              <Text fontSize="14px" ml={{ base: "auto", md: "0" }}>
                🍁
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
