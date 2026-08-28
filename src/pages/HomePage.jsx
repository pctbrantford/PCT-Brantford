import SEO from "../components/SEO";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import heroImage from "../../assets/home_page.avif";
import innerShopImage from "../../assets/pct_internal_view_of_store.avif";
import pcImage from "../../assets/pc_bg_image.jpg";
import custom_build_pc from "../../assets/custom_build_pc.jpg";
import ssdImage from "../../assets/ssd_bg_image.jpg";
import AboutCarousel from "../components/AboutCarousel";
import { businessInfo } from "../constants";

const navy = "#07111f";
const mint = "#25c7a7";
const typography = {
  displayLineHeight: "1.15",
  heroLineHeight: "1.02",
  headingLetterSpacing: "-.045em",
  otherSectionLineHeight: "0.95",
};

const services = [
  [
    "▣",
    "Computer & Laptop Repair",
    "No power, display problems, overheating, ports, batteries, hinges and more.",
    "/services#hardware-services",
  ],
  [
    "⌁",
    "Virus & Malware Removal",
    "Clean up malware, spyware and unwanted software and get your system secure again.",
    "/services#software-services",
  ],
  [
    "◈",
    "Data Recovery & Transfer",
    "Recover important files and move your data to a replacement or upgraded machine.",
    "/services#software-services",
  ],
  [
    "↗",
    "PC Upgrades",
    "SSD, hard drive, memory, battery and other upgrades to improve everyday performance.",
    "/services#hardware-services",
  ],
  [
    "◉",
    "Custom Gaming PCs",
    "Custom-built systems designed around your games, budget and performance goals.",
    "/services#software-services",
  ],
  [
    "⌘",
    "Business IT Support",
    "Workstations, networking, troubleshooting and practical technology support for businesses.",
    "/services#software-services",
  ],
];

const products = [
  [
    "#e9eef4",
    "#e9eef4",
    "PC",
    "New & Off-Lease Laptops",
    "Ask about available HP, Lenovo, Dell, Acer and Apple systems.",
    "Check availability",
    pcImage,
  ],
  [
    "linear-gradient(145deg,#0b1727,#273d52)",
    mint,
    "PCT",
    "Custom-Built PCs",
    "Gaming and workstation systems configured around your needs and budget.",
    "Request a build",
    custom_build_pc,
  ],
  [
    "linear-gradient(145deg,#e6fbf6,#c7e9e1)",
    "white",
    "SSD",
    "Parts & Upgrades",
    "Improve an existing computer with storage, memory and other compatible upgrades.",
    "Ask about an upgrade",
    ssdImage,
  ],
];

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

function Eyebrow({ children, light = false }) {
  return (
    <Text
      textTransform="uppercase"
      letterSpacing=".16em"
      fontSize="11px"
      fontWeight="800"
      color={light ? "pct.400" : "#607086"}
    >
      {children}
    </Text>
  );
}

function ActionLink({
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

function SectionHeading({ eyebrow, title, copy, dark = false, lineHeight }) {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap="24px"
      alignItems="start"
      mb={{ base: "36px", md: "48px" }}
    >
      <Box>
        <Eyebrow light={dark}>{eyebrow}</Eyebrow>
        <Heading
          fontSize={{ base: "40px", md: "52px" }}
          letterSpacing={typography.headingLetterSpacing}
          lineHeight={lineHeight}
          mt="12px"
          color={dark ? "white" : navy}
        >
          {title}
        </Heading>
      </Box>
      <Text color={dark ? "#9eb0c2" : "#607086"} maxW="520px">
        {copy}
      </Text>
    </Grid>
  );
}

function FloatingCard({ icon, title, note, ...position }) {
  return (
    <HStack
      position="absolute"
      zIndex="2"
      {...position}
      p={{ base: "10px 11px", lg: "13px 16px" }}
      border="1px solid rgba(255,255,255,.2)"
      borderRadius="14px"
      bg="rgba(7,17,31,.78)"
      backdropFilter="blur(10px)"
      boxShadow="0 14px 30px rgba(0,0,0,.22)"
    >
      <Flex
        w="29px"
        h="29px"
        borderRadius="9px"
        bg="rgba(37,199,167,.18)"
        color="#7cf2d9"
        align="center"
        justify="center"
        fontWeight="800"
      >
        {icon}
      </Flex>
      <Box>
        <Text color="white" fontSize="12px" fontWeight="700" lineHeight="1.25">
          {title}
        </Text>
        <Text color="#afc1d1" fontSize="10px" lineHeight="1.25">
          {note}
        </Text>
      </Box>
    </HStack>
  );
}

function Field({ label, children }) {
  return (
    <Box mb="14px">
      <Text as="label" display="block" fontSize="12px" fontWeight="700">
        {label}
        {children}
      </Text>
    </Box>
  );
}

function ContactDetail({ icon, label, value, href }) {
  return (
    <Link
      href={href}
      color="white"
      _hover={{ color: "pct.400", textDecoration: "none" }}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <HStack gap="14px">
        <Flex
          w="40px"
          h="40px"
          flexShrink="0"
          borderRadius="11px"
          bg="#102436"
          color="pct.500"
          align="center"
          justify="center"
        >
          {icon}
        </Flex>
        <Box>
          <Text
            color="#7f93a7"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing=".12em"
          >
            {label}
          </Text>
          <Text fontSize="13px" fontWeight="700" color="white">
            {value}
          </Text>
        </Box>
      </HStack>
    </Link>
  );
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerRepairService",
    name: "Personal Computer Terminal",
    alternateName: "PCT Brantford",
    url: "https://pctbrantford.com/",
    telephone: "+15197521544",
    email: "info@pctbrantford.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "340 Henry St Unit 6",
      addressLocality: "Brantford",
      addressRegion: "ON",
      postalCode: "N3S 7V9",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: "Brantford",
    },
  };

  return (
    <>

          {/* SEO Section */}
        <SEO
          title="Computer Repair Brantford | Laptop Repair & IT Services | PCT"
          description="Personal Computer Terminal provides computer and laptop repair, data recovery, hardware upgrades, motherboard soldering, networking and IT services in Brantford, Ontario."
          canonical="/"
          schema={businessSchema}
        />

      <Box as="main" id="home">
    
        {/* Hero Section */}
        <Box
          as="section"
          bgImage="radial-gradient(circle at 65% 10%,rgba(37,199,167,.18),transparent 25%),linear-gradient(120deg,#07111f,#0c1a2d)"
          color="white"
          overflow="hidden"
        >
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1.02fr .98fr" }}
              gap={{ base: "38px", lg: "60px" }}
              alignItems="center"
              minH={{ lg: "650px" }}
              py={{ base: "72px", lg: "75px" }}
            >
              <Box>
                <Eyebrow light>
                  <Box
                    as="span"
                    display="inline-block"
                    w="7px"
                    h="7px"
                    bg="pct.500"
                    borderRadius="full"
                    mr="8px"
                    boxShadow="0 0 0 6px rgba(37,199,167,.1)"
                  />
                  Local Brantford computer experts
                </Eyebrow>
                <Heading
                  as="h1"
                  fontSize={{ base: "50px", md: "64px", xl: "76px" }}
                  letterSpacing="-.055em"
                  lineHeight={typography.heroLineHeight}
                  my="18px"
                >
                  Computer problems?
                  <br />
                  <Box as="span" color="pct.500">
                    We fix that.
                  </Box>
                </Heading>
                <Text fontSize="18px" color="#b7c6d7" maxW="610px">
                  Reliable computer repair, laptop repair, upgrades, data
                  recovery and custom PC services — backed by 30+ years of local
                  experience.
                </Text>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  gap="12px"
                  my="28px"
                >
                  <ActionLink>
                    Repair Inquiry <span>→</span>
                  </ActionLink>
                  <ActionLink href={businessInfo.phone.href} outline>
                    Call {businessInfo.phone.display}
                  </ActionLink>
                </Stack>
                <HStack gap={{ base: 4, md: 7 }}>
                  <VStack align="start" gap="0">
                    <Text fontFamily="heading" fontSize="21px" fontWeight="700">
                      30+
                    </Text>
                    <Text fontSize="11px" color="#8192a5">
                      Years serving Brantford
                    </Text>
                  </VStack>
                  <VStack align="start" gap="0">
                    <Text fontFamily="heading" fontSize="21px" fontWeight="700">
                      ✓
                    </Text>
                    <Text fontSize="11px" color="#8192a5">
                      Local &amp; experienced
                    </Text>
                  </VStack>
                  <VStack align="start" gap="0">
                    <Text fontFamily="heading" fontSize="21px" fontWeight="700">
                      ↗
                    </Text>
                    <Text fontSize="11px" color="#8192a5">
                      Fast turnaround
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <Box
                position="relative"
                h={{ base: "290px", md: "420px", lg: "460px" }}
                w={{
                  base: "calc(100% - 18px)",
                  md: "calc(100% - 35px)",
                  lg: "100%",
                }}
                mx="auto"
                role="group"
                cursor="pointer"
              >
                <Box
                  w="full"
                  h="full"
                  borderRadius="28px"
                  overflow="hidden"
                  boxShadow="0 32px 80px rgba(0,0,0,.32)"
                  position="relative"
                >
                  <Image
                    src={heroImage}
                    alt="Technician repairing an open laptop at a workbench"
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                    _hover={{ transform: "scale(1.08)" }}
                    _groupHover={{ transform: "scale(1.08)" }}
                    loading="eager"
                  />
                  <Box
                    position="absolute"
                    inset="0"
                    borderRadius="28px"
                    bg="linear-gradient(125deg,rgba(4,13,24,.22),transparent 55%)"
                    pointerEvents="none"
                  />
                </Box>
                <FloatingCard
                  top={{ base: "14px", lg: "28px" }}
                  left={{ base: "-9px", lg: "-28px" }}
                  icon="✓"
                  title="Clear diagnosis"
                  note="Before any work starts"
                />
                <FloatingCard
                  bottom={{ base: "14px", lg: "28px" }}
                  right={{ base: "-9px", lg: "-22px" }}
                  icon="⌁"
                  title="Local repair shop"
                  note="Hardware + software"
                />
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Common Problems Bar */}
        <Box as="section" bg="#eaf9f6" py={{ base: "48px", md: "54px" }}>
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align={{ base: "start", lg: "center" }}
              justify="space-between"
              gap="24px"
            >
              <Box>
                <Eyebrow>Having one of these problems?</Eyebrow>
                <Heading
                  fontSize={{ base: "30px", md: "38px" }}
                  mt="8px"
                  lineHeight={0.95}
                >
                  Bring it in. We&apos;ll take a look.
                </Heading>
              </Box>
              <Flex gap="9px" wrap="wrap">
                {[
                  "Won't turn on",
                  "Running slow",
                  "Broken screen",
                  "Virus / malware",
                  "Data loss",
                  "Wi-Fi issues",
                ].map((problem) => (
                  <Box
                    key={problem}
                    px="12px"
                    py="7px"
                    bg="white"
                    borderRadius="full"
                    fontSize="12px"
                    fontWeight="600"
                  >
                    {problem}
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Services Grid */}
        <Box as="section" id="services" py={{ base: "72px", md: "100px" }}>
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <SectionHeading
              eyebrow="What we do"
              title="Repair, upgrade, recover."
              copy="From everyday laptop problems to custom gaming systems, PCT handles hardware and software issues for home users and businesses."
              lineHeight={0.95}
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="18px">
              {services.map(([icon, title, copy, href], index) => (
                <Box
                  key={title}
                  p="28px"
                  bg={index === 0 ? navy : "white"}
                  color={index === 0 ? "white" : navy}
                  borderRadius="22px"
                  border="1px solid"
                  borderColor={index === 0 ? navy : "#dfe7f0"}
                  minH="255px"
                >
                  <Flex justify="space-between">
                    <Box
                      w="43px"
                      h="43px"
                      display="grid"
                      placeItems="center"
                      borderRadius="12px"
                      bg={index === 0 ? "rgba(37,199,167,.15)" : "#e6fbf6"}
                      color="pct.700"
                      fontSize="21px"
                    >
                      {icon}
                    </Box>
                    <Text
                      color={index === 0 ? "#6f8498" : "#a0adba"}
                      fontFamily="heading"
                      fontWeight="700"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                  </Flex>
                  <Heading fontSize="22px" mt="28px">
                    {title}
                  </Heading>
                  <Text
                    color={index === 0 ? "#b7c6d7" : "#607086"}
                    fontSize="13px"
                    mt="9px"
                  >
                    {copy}
                  </Text>
                  <Link
                    href={href}
                    display="inline-block"
                    mt="18px"
                    color={index === 0 ? "pct.400" : "pct.700"}
                    fontSize="13px"
                    fontWeight="700"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Learn more →
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Process Section */}
        <Box
          as="section"
          id="process"
          bg={navy}
          py={{ base: "72px", md: "100px" }}
        >
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <SectionHeading
              dark
              eyebrow="Simple process"
              title="From broken to working."
              copy="No confusing technical jargon. We diagnose the issue, explain your options and let you decide."
              lineHeight={0.95}
            />
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="18px">
              {[
                [
                  "Bring it in",
                  "Drop off your device or contact us to describe the problem.",
                ],
                [
                  "We diagnose",
                  "We identify the likely cause and explain the recommended repair.",
                ],
                [
                  "You approve",
                  "You choose whether to proceed before repair work begins.",
                ],
                [
                  "Pick it up",
                  "We complete the work and get your technology back in action.",
                ],
              ].map(([title, copy], index) => (
                <Box
                  key={title}
                  borderTop="1px solid"
                  borderColor="#294054"
                  pt="20px"
                >
                  <Text color="pct.500" fontFamily="heading" fontWeight="700">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading color="white" fontSize="21px" mt="14px">
                    {title}
                  </Heading>
                  <Text color="#9eb0c2" fontSize="13px" mt="8px">
                    {copy}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          as="section"
          id="about"
          bg="#f7f9fc"
          py={{ base: "72px", md: "100px" }}
        >
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: "44px", lg: "90px" }}
              alignItems="center"
            >
              <AboutCarousel />
              <Box>
                <Eyebrow>Why PCT</Eyebrow>
                <Heading
                  fontSize={{ base: "40px", md: "52px" }}
                  letterSpacing={typography.headingLetterSpacing}
                  lineHeight={0.95}
                  mt="12px"
                >
                  A local shop that speaks human.
                </Heading>
                <Text color="#607086" mt="20px">
                  {businessInfo.name} has served the Brantford community for
                  more than 30 years. The goal is simple: provide reliable,
                  affordable and timely computer repair without making customers
                  feel lost in technical jargon.
                </Text>
                <VStack align="stretch" gap="20px" my="30px">
                  {[
                    [
                      "Experienced technicians",
                      "Hardware and software troubleshooting across a wide range of devices.",
                    ],
                    [
                      "Transparent service",
                      "Clear explanations and repair options before work proceeds.",
                    ],
                    [
                      "Locally operated",
                      "A Brantford business focused on long-term customer relationships.",
                    ],
                  ].map(([title, copy]) => (
                    <HStack key={title} align="start">
                      <Flex
                        flexShrink="0"
                        w="26px"
                        h="26px"
                        bg="#e1f8f3"
                        color="pct.700"
                        borderRadius="full"
                        align="center"
                        justify="center"
                      >
                        ✓
                      </Flex>
                      <Box>
                        <Text fontSize="14px" fontWeight="700">
                          {title}
                        </Text>
                        <Text fontSize="12px" color="#748398">
                          {copy}
                        </Text>
                      </Box>
                    </HStack>
                  ))}
                </VStack>
                <ActionLink>
                  Talk to PCT <span>→</span>
                </ActionLink>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Store Section */}
        <Box as="section" id="store" py={{ base: "72px", md: "100px" }}>
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <SectionHeading
              eyebrow="Shop technology"
              title="Need a replacement or upgrade?"
              copy="PCT also offers computers, laptops and custom systems. Ask about current inventory and quantity pricing."
              lineHeight={0.95}
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="18px">
              {products.map(
                ([background, color, art, title, copy, action, image]) => (
                  <Box
                    key={title}
                    border="1px solid"
                    borderColor="#dfe7f0"
                    borderRadius="22px"
                    overflow="hidden"
                    bg="white"
                    role="group"
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: "pct.500",
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 36px rgba(7,17,31,0.08)",
                    }}
                  >
                    <Flex
                      h="210px"
                      position="relative"
                      overflow="hidden"
                      bg={background}
                      align="center"
                      justify="center"
                    >
                      {image && (
                        <Image
                          src={image}
                          alt={title}
                          position="absolute"
                          inset="0"
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          transition="transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                          _groupHover={{ transform: "scale(1.08)" }}
                          loading="lazy"
                        />
                      )}
                      {image && (
                        <Box
                          position="absolute"
                          inset="0"
                          bg="linear-gradient(180deg, rgba(7,17,31,0.2) 0%, rgba(7,17,31,0.6) 100%)"
                          transition="background 0.3s ease"
                          _groupHover={{ bg: "rgba(7,17,31,0.3)" }}
                        />
                      )}
                      <Text
                        position="relative"
                        zIndex="2"
                        fontFamily="heading"
                        fontWeight="700"
                        fontSize="54px"
                        color={color}
                        textShadow={
                          image ? "0 2px 14px rgba(0,0,0,.6)" : "none"
                        }
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: "scale(1.05)" }}
                      >
                        {art}
                      </Text>
                    </Flex>
                    <Box p="22px">
                      <Heading fontSize="21px">{title}</Heading>
                      <Text color="#607086" fontSize="13px" mt="7px">
                        {copy}
                      </Text>
                      <Link
                        href="/contact"
                        display="inline-block"
                        mt="17px"
                        color="pct.700"
                        fontSize="13px"
                        fontWeight="700"
                        _hover={{ color: navy, textDecoration: "none" }}
                      >
                        {action} →
                      </Link>
                    </Box>
                  </Box>
                ),
              )}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Testimonial Quote */}
        <Box as="section" bg="#eaf9f6" py={{ base: "72px", md: "92px" }}>
          <Container maxW="980px" px={{ base: 4, md: 5 }}>
            <Grid
              templateColumns={{ base: "50px 1fr", md: "120px 1fr" }}
              gap="30px"
              alignItems="center"
            >
              <Text
                fontFamily="heading"
                fontSize={{ base: "70px", md: "130px" }}
                lineHeight="1"
                fontWeight="700"
                color="pct.500"
              >
                “
              </Text>
              <Box>
                <Eyebrow>Our approach</Eyebrow>
                <Text
                  as="blockquote"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize={{ base: "22px", md: "30px" }}
                  lineHeight="1.3"
                  letterSpacing="-.02em"
                  mt="15px"
                >
                  Tech support should feel straightforward: understand the
                  issue, know your options, and get back to work.
                </Text>
                <Text color="#6b7e8f" fontSize="12px" mt="12px">
                  Practical service, explained in plain language.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box as="section" id="faq" py={{ base: "72px", md: "100px" }}>
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: ".8fr 1.2fr" }}
              gap={{ base: "40px", lg: "100px" }}
            >
              <Box>
                <Eyebrow>FAQ</Eyebrow>
                <Heading
                  fontSize={{ base: "40px", md: "50px" }}
                  mt="12px"
                  lineHeight={0.95}
                >
                  Questions before you come in?
                </Heading>
                <Text color="#607086" mt="16px">
                  Here are a few common questions. Replace these with your
                  verified policies and current turnaround information.
                </Text>
                <Link
                  href="/contact"
                  display="inline-block"
                  color="pct.700"
                  fontWeight="700"
                  mt="15px"
                >
                  Still have a question? Contact us →
                </Link>
              </Box>
              <VStack
                align="stretch"
                gap="0"
                borderTop="1px solid"
                borderColor="#dfe7f0"
              >
                {[
                  [
                    "Do I need an appointment?",
                    "Contact PCT before visiting so the team can confirm the best drop-off option for your issue.",
                  ],
                  [
                    "What kinds of computers do you repair?",
                    "PCT works with a wide range of laptops and desktop computers. Contact the shop with your model and issue.",
                  ],
                  [
                    "Can you recover my files?",
                    "Data recovery and data transfer are available. Recovery success depends on the condition of the storage device.",
                  ],
                  [
                    "Can you build a custom gaming PC?",
                    "Yes. Contact PCT with your budget, games or software and performance goals to discuss a configuration.",
                  ],
                ].map(([question, answer], index) => (
                  <Box
                    as="details"
                    key={question}
                    open={index === 0}
                    borderBottom="1px solid"
                    borderColor="#dfe7f0"
                    py="20px"
                  >
                    <Box
                      as="summary"
                      cursor="pointer"
                      fontFamily="heading"
                      fontWeight="600"
                      fontSize="17px"
                    >
                      {question}
                    </Box>
                    <Text color="#607086" fontSize="13px" mt="12px">
                      {answer}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
