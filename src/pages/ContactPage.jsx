import SEO from "../components/SEO";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  Link,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { toaster } from "../components/toaster";
import { businessInfo } from "../constants";

const navy = "#07111f";

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

function ContactInfoItem({ label, children }) {
  return (
    <Box>
      <Text
        fontSize="11px"
        textTransform="uppercase"
        letterSpacing=".12em"
        fontWeight="800"
        color="#8297ac"
        mb="5px"
      >
        {label}
      </Text>

      {children}
    </Box>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      toaster.create({
        title: "Request sent successfully!",
        description:
          "Thanks for contacting us. We'll get back to you as soon as possible.",
        type: "success",
        duration: 5000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      toaster.create({
        title: "Unable to send request",
        description:
          error.message ||
          "Something went wrong. Please try again or call us directly.",
        type: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* SEO Section */}
      <SEO
        title="Contact PCT | Computer Repair Brantford"
        description="Contact Personal Computer Terminal at 340 Henry St Unit 6 in Brantford, Ontario for computer repair, laptop repair, upgrades and IT services."
        canonical="/contact"
      />
      <Box bg="#f7f9fc" minH="100vh">
        {/* Hero */}
        <Box
          bgImage="
          radial-gradient(
            circle at 75% 20%,
            rgba(37,199,167,.18),
            transparent 28%
          ),
          linear-gradient(120deg,#07111f,#0c1a2d)
        "
          color="white"
          py={{ base: "65px", md: "90px" }}
        >
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Eyebrow light>Get In Touch</Eyebrow>

            <Heading
              fontSize={{ base: "40px", md: "58px" }}
              letterSpacing="-.05em"
              lineHeight="1.05"
              mt="14px"
              color="white"
              maxW="750px"
            >
              Let&apos;s Get Your Technology Working Again
            </Heading>

            <Text
              color="#b7c6d7"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              maxW="680px"
              mt="18px"
            >
              Have a computer problem, need a repair, or looking for technology
              support? Contact us and we&apos;ll help you figure out the right
              next step.
            </Text>
          </Container>
        </Box>

        {/* Contact + Form */}
        <Box py={{ base: "55px", md: "80px" }}>
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "0.85fr 1.15fr" }}
              gap={{ base: "35px", lg: "60px" }}
              alignItems="start"
            >
              {/* Contact Information */}
              <Box>
                <Eyebrow>Contact Information</Eyebrow>

                <Heading
                  fontSize={{ base: "30px", md: "38px" }}
                  mt="8px"
                  color={navy}
                  letterSpacing="-.04em"
                >
                  Visit, call, or send us a message.
                </Heading>

                <Text
                  color="#607086"
                  fontSize="14px"
                  lineHeight="1.7"
                  mt="14px"
                  maxW="500px"
                >
                  Whether you need a quick repair, a diagnosis, data recovery,
                  networking help, or a replacement computer, we&apos;re here to
                  help.
                </Text>

                <VStack align="stretch" gap="24px" mt="32px">
                  <ContactInfoItem label="Phone">
                    <Link
                      href={businessInfo.phone.href}
                      color="pct.700"
                      fontWeight="700"
                      fontSize="16px"
                    >
                      {businessInfo.phone.display}
                    </Link>
                  </ContactInfoItem>

                  <ContactInfoItem label="Email">
                    <Link
                      href={businessInfo.email.href}
                      color="pct.700"
                      fontWeight="700"
                      fontSize="16px"
                    >
                      {businessInfo.email.display}
                    </Link>
                  </ContactInfoItem>

                  <ContactInfoItem label="Location">
                    <Link
                      href={businessInfo.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={navy}
                      fontSize="15px"
                      fontWeight="600"
                      lineHeight="1.6"
                    >
                      {businessInfo.address.street}
                      <br />
                      {businessInfo.address.locality}
                    </Link>
                  </ContactInfoItem>

                  <ContactInfoItem label="Service Area">
                    <Text color="#4a5568" fontSize="14px" lineHeight="1.6">
                      Brantford, Brant County, and surrounding areas.
                    </Text>
                  </ContactInfoItem>
                </VStack>

                <HStack mt="30px" gap="10px">
                  <Button
                    as="a"
                    href={businessInfo.phone.href}
                    bg={navy}
                    color="white"
                    borderRadius="10px"
                    px="22px"
                    _hover={{
                      bg: "#0d2238",
                      transform: "translateY(-1px)",
                    }}
                  >
                    Call Us
                  </Button>

                  <Button
                    as="a"
                    href={businessInfo.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    borderColor="#cbd5e1"
                    color={navy}
                    borderRadius="10px"
                    px="22px"
                    _hover={{
                      bg: "#f1f5f9",
                    }}
                  >
                    Get Directions
                  </Button>
                </HStack>
              </Box>

              {/* Contact Form */}
              <Box
                bg="white"
                border="1px solid"
                borderColor="#dfe7f0"
                borderRadius="22px"
                p={{ base: "22px", md: "32px" }}
                boxShadow="0 15px 45px rgba(7,17,31,.06)"
              >
                <Eyebrow>Repair Inquiry</Eyebrow>

                <Heading
                  fontSize={{ base: "24px", md: "28px" }}
                  color={navy}
                  mt="7px"
                >
                  Tell us what you need help with
                </Heading>

                <Text
                  color="#607086"
                  fontSize="13px"
                  lineHeight="1.6"
                  mt="8px"
                  mb="24px"
                >
                  Give us a few details about your device or issue and
                  we&apos;ll get back to you.
                </Text>

                <form onSubmit={handleSubmit}>
                  <VStack align="stretch" gap="15px">
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="15px">
                      <Box>
                        <Text
                          fontSize="12px"
                          fontWeight="700"
                          color={navy}
                          mb="6px"
                        >
                          First Name
                        </Text>

                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          size="md"
                          borderColor="#d8e1ea"
                          borderRadius="10px"
                        />
                      </Box>

                      <Box>
                        <Text
                          fontSize="12px"
                          fontWeight="700"
                          color={navy}
                          mb="6px"
                        >
                          Last Name
                        </Text>

                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          size="md"
                          borderColor="#d8e1ea"
                          borderRadius="10px"
                        />
                      </Box>
                    </SimpleGrid>

                    <Box>
                      <Text
                        fontSize="12px"
                        fontWeight="700"
                        color={navy}
                        mb="6px"
                      >
                        Phone
                      </Text>

                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Your phone number"
                        borderColor="#d8e1ea"
                        borderRadius="10px"
                      />
                    </Box>

                    <Box>
                      <Text
                        fontSize="12px"
                        fontWeight="700"
                        color={navy}
                        mb="6px"
                      >
                        Email
                      </Text>

                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="you@example.com"
                        borderColor="#d8e1ea"
                        borderRadius="10px"
                      />
                    </Box>

                    <Box>
                      <Text
                        fontSize="12px"
                        fontWeight="700"
                        color={navy}
                        mb="6px"
                      >
                        What do you need help with?
                      </Text>
                      <Input
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="e.g. Laptop repair, Wi-Fi issue..."
                        borderColor="#d8e1ea"
                        borderRadius="10px"
                      />
                    </Box>

                    <Box>
                      <Text
                        fontSize="12px"
                        fontWeight="700"
                        color={navy}
                        mb="6px"
                      >
                        Tell us about the problem
                      </Text>

                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe the issue with your device..."
                        rows={5}
                        borderColor="#d8e1ea"
                        borderRadius="10px"
                        resize="vertical"
                      />
                    </Box>

                    <Button
                      type="submit"
                      bg="pct.500"
                      color={navy}
                      size="lg"
                      borderRadius="10px"
                      fontWeight="800"
                      mt="4px"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      _hover={{
                        bg: "pct.400",
                        transform: "translateY(-1px)",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Repair Request →"}
                    </Button>

                    <Text color="#94a3b8" fontSize="11px" lineHeight="1.5">
                      By submitting this form, you agree that we may use the
                      information provided to respond to your request. See our
                      Privacy Policy for more information.
                    </Text>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Location */}
        <Box
          bg="white"
          py={{ base: "55px", md: "80px" }}
          borderTop="1px solid #e2e8f0"
        >
          <Container maxW="1160px" px={{ base: 4, md: 5 }}>
            <Box textAlign="center" maxW="650px" mx="auto" mb="30px">
              <Eyebrow>Find Our Shop</Eyebrow>

              <Heading
                fontSize={{ base: "30px", md: "40px" }}
                color={navy}
                mt="8px"
              >
                Visit us in Brantford
              </Heading>

              <Text color="#607086" fontSize="14px" lineHeight="1.7" mt="10px">
                Conveniently located in Brantford. Get directions and visit us
                for your computer repair and technology needs.
              </Text>
            </Box>

            <Box
              w="100%"
              h={{ base: "320px", md: "450px" }}
              borderRadius={{ base: "18px", md: "24px" }}
              overflow="hidden"
              border="1px solid"
              borderColor="#dfe7f0"
              boxShadow="0 15px 45px rgba(7,17,31,.08)"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.4890107435613!2d-80.22424092384931!3d43.1572584711298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c660bcfaa03a7%3A0x940253ccd3fdeb1b!2sPersonal%20Computer%20Terminal!5e0!3m2!1sen!2sca!4v1787363609750!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="PCT Brantford location"
              />
            </Box>
          </Container>
        </Box>

        {/* Bottom CTA */}
        <Box bg={navy} color="white" py={{ base: "50px", md: "65px" }}>
          <Container maxW="850px" px={{ base: 4, md: 5 }} textAlign="center">
            <Eyebrow light>Not Sure What You Need?</Eyebrow>

            <Heading
              fontSize={{ base: "28px", md: "38px" }}
              color="white"
              mt="8px"
            >
              That&apos;s okay. We can help diagnose the problem.
            </Heading>

            <Text
              color="#a3b8cc"
              fontSize="14px"
              lineHeight="1.7"
              maxW="600px"
              mx="auto"
              mt="12px"
            >
              You don&apos;t need to know exactly what&apos;s wrong with your
              computer. Tell us what you&apos;re experiencing and we&apos;ll
              help determine the next step.
            </Text>

            <Button
              as="a"
              href={businessInfo.phone.href}
              mt="24px"
              bg="pct.500"
              color={navy}
              borderRadius="10px"
              px="26px"
              size="lg"
              fontWeight="800"
              _hover={{
                bg: "pct.400",
              }}
            >
              Call {businessInfo.phone.display}
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
}
