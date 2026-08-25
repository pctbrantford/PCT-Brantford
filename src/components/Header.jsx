import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/logo.avif";
import { businessInfo } from "../constants";

const navy = "#07111f";
const mint = "#25c7a7";

const buttonStyle = {
  bg: mint,
  color: "#062018",
  borderRadius: "12px",
  fontWeight: "700",
  transition: "all 0.3s cubic-bezier(0.2, 0, 0.2, 1)",
  animation: "subtleGlow 3.5s ease-in-out infinite",
  _hover: {
    transform: "translateY(-2px) scale(1.02)",
    boxShadow: "0 12px 28px rgba(37,199,167,.42)",
    "& span": {
      transform: "translateX(4px)",
    },
  },
  _active: {
    transform: "translateY(0px) scale(0.98)",
  },
  "& span": {
    display: "inline-block",
    transition: "transform 0.25s ease",
  },
};

export function Brand({ bg = false }) {
  return (
    <HStack gap="11px">
      <Box
        justifyContent="center"
        alignItems="center"
        bg={bg ? "whiteAlpha.100" : "none"}
        borderRadius={bg ? "8px" : "none"}
        paddingX={bg ? "8px" : "none"}
        paddingY={bg ? "4px" : "none"}
      >
        <Image
          src={logo}
          alt="PCT Brantford - Personal Computer Terminal"
          w="140px"
          h="44px"
          objectFit="contain"
        />
        <Text display="block" color="#78879a" fontSize="11px">
          {businessInfo.serviceLabel}
        </Text>
      </Box>
    </HStack>
  );
}

export function ActionLink({
  children,
  href = "/contact",
  outline = false,
  small = false,
  ...props
}) {
  return (
    <Link
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap="12px"
      px={small ? "15px" : "21px"}
      py={small ? "10px" : "14px"}
      {...(outline
        ? {
            border: "1px solid #476074",
            color: "white",
            borderRadius: "12px",
            transition: "all 0.3s cubic-bezier(0.2, 0, 0.2, 1)",
            _hover: {
              bg: "white",
              color: navy,
              transform: "translateY(-2px)",
              boxShadow: "0 10px 24px rgba(255,255,255,.15)",
              "& span": {
                transform: "translateX(4px)",
              },
            },
            _active: {
              transform: "translateY(0px) scale(0.98)",
            },
            "& span": {
              display: "inline-block",
              transition: "transform 0.25s ease",
            },
          }
        : buttonStyle)}
      {...props}
    >
      {children}
    </Link>
  );
}

const navItems = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/#process", "How It Works"],
  ["/#store", "Store"],
  ["/#faq", "FAQ"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isPathActive = (href) => {
    const [path, hash] = href.split("#");

    // Section links: /#process, /#store, /#faq
    if (hash) {
      return location.pathname === path && location.hash === `#${hash}`;
    }

    // Home
    if (href === "/") {
      return location.pathname === "/" && location.hash === "";
    }

    // Other pages
    return location.pathname === path;
  };

  const handleNavigation = (href) => {
    const [path, hash] = href.split("#");

    // HOME
    if (href === "/") {
      if (location.pathname === "/") {
        navigate("/", { replace: true });

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

    // HOME PAGE SECTION
    if (hash && location.pathname === path) {
      // Update React Router location/hash
      navigate(`/#${hash}`, { replace: true });

      // Wait for the URL/location update, then scroll
      setTimeout(() => {
        const section = document.getElementById(hash);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);

      return;
    }

    // NORMAL PAGE
    if (!hash && location.pathname === path) {
      return;
    }

    navigate(href);
  };
  return (
    <>
      <Box
        bg="#06101d"
        color="#b8c8d9"
        fontSize="13px"
        py={{ base: "7px", sm: "0" }}
      >
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Flex
            minH={{ base: "auto", sm: "35px" }}
            justify="space-between"
            align="center"
            wrap="wrap"
            gap="6px"
          >
            <Text display={{ base: "none", sm: "block" }}>
              Serving Brantford for {businessInfo.yearsServing} years
            </Text>
            <HStack
              gap={{ base: 3, sm: 6 }}
              w={{ base: "100%", sm: "auto" }}
              justify={{ base: "space-between", sm: "flex-end" }}
              fontSize={{ base: "12px", sm: "13px" }}
            >
              <Link
                href={businessInfo.phone.href}
                color="#b8c8d9"
                _hover={{ color: "white" }}
              >
                ☎ {businessInfo.phone.display}
              </Link>
              <Link
                href={businessInfo.email.href}
                color="#b8c8d9"
                _hover={{ color: "white" }}
              >
                ✉ {businessInfo.email.display}
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box
        as="header"
        position="sticky"
        top="0"
        zIndex="50"
        bg="rgba(255,255,255,.96)"
        backdropFilter="blur(16px)"
        borderBottom="1px solid"
        borderColor="#dfe7f0"
      >
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Flex minH="76px" align="center" justify="space-between">
            <Link
              href="/"
              aria-label="PCT Brantford home"
              _hover={{ textDecoration: "none" }}
            >
              <Brand />
            </Link>

            <Button
              display={{ base: "inline-flex", md: "none" }}
              variant="outline"
              w="42px"
              h="42px"
              minW="42px"
              p="0"
              borderRadius="12px"
              borderColor="#d9e3ed"
              bg="#f8fafc"
              color={navy}
              fontSize="20px"
              fontWeight="700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              _hover={{ bg: "#edf2f7", borderColor: "#cbd5e1" }}
              _active={{ bg: "#e2e8f0" }}
            >
              {menuOpen ? "✕" : "☰"}
            </Button>

            <HStack
              display={{ base: "none", md: "flex" }}
              gap="24px"
              fontSize="14px"
              fontWeight="600"
              color="#44546a"
            >
              {navItems.map(([href, label]) => {
                const isActive = isPathActive(href);
                return (
                  <Link
                    href={href}
                    key={href}
                    _hover={{ color: navy, textDecoration: "none" }}
                    color={isActive ? "pct.700" : "#44546a"}
                    fontWeight={isActive ? "700" : "600"}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(href);
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
              <ActionLink href="/contact" small>
                Book a Repair
              </ActionLink>
            </HStack>
          </Flex>

          {menuOpen && (
            <Box display={{ md: "none" }} pb="20px" pt="4px">
              <VStack
                align="stretch"
                p="16px"
                bg="white"
                border="1px solid"
                borderColor="#dfe7f0"
                borderRadius="20px"
                boxShadow="0 22px 60px rgba(7,17,31,0.12)"
                gap="4px"
              >
                {navItems.map(([href, label]) => {
                  const isActive = isPathActive(href);

                  return (
                    <Link
                      href={href}
                      key={href}
                      py="11px"
                      px="14px"
                      borderRadius="10px"
                      fontSize="15px"
                      fontWeight={isActive ? "700" : "600"}
                      color={isActive ? "pct.700" : navy}
                      bg={isActive ? "#f0fdf9" : "transparent"}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor={isActive ? "pct.500" : "transparent"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(href);
                        closeMenu();
                      }}
                      _hover={{
                        bg: "#f0fdf9",
                        color: "pct.700",
                        textDecoration: "none",
                      }}
                    >
                      <Text as="span">{label}</Text>

                      <Text
                        as="span"
                        color={isActive ? "pct.500" : "#a0aec0"}
                        fontSize="13px"
                      >
                        →
                      </Text>
                    </Link>
                  );
                })}
                <Box
                  pt="12px"
                  mt="6px"
                  borderTop="1px solid"
                  borderColor="#edf2f7"
                >
                  <VStack align="stretch" gap="10px">
                    <ActionLink href="/contact" onClick={closeMenu} w="full">
                      Book a Repair <span>→</span>
                    </ActionLink>
                    <ActionLink
                      href={businessInfo.phone.href}
                      outline
                      onClick={closeMenu}
                      w="full"
                      bg={navy}
                      borderColor={navy}
                      color="white"
                      _hover={{ bg: "#0e1e32", color: "white" }}
                    >
                      ☎ Call {businessInfo.phone.display}
                    </ActionLink>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
