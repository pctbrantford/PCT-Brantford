import { useState, useEffect } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import innerShopImage from "../../assets/pct_internal_view_of_store.avif";
import heroImage from "../../assets/home_page.avif";
import { businessInfo } from "../constants";
import serviceImage from "../../assets/services.avif";
import greatestTechnicianEverLivedImage from "../../assets/greatest_technician_ever_lived.avif";

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
  href = "#contact",
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

const shopImages = [heroImage, serviceImage, greatestTechnicianEverLivedImage];

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Box
      position="relative"
      w="100%"
      w={{
        base: "100%",
        md: "calc(100% - 40px)",
        lg: "calc(100% - 80px)",
      }}
      mx="auto"
      my={"16px"}
    >
      {/* Main image */}
      <Box
        position="relative"
        h={{
          base: "300px",
          sm: "360px",
          md: "430px",
          lg: "480px",
        }}
        borderRadius={{
          base: "22px",
          md: "28px",
        }}
        overflow="hidden"
        bg="#e8eef3"
        boxShadow="0 25px 70px rgba(20,45,70,.18)"
        userSelect="none"
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`PCT Brantford ${index + 1}`}
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            objectFit="cover"
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 0.8s ease-in-out"
          />
        ))}

        {/* Gradient */}
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(
      180deg,
      rgba(5,13,22,.05) 45%,
      rgba(5,13,22,.45) 100%
    )"
          pointerEvents="none"
        />

        {/* Counter */}
        <Flex
          position="absolute"
          top="16px"
          right="16px"
          px="11px"
          py="6px"
          borderRadius="full"
          bg="rgba(5,13,22,.65)"
          backdropFilter="blur(10px)"
          color="white"
          fontSize="11px"
          fontWeight="600"
        >
          {currentIndex + 1} / {images.length}
        </Flex>

        {/* Previous */}
        <IconButton
          aria-label="Previous image"
          position="absolute"
          left={{ base: "12px", md: "18px" }}
          top="50%"
          transform="translateY(-50%)"
          w={{ base: "40px", md: "46px" }}
          h={{ base: "40px", md: "46px" }}
          minW="0"
          borderRadius="full"
          bg="rgba(255,255,255,.92)"
          color={navy}
          fontSize="20px"
          boxShadow="0 8px 25px rgba(0,0,0,.18)"
          onClick={previousImage}
          _hover={{
            bg: "white",
            transform: "translateY(-50%) scale(1.08)",
          }}
        >
          ←
        </IconButton>

        {/* Next */}
        <IconButton
          aria-label="Next image"
          position="absolute"
          right={{ base: "12px", md: "18px" }}
          top="50%"
          transform="translateY(-50%)"
          w={{ base: "40px", md: "46px" }}
          h={{ base: "40px", md: "46px" }}
          minW="0"
          borderRadius="full"
          bg="rgba(255,255,255,.92)"
          color={navy}
          fontSize="20px"
          boxShadow="0 8px 25px rgba(0,0,0,.18)"
          onClick={nextImage}
          _hover={{
            bg: "white",
            transform: "translateY(-50%) scale(1.08)",
          }}
        >
          →
        </IconButton>

        {/* Mobile dots */}
        <HStack
          position="absolute"
          bottom="16px"
          left="50%"
          transform="translateX(-50%)"
          gap="6px"
          display={{ base: "flex", md: "none" }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              as="button"
              aria-label={`View image ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              w={index === currentIndex ? "22px" : "7px"}
              h="7px"
              borderRadius="full"
              bg={index === currentIndex ? "white" : "rgba(255,255,255,.55)"}
              transition="all .25s ease"
            />
          ))}
        </HStack>
      </Box>
      {/* Desktop thumbnails */}
      <Flex
        mt="14px"
        gap="10px"
        overflowX="auto"
        pb="4px"
        display={{ base: "none", md: "flex" }}
        css={{
          "&::-webkit-scrollbar": {
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#c8d3de",
            borderRadius: "10px",
          },
        }}
      >
        {images.map((image, index) => (
          <Box
            key={image}
            flex="0 0 auto"
            w="82px"
            h="62px"
            borderRadius="12px"
            overflow="hidden"
            cursor="pointer"
            border="2px solid"
            borderColor={index === currentIndex ? "pct.500" : "transparent"}
            opacity={index === currentIndex ? 1 : 0.65}
            transition="all .2s ease"
            onClick={() => setCurrentIndex(index)}
            _hover={{
              opacity: 1,
              transform: "translateY(-2px)",
            }}
          >
            <Image
              src={image}
              alt={`PCT gallery thumbnail ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        as="section"
        bgImage="radial-gradient(circle at 65% 10%,rgba(37,199,167,.18),transparent 25%),linear-gradient(120deg,#07111f,#0c1a2d)"
        color="white"
        py={{ base: "60px", md: "84px" }}
      >
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box maxW="820px">
            <HStack gap="8px" mb="14px" fontSize="13px" color="#8ea1b2">
              <Link href="/" _hover={{ color: "pct.400" }}>
                Home
              </Link>
              <Text>/</Text>
              <Text color="pct.400" fontWeight="600">
                About Us
              </Text>
            </HStack>

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
              Local Heritage &amp; Community Tech Partner
            </Eyebrow>

            <Heading
              as="h1"
              fontSize={{ base: "40px", md: "56px", lg: "64px" }}
              letterSpacing="-.05em"
              lineHeight="1.05"
              my="18px"
            >
              We&apos;re not just a repair shop.
              <br />
              <Box as="span" color="pct.500">
                We&apos;re your local technology partner.
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "16px", md: "19px" }}
              color="#b7c6d7"
              maxW="680px"
            >
              Founded in 1992 in Brantford, Personal Computer Terminal has
              helped thousands of individuals, students, families, and
              businesses keep their computers running fast, secure, and
              reliable.
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="14px"
              mt="32px"
            >
              <ActionLink href="#contact">
                Talk to PCT <span>→</span>
              </ActionLink>
              <ActionLink href={businessInfo.phone.href} outline>
                Call {businessInfo.phone.display}
              </ActionLink>
            </Stack>
          </Box>
        </Container>
      </Box>

      <ImageCarousel images={shopImages} />

      {/* Key Numbers Banner */}
      <Box bg="#eaf9f6" py={{ base: "36px", md: "44px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap="24px">
            {[
              [
                "30+",
                "Years in Brantford",
                "Serving the local community since 1992",
              ],
              [
                "15,000+",
                "Devices Repaired",
                "Laptops, desktops & custom workstations",
              ],
              [
                "4.8 ★",
                "Google Rating",
                "Trusted, highly-rated customer support",
              ],
              ["100%", "In-House Diagnostics", "Direct hands-on bench service"],
            ].map(([stat, title, sub]) => (
              <Box key={title}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "32px", md: "40px" }}
                  fontWeight="800"
                  color="pct.700"
                  lineHeight="1.1"
                >
                  {stat}
                </Text>
                <Text fontSize="14px" fontWeight="700" color={navy} mt="4px">
                  {title}
                </Text>
                <Text fontSize="12px" color="#64748b" mt="2px">
                  {sub}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Main Story & Shop Overview */}
      <Box as="section" py={{ base: "72px", md: "100px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.05fr .95fr" }}
            gap={{ base: "44px", lg: "80px" }}
            alignItems="center"
          >
            <Box>
              <Eyebrow>Our History &amp; Philosophy</Eyebrow>
              <Heading
                fontSize={{ base: "34px", md: "46px" }}
                letterSpacing="-.04em"
                lineHeight="1.1"
                mt="10px"
                mb="20px"
              >
                A local shop built on honest advice and real human support.
              </Heading>

              <Text color="#475569" fontSize="15px" lineHeight="1.75" mb="16px">
                In an era where big-box retail stores push consumers to throw
                away perfectly repairable laptops and purchase expensive new
                machines, <strong>Personal Computer Terminal (PCT)</strong>{" "}
                takes a fundamentally different approach.
              </Text>

              <Text color="#475569" fontSize="15px" lineHeight="1.75" mb="16px">
                We believe that quality technology should be maintained,
                repaired, and upgraded whenever it makes practical and financial
                sense. Our experienced bench technicians handle complex
                component-level repairs — from broken charging DC jacks, cracked
                LCDs, and liquid spill corrosion to power circuit soldering and
                emergency data recovery.
              </Text>

              <Text color="#475569" fontSize="15px" lineHeight="1.75" mb="26px">
                Located right at{" "}
                <strong>340 Henry St, Unit #6 in Brantford</strong>, we take
                immense pride in greeting our neighbors with clear explanations,
                upfront pricing, and zero confusing technical jargon.
              </Text>

              <HStack gap="14px" wrap="wrap">
                <ActionLink href="/services">
                  Explore Our Services <span>→</span>
                </ActionLink>
                <ActionLink
                  href="#contact"
                  outline
                  borderColor="#94a3b8"
                  color={navy}
                  _hover={{ bg: navy, color: "white" }}
                >
                  Visit Our Workshop
                </ActionLink>
              </HStack>
            </Box>

            {/* Interactive Shop Image with Hover Zoom */}
            <Box
              position="relative"
              h={{ base: "320px", md: "440px", lg: "480px" }}
              borderRadius="28px"
              bg="linear-gradient(145deg,#dce7f0,#f8fafc)"
              overflow="hidden"
              boxShadow="0 25px 60px rgba(20,45,70,.16)"
              role="group"
              cursor="pointer"
            >
              <Image
                src={innerShopImage}
                alt="PCT Brantford internal view of store workshop"
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                _hover={{ transform: "scale(1.08)" }}
                _groupHover={{ transform: "scale(1.08)" }}
              />

              <Box
                position="absolute"
                inset="0"
                bg="rgba(7,17,31,0.22)"
                pointerEvents="none"
                transition="background-color 0.4s ease"
                _groupHover={{ bg: "rgba(7,17,31,0.12)" }}
              />

              <Box
                position="absolute"
                bottom="24px"
                left="24px"
                right="24px"
                p="16px 20px"
                bg="rgba(7,17,31,0.85)"
                backdropFilter="blur(10px)"
                borderRadius="16px"
                border="1px solid rgba(255,255,255,0.15)"
                color="white"
                pointerEvents="none"
              >
                <Text fontWeight="700" fontSize="14px">
                  Personal Computer Terminal Workshop
                </Text>
                <Text fontSize="12px" color="#94a3b8" mt="2px">
                  340 Henry St Unit #6, Brantford, ON • Fully Equipped
                  Diagnostic Bench
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box
        as="section"
        bg={navy}
        color="white"
        py={{ base: "72px", md: "100px" }}
      >
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box maxW="680px" mb={{ base: "36px", md: "52px" }}>
            <Eyebrow light>Our Core Pillars</Eyebrow>
            <Heading
              fontSize={{ base: "34px", md: "46px" }}
              letterSpacing="-.045em"
              mt="10px"
              color="white"
            >
              The standards we stand behind every day.
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="24px">
            {[
              {
                icon: "🤝",
                title: "Plain English, No Jargon",
                desc: "We explain exactly what went wrong and what your options are in clear, practical terms. No confusing sales talk or scare tactics.",
              },
              {
                icon: "🔍",
                title: "Transparent Diagnosis & Upfront Quotes",
                desc: "You will always receive a clear breakdown of parts and labour before any repair begins. You decide whether to proceed.",
              },
              {
                icon: "🛡️",
                title: "Reliable Quality & Warrantied Parts",
                desc: "We only use high-grade, model-matched parts that pass our quality standards, backed by our hands-on service guarantee.",
              },
              {
                icon: "⚡",
                title: "Fast Local Turnaround",
                desc: "Because repairs are completed directly in our Brantford workshop, we minimize wait times so you can get back to work or gaming.",
              },
              {
                icon: "🌱",
                title: "Sustainable & Repair-First",
                desc: "We focus on repairing existing hardware and upgrading speed with SSDs and memory, saving you money and reducing e-waste.",
              },
              {
                icon: "🏢",
                title: "Dedicated Local Partner",
                desc: "For more than 30 years, we have built relationships across Brantford, Paris, and Brant County that span generations.",
              },
            ].map((pillar) => (
              <Box
                key={pillar.title}
                p="28px"
                bg="#0b1a2d"
                borderRadius="20px"
                border="1px solid"
                borderColor="#182c42"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "pct.500",
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.3)",
                }}
              >
                <Flex
                  w="42px"
                  h="42px"
                  borderRadius="12px"
                  bg="rgba(37,199,167,0.14)"
                  color="pct.500"
                  align="center"
                  justify="center"
                  fontSize="22px"
                  mb="16px"
                >
                  {pillar.icon}
                </Flex>
                <Heading fontSize="18px" color="white" mb="8px">
                  {pillar.title}
                </Heading>
                <Text color="#9ab0c4" fontSize="13px" lineHeight="1.65">
                  {pillar.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Who We Serve Section */}
      <Box as="section" py={{ base: "72px", md: "100px" }} bg="#f7f9fc">
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box
            textAlign="center"
            maxW="650px"
            mx="auto"
            mb={{ base: "36px", md: "52px" }}
          >
            <Eyebrow>Who We Help</Eyebrow>
            <Heading fontSize={{ base: "32px", md: "44px" }} mt="8px">
              Solutions tailored for every tech user
            </Heading>
            <Text color="#607086" fontSize="15px" mt="10px">
              Whether you need one family laptop cleaned or 20 office
              workstations configured, PCT has the tools and expertise.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="20px">
            {[
              {
                title: "Home Users & Families",
                desc: "Slow laptops, broken screens, virus infections, printer setup, Wi-Fi troubleshooting, and photo backups.",
                tag: "Everyday Support",
              },
              {
                title: "Students & Creators",
                desc: "Fast emergency repairs, keyboard replacements, battery refreshes, and video/design performance tuning.",
                tag: "Speed & Reliability",
              },
              {
                title: "Gamers & Enthusiasts",
                desc: "Custom high-FPS gaming builds, GPU installations, liquid cooling, thermal repasting, and overclock tuning.",
                tag: "Peak Performance",
              },
              {
                title: "Businesses & Offices",
                desc: "Workstation maintenance, business network security, data migration, off-lease quantity purchases, and IT support.",
                tag: "Commercial IT",
              },
            ].map((group) => (
              <Box
                key={group.title}
                p="26px"
                bg="white"
                borderRadius="20px"
                border="1px solid"
                borderColor="#dfe7f0"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Text
                    fontSize="11px"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing=".12em"
                    color="pct.700"
                    mb="8px"
                  >
                    {group.tag}
                  </Text>
                  <Heading fontSize="18px" color={navy} mb="10px">
                    {group.title}
                  </Heading>
                  <Text color="#64748b" fontSize="13px" lineHeight="1.65">
                    {group.desc}
                  </Text>
                </Box>
                <Link
                  href="#contact"
                  mt="18px"
                  fontSize="13px"
                  fontWeight="700"
                  color="pct.700"
                  _hover={{ textDecoration: "underline" }}
                >
                  Get help →
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Workshop Location & Contact Form */}
      <Box
        as="section"
        id="contact"
        bg={navy}
        color="white"
        py={{ base: "72px", md: "100px" }}
      >
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: ".85fr 1.15fr" }}
            gap={{ base: "44px", lg: "90px" }}
          >
            <Box>
              <Eyebrow light>Visit or Contact Us</Eyebrow>
              <Heading
                fontSize={{ base: "38px", md: "52px" }}
                letterSpacing="-.05em"
                lineHeight="1.1"
                mt="12px"
                color="white"
              >
                Drop by our Brantford workshop.
              </Heading>
              <Text color="#9eb0c2" mt="15px">
                Have a question or want to confirm drop-off hours? Feel free to
                call our shop or send us a quick note below.
              </Text>
              <VStack align="stretch" gap="13px" mt="32px">
                <ContactDetail
                  icon="☎"
                  label="Call"
                  value={businessInfo.phone.display}
                  href={businessInfo.phone.href}
                />
                <ContactDetail
                  icon="✉"
                  label="Email"
                  value={businessInfo.email.display}
                  href={businessInfo.email.href}
                />
                <ContactDetail
                  icon="⌖"
                  label="Shop Address"
                  value={businessInfo.address.full}
                  href={businessInfo.mapHref}
                />
              </VStack>
            </Box>

            <Box
              as="form"
              onSubmit={submitForm}
              bg="white"
              color={navy}
              p={{ base: "20px", md: "28px" }}
              borderRadius="24px"
            >
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="14px">
                <Field label="First name">
                  <Input name="firstName" required />
                </Field>
                <Field label="Last name">
                  <Input name="lastName" required />
                </Field>
                <Field label="Phone">
                  <Input type="tel" name="phone" required />
                </Field>
                <Field label="Email">
                  <Input type="email" name="email" required />
                </Field>
              </SimpleGrid>

              <Field label="What can we help you with?">
                <Input
                  name="subject"
                  placeholder="Example: Question about diagnostic, laptop upgrade, general inquiry..."
                  required
                />
              </Field>

              <Field label="Message or computer details">
                <Textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your computer model, symptoms, or how we can assist..."
                />
              </Field>

              <Button type="submit" {...buttonStyle} w="full">
                Send Message to PCT <span>→</span>
              </Button>

              {submitted && (
                <Box
                  mt="12px"
                  p="12px"
                  borderRadius="10px"
                  bg="#e6fbf6"
                  color="pct.700"
                  fontSize="13px"
                  fontWeight="600"
                >
                  ✓ Thanks! Your message has been received. Our team will follow
                  up with you shortly.
                </Box>
              )}
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
