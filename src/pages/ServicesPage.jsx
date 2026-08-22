import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  featuredServices,
  hardwareServices,
  softwareServices,
  computerBrands,
} from "../data/servicesData";
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

export default function ServicesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      {/* Services Hero Section */}
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
                Services
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
              Comprehensive Computer & IT Solutions
            </Eyebrow>

            <Heading
              as="h1"
              fontSize={{ base: "42px", md: "58px", lg: "66px" }}
              letterSpacing="-.05em"
              lineHeight="1.05"
              my="18px"
            >
              Professional repair services.
              <br />
              <Box as="span" color="pct.500">
                Done right the first time.
              </Box>
            </Heading>

            <Text fontSize={{ base: "16px", md: "19px" }} color="#b7c6d7" maxW="680px">
              From broken screens and liquid spills to complex component-level board repairs and data recovery — Personal Computer Terminal has provided dependable technology service in Brantford for 30+ years.
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="14px"
              mt="32px"
            >
              <ActionLink href="#contact">
                Book a Repair <span>→</span>
              </ActionLink>
              <ActionLink href={businessInfo.phone.href} outline>
                Call {businessInfo.phone.display}
              </ActionLink>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Quick Problem Selector Banner */}
      <Box bg="#eaf9f6" py={{ base: "32px", md: "38px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "start", lg: "center" }}
            justify="space-between"
            gap="18px"
          >
            <Box>
              <Eyebrow>Quick Navigation</Eyebrow>
              <Heading fontSize={{ base: "22px", md: "26px" }} mt="4px">
                What does your computer need help with today?
              </Heading>
            </Box>
            <Flex gap="10px" wrap="wrap">
              {[
                ["#broken-screen", "Broken Screen"],
                ["#keyboard-replacement", "Keyboard Fix"],
                ["#laptop-spill", "Liquid Spill"],
                ["#hardware-services", "Hardware Repairs"],
                ["#software-services", "Virus & Data Recovery"],
                ["#off-lease", "New & Off-Lease PCs"],
              ].map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  px="14px"
                  py="8px"
                  bg="white"
                  borderRadius="full"
                  fontSize="13px"
                  fontWeight="600"
                  color={navy}
                  border="1px solid"
                  borderColor="#d8e8e4"
                  _hover={{
                    bg: navy,
                    color: "white",
                    borderColor: navy,
                    transform: "translateY(-1px)",
                    textDecoration: "none",
                  }}
                  transition="all 0.2s ease"
                >
                  {label}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* In-Depth Featured Specialty Services */}
      <Box as="section" py={{ base: "60px", md: "90px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <VStack gap={{ base: "48px", md: "72px" }} align="stretch">
            {featuredServices.map((service, index) => (
              <Box
                key={service.id}
                id={service.id}
                bg={index % 2 === 1 ? "#f8fafc" : "white"}
                border="1px solid"
                borderColor="#dfe7f0"
                borderRadius="26px"
                p={{ base: "24px", md: "42px" }}
                boxShadow="0 10px 35px rgba(7,17,31,0.04)"
              >
                <Grid
                  templateColumns={{ base: "1fr", lg: "1.15fr .85fr" }}
                  gap={{ base: "32px", lg: "48px" }}
                  alignItems="center"
                >
                  <Box>
                    <HStack gap="10px" mb="12px">
                      <Flex
                        w="36px"
                        h="36px"
                        borderRadius="10px"
                        bg="#e6fbf6"
                        color="pct.700"
                        align="center"
                        justify="center"
                        fontSize="20px"
                      >
                        {service.icon}
                      </Flex>
                      <Text
                        textTransform="uppercase"
                        letterSpacing=".14em"
                        fontSize="11px"
                        fontWeight="800"
                        color="pct.700"
                      >
                        {service.badge}
                      </Text>
                    </HStack>

                    <Heading
                      fontSize={{ base: "28px", md: "36px" }}
                      letterSpacing="-.03em"
                      mb="16px"
                    >
                      {service.title}
                    </Heading>

                    <Text color="#4a5568" fontSize="15px" lineHeight="1.7" mb="14px">
                      {service.description}
                    </Text>

                    <Text color="#607086" fontSize="14px" lineHeight="1.7" mb="24px">
                      {service.details}
                    </Text>

                    <SimpleGrid columns={{ base: 1, sm: 2 }} gap="10px" mb="28px">
                      {service.highlights.map((highlight) => (
                        <HStack key={highlight} align="start" gap="8px">
                          <Text color="pct.500" fontWeight="700">
                            ✓
                          </Text>
                          <Text fontSize="13px" fontWeight="600" color="#334155">
                            {highlight}
                          </Text>
                        </HStack>
                      ))}
                    </SimpleGrid>

                    <HStack gap="12px" wrap="wrap">
                      <Button
                        {...buttonStyle}
                        onClick={() => handleServiceSelect(service.title)}
                        px="20px"
                        py="12px"
                      >
                        Get Help with {service.title.split(" ")[0]} <span>→</span>
                      </Button>
                      <Link
                        href={businessInfo.phone.href}
                        fontSize="14px"
                        fontWeight="700"
                        color="pct.700"
                        px="14px"
                        py="10px"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Call for Instant Quote →
                      </Link>
                    </HStack>
                  </Box>

                  <Box
                    bg={index % 2 === 1 ? "white" : "#07111f"}
                    color={index % 2 === 1 ? navy : "white"}
                    p={{ base: "24px", md: "32px" }}
                    borderRadius="20px"
                    border="1px solid"
                    borderColor={index % 2 === 1 ? "#e2e8f0" : "#1a2c3f"}
                    boxShadow="0 18px 45px rgba(0,0,0,0.12)"
                  >
                    <Text
                      fontFamily="heading"
                      fontSize="18px"
                      fontWeight="700"
                      mb="16px"
                      color={index % 2 === 1 ? navy : "white"}
                    >
                      Why Choose PCT for this Repair:
                    </Text>
                    <VStack align="stretch" gap="14px">
                      {[
                        [
                          "Exact Match Parts",
                          "We source compatible, high-grade components for seamless fit and lasting durability.",
                        ],
                        [
                          "Fast Local Turnaround",
                          "In-house diagnostics and repairs to minimize your downtime.",
                        ],
                        [
                          "Transparent Estimates",
                          "You know all costs and options before any repair proceeds.",
                        ],
                        [
                          "30+ Years Experience",
                          "Proven hands-on repair history serving Brantford and Brant County.",
                        ],
                      ].map(([title, desc]) => (
                        <Box key={title}>
                          <Text
                            fontSize="13px"
                            fontWeight="700"
                            color={index % 2 === 1 ? "pct.700" : "pct.400"}
                          >
                            • {title}
                          </Text>
                          <Text
                            fontSize="12px"
                            color={index % 2 === 1 ? "#64748b" : "#94a3b8"}
                            mt="2px"
                          >
                            {desc}
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                </Grid>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Hardware Repairs Section ("At Affordable Prices") */}
      <Box as="section" id="hardware-services" bg={navy} color="white" py={{ base: "72px", md: "100px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box maxW="700px" mb={{ base: "36px", md: "48px" }}>
            <Eyebrow light>Component Level &amp; Hardware</Eyebrow>
            <Heading
              fontSize={{ base: "36px", md: "48px" }}
              letterSpacing="-.045em"
              mt="10px"
              color="white"
            >
              Hardware repairs at affordable prices.
            </Heading>
            <Text color="#9eb0c2" mt="12px" fontSize="15px">
              From power jacks and faulty chips to hinge rebuilds and thermal maintenance, our bench technicians tackle hardware faults with precision.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="18px">
            {hardwareServices.map((service, index) => (
              <Box
                key={service.name}
                p="24px"
                bg="#0b1a2d"
                borderRadius="18px"
                border="1px solid"
                borderColor="#182c42"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "pct.500",
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.3)",
                }}
              >
                <Flex justify="space-between" align="center" mb="16px">
                  <Flex
                    w="40px"
                    h="40px"
                    borderRadius="11px"
                    bg="rgba(37,199,167,0.14)"
                    color="pct.500"
                    align="center"
                    justify="center"
                    fontSize="18px"
                    fontWeight="700"
                  >
                    {service.icon}
                  </Flex>
                  <Text color="#5f758c" fontSize="12px" fontWeight="700">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                </Flex>
                <Heading fontSize="18px" color="white" mb="8px">
                  {service.name}
                </Heading>
                <Text color="#9ab0c4" fontSize="13px" lineHeight="1.6" mb="16px">
                  {service.desc}
                </Text>
                <Button
                  variant="plain"
                  p="0"
                  color="pct.400"
                  fontSize="13px"
                  fontWeight="700"
                  cursor="pointer"
                  onClick={() => handleServiceSelect(service.name)}
                  _hover={{ color: "white" }}
                >
                  Request Quote →
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Software, Optimization & Security Section ("Fast Turnaround Time") */}
      <Box as="section" id="software-services" py={{ base: "72px", md: "100px" }} bg="#f7f9fc">
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box maxW="700px" mb={{ base: "36px", md: "48px" }}>
            <Eyebrow>Software &amp; System Optimization</Eyebrow>
            <Heading
              fontSize={{ base: "36px", md: "48px" }}
              letterSpacing="-.045em"
              mt="10px"
              color={navy}
            >
              Fast turnaround software services.
            </Heading>
            <Text color="#607086" mt="12px" fontSize="15px">
              Slow system? Virus infection? Lost files? We clean, restore, and tune your computer for peak speed and security.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="18px">
            {softwareServices.map((service, index) => (
              <Box
                key={service.name}
                p="22px"
                bg="white"
                borderRadius="18px"
                border="1px solid"
                borderColor="#dfe7f0"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "pct.500",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 28px rgba(7,17,31,0.06)",
                }}
              >
                <Flex
                  w="38px"
                  h="38px"
                  borderRadius="10px"
                  bg="#e6fbf6"
                  color="pct.700"
                  align="center"
                  justify="center"
                  fontSize="17px"
                  mb="14px"
                >
                  {service.icon}
                </Flex>
                <Heading fontSize="17px" color={navy} mb="6px">
                  {service.name}
                </Heading>
                <Text color="#607086" fontSize="12px" lineHeight="1.6" mb="14px">
                  {service.desc}
                </Text>
                <Button
                  variant="plain"
                  p="0"
                  color="pct.700"
                  fontSize="12px"
                  fontWeight="700"
                  cursor="pointer"
                  onClick={() => handleServiceSelect(service.name)}
                  _hover={{ color: navy }}
                >
                  Book Service →
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* New & Off-Lease Computers & Laptops Section */}
      <Box as="section" id="off-lease" bg="#07111f" color="white" py={{ base: "72px", md: "90px" }}>
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: "36px", lg: "60px" }}
            alignItems="center"
          >
            <Box>
              <Eyebrow light>Certified Hardware &amp; Sales</Eyebrow>
              <Heading
                fontSize={{ base: "34px", md: "46px" }}
                letterSpacing="-.04em"
                lineHeight="1.1"
                my="14px"
                color="white"
              >
                New &amp; Off-Lease Computers &amp; Laptops
              </Heading>
              <Text color="#a3b8cc" fontSize="15px" lineHeight="1.7" mb="22px">
                Looking for a dependable replacement laptop or workstation without paying retail markup? We offer thoroughly tested and certified systems from industry-leading manufacturers.
              </Text>

              <Box
                p="18px 22px"
                borderRadius="14px"
                bg="rgba(37,199,167,0.1)"
                border="1px solid rgba(37,199,167,0.3)"
                mb="28px"
              >
                <Text color="pct.400" fontWeight="700" fontSize="14px">
                  ★ Special Pricing for Quantity Purchases
                </Text>
                <Text color="#cbd5e1" fontSize="12px" mt="4px">
                  Bulk order pricing available for local businesses, schools, medical clinics, and offices in Brantford and Brant County.
                </Text>
              </Box>

              <ActionLink href="#contact">
                Check Current Inventory <span>→</span>
              </ActionLink>
            </Box>

            <Box>
              <Text fontFamily="heading" fontSize="13px" fontWeight="700" textTransform="uppercase" letterSpacing=".12em" color="#8297ac" mb="14px">
                Available Brands in Stock &amp; Custom Configured:
              </Text>
              <VStack align="stretch" gap="10px">
                {computerBrands.map((brand) => (
                  <HStack
                    key={brand.name}
                    p="16px 20px"
                    bg="#0e1f32"
                    borderRadius="14px"
                    border="1px solid"
                    borderColor="#1b334d"
                    justify="space-between"
                  >
                    <Text fontFamily="heading" fontSize="18px" fontWeight="800" color="pct.500">
                      {brand.name}
                    </Text>
                    <Text color="#8fa3b7" fontSize="12px">
                      {brand.desc}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* 4-Step How It Works Process */}
      <Box as="section" py={{ base: "72px", md: "90px" }} bg="white">
        <Container maxW="1160px" px={{ base: 4, md: 5 }}>
          <Box textAlign="center" maxW="600px" mx="auto" mb={{ base: "36px", md: "48px" }}>
            <Eyebrow>Simple &amp; Transparent</Eyebrow>
            <Heading fontSize={{ base: "32px", md: "42px" }} mt="8px">
              How our repair process works
            </Heading>
            <Text color="#607086" fontSize="14px" mt="10px">
              No technical jargon or surprise invoices. Clear communication at every step.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="18px">
            {[
              [
                "1. Drop Off or Call",
                "Bring your computer to our Brantford shop at 340 Henry St or give us a quick call to discuss the symptoms.",
              ],
              [
                "2. Clear Diagnosis",
                "Our technicians thoroughly test the machine to pinpoint hardware and software root causes.",
              ],
              [
                "3. Upfront Approval",
                "We provide you with clear repair options and pricing. You decide before any work starts.",
              ],
              [
                "4. Pickup & Test",
                "We complete the repair, test the system thoroughly, and return your computer working like new.",
              ],
            ].map(([title, copy], index) => (
              <Box
                key={title}
                p="24px"
                borderRadius="18px"
                bg="#f8fafc"
                border="1px solid"
                borderColor="#e2e8f0"
              >
                <Text color="pct.700" fontFamily="heading" fontWeight="800" fontSize="18px">
                  0{index + 1}
                </Text>
                <Heading fontSize="18px" color={navy} mt="12px" mb="8px">
                  {title}
                </Heading>
                <Text color="#64748b" fontSize="13px" lineHeight="1.6">
                  {copy}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact & Repair Booking Section */}
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
              <Eyebrow light>Get In Touch</Eyebrow>
              <Heading
                fontSize={{ base: "38px", md: "52px" }}
                letterSpacing="-.05em"
                lineHeight="1.1"
                mt="12px"
                color="white"
              >
                Request a repair or service quote.
              </Heading>
              <Text color="#9eb0c2" mt="15px">
                Fill out the request form and our technicians will follow up promptly. For immediate drop-off or urgent inquiries, give our Brantford shop a call directly.
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
                  label="Visit Our Shop"
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

              <Field label="What service do you need?">
                <Box
                  as="select"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  w="full"
                  mt="6px"
                  border="1px solid"
                  borderColor="#d9e2eb"
                  bg="#f9fbfd"
                  borderRadius="10px"
                  p="12px 13px"
                >
                  <option value="">Select a service category</option>
                  <option value="Broken Screen Repair">Broken Screen / LCD Replacement</option>
                  <option value="Keyboard Replacement">Keyboard Replacement / Key Repair</option>
                  <option value="Laptop Liquid Spill">Laptop Liquid Spill Recovery</option>
                  <option value="No Power / DC Jack">No Power / Charging Port / DC Jack</option>
                  <option value="Virus & Spyware Removal">Virus, Spyware & Malware Removal</option>
                  <option value="Data Recovery & Transfer">Data Recovery & Data Transfers</option>
                  <option value="Hardware Upgrades / SSD">Hardware Upgrades (SSD, RAM, Battery)</option>
                  <option value="Custom Gaming PC">Custom Gaming PC / Workstation</option>
                  <option value="Business IT Support">Business IT Support & Networking</option>
                  <option value="Other Service">Other Computer Inquiry</option>
                </Box>
              </Field>

              <Field label="Describe the issue or device model">
                <Textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Example: Dell Inspiron laptop screen cracked after a drop, need replacement estimate..."
                />
              </Field>

              <Button type="submit" {...buttonStyle} w="full">
                Submit Repair Request <span>→</span>
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
                  ✓ Thanks! Your repair request has been submitted. Our team will contact you shortly.
                </Box>
              )}
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
