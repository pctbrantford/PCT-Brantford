import SEO from "../components/SEO";
import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
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

function TermsSection({ number, title, children }) {
  return (
    <Box>
      <HStack align="flex-start" gap="14px" mb="10px">
        <Text color="pct.700" fontWeight="800" fontSize="14px" minW="28px">
          {String(number).padStart(2, "0")}
        </Text>

        <Heading
          as="h2"
          fontSize={{ base: "21px", md: "24px" }}
          color={navy}
          letterSpacing="-.02em"
        >
          {title}
        </Heading>
      </HStack>

      <Box pl={{ base: "0", md: "42px" }}>{children}</Box>
    </Box>
  );
}

export default function TermsPage() {
  return (
    <>
       <SEO
        title="Terms & Conditions | Personal Computer Terminal"
        description="Terms and conditions for using the Personal Computer Terminal website and services."
        canonical="/terms-and-conditions"
      />
          <Box bg="#f7f9fc" minH="100vh">
      {/* SEO Section */}
   
      {/* Hero */}
      <Box
        bgImage="radial-gradient(circle at 70% 10%,rgba(37,199,167,.18),transparent 25%),linear-gradient(120deg,#07111f,#0c1a2d)"
        color="white"
        py={{ base: "60px", md: "84px" }}
      >
        <Container maxW="960px" px={{ base: 4, md: 5 }}>
          <HStack gap="8px" mb="14px" fontSize="13px" color="#8ea1b2">
            <Link href="/" _hover={{ color: "pct.400" }} color="white">
              Home
            </Link>

            <Text>/</Text>

            <Text color="pct.400" fontWeight="600">
              Terms &amp; Conditions
            </Text>
          </HStack>

          <Eyebrow light>Website Terms &amp; Conditions</Eyebrow>

          <Heading
            as="h1"
            fontSize={{ base: "42px", md: "58px" }}
            letterSpacing="-.05em"
            lineHeight="1.05"
            mt="16px"
            color="white"
          >
            Terms &amp; Conditions
          </Heading>

          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="#b7c6d7"
            maxW="700px"
            mt="18px"
            lineHeight="1.7"
          >
            Please read these terms carefully before using our website or
            requesting products and services from us.
          </Text>

          <Text color="#8297ac" fontSize="12px" mt="20px">
            Last updated: August 24, 2026
          </Text>
        </Container>
      </Box>

      {/* Terms Content */}
      <Box py={{ base: "50px", md: "80px" }}>
        <Container maxW="960px" px={{ base: 4, md: 5 }}>
          <Box
            bg="white"
            border="1px solid"
            borderColor="#dfe7f0"
            borderRadius={{ base: "18px", md: "24px" }}
            p={{ base: "24px", md: "48px" }}
            boxShadow="0 10px 35px rgba(7,17,31,0.04)"
          >
            <VStack align="stretch" gap={{ base: "36px", md: "48px" }}>
              {/* Introduction */}
              <TermsSection number={1} title="Introduction">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  These Terms &amp; Conditions govern your use of the website
                  operated by Personal Computer Terminal ("PCT", "we", "us", or
                  "our") and your use of the information, services, and features
                  made available through this website.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  By accessing or using this website, you agree to comply with
                  these Terms &amp; Conditions and our Privacy Policy. If you do
                  not agree with these terms, please do not use this website.
                </Text>
              </TermsSection>

              {/* Website Use */}
              <TermsSection number={2} title="Use of Our Website">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  You agree to use this website only for lawful purposes and in
                  a manner that does not violate applicable laws or the rights
                  of others.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  You must not attempt to gain unauthorized access to our
                  website, servers, systems, networks, or security features. You
                  must not knowingly introduce malicious software, viruses, or
                  other harmful material.
                </Text>
              </TermsSection>

              {/* Services */}
              <TermsSection number={3} title="Products & Services">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Information about our computer repair, IT support, networking,
                  hardware, software, soldering, data recovery, sales, and other
                  services is provided for general information and may change
                  from time to time.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Service availability, pricing, parts availability, turnaround
                  times, and repair options may vary depending on the device,
                  issue, required parts, and diagnostic results.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Any estimate or quotation provided before inspection may be
                  subject to change if additional problems are identified during
                  diagnosis or repair. Where applicable, we will communicate
                  material changes before proceeding with additional work.
                </Text>
              </TermsSection>

              {/* Repair Disclaimer */}
              <TermsSection number={4} title="Repair & Data Disclaimer">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Customers are responsible for maintaining appropriate backups
                  of their data before submitting a device for repair or
                  service.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Although reasonable care is taken during diagnostics and
                  repair, certain devices may contain pre-existing hardware
                  faults, physical damage, liquid damage, storage failures, or
                  other conditions that may affect the outcome of a repair.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Data recovery is not guaranteed. The ability to recover data
                  depends on the condition of the storage device and other
                  technical factors.
                </Text>
              </TermsSection>

              {/* Pricing */}
              <TermsSection number={5} title="Pricing & Estimates">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Prices displayed on the website are subject to change without
                  notice. Unless otherwise stated, prices are in Canadian
                  dollars.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  A diagnostic assessment may be required before a final repair
                  price can be confirmed. Customers will be informed of
                  applicable repair costs and options before authorized repair
                  work proceeds.
                </Text>
              </TermsSection>

              {/* Appointments */}
              <TermsSection number={6} title="Appointments & Requests">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Submitting a service request or contact form does not
                  automatically create a confirmed appointment or guarantee
                  service availability.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We may contact you using the information provided in your
                  request to discuss your device, service requirements, pricing,
                  availability, or appointment details.
                </Text>
              </TermsSection>

              {/* Personal Information */}
              <TermsSection number={7} title="Personal Information">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Information submitted through our website may include your
                  name, email address, telephone number, and details about your
                  service request.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Our collection, use, and protection of personal information is
                  governed by our Privacy Policy.
                </Text>

                <Link
                  href="/privacy-policy"
                  color="pct.700"
                  fontWeight="700"
                  fontSize="14px"
                  display="inline-block"
                  mt="12px"
                  _hover={{ textDecoration: "underline" }}
                >
                  View our Privacy Policy →
                </Link>
              </TermsSection>

              {/* Third Party */}
              <TermsSection number={8} title="Third-Party Websites & Services">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Our website may contain links to third-party websites,
                  services, social media platforms, maps, review platforms, or
                  other external resources.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  These third-party websites are operated independently and may
                  have their own terms and privacy policies. We are not
                  responsible for the content, availability, security, or
                  privacy practices of third-party websites.
                </Text>
              </TermsSection>

              {/* Reviews */}
              <TermsSection number={9} title="Reviews & User Content">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  If you submit feedback, reviews, comments, photographs, or
                  other content to us or through services connected to our
                  website, you are responsible for ensuring that the content is
                  accurate and that you have the right to submit it.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Content must not be unlawful, misleading, abusive, defamatory,
                  obscene, or contain malicious software or material that
                  infringes another person's rights.
                </Text>
              </TermsSection>

              {/* Accuracy */}
              <TermsSection number={10} title="Website Information">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We make reasonable efforts to keep the information on this
                  website accurate and current. However, errors, omissions,
                  outdated information, or inaccuracies may occasionally occur.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We reserve the right to correct errors and update website
                  content, service descriptions, pricing, availability, and
                  other information at any time.
                </Text>
              </TermsSection>

              {/* Disclaimer */}
              <TermsSection
                number={11}
                title="Disclaimer & Limitation of Liability"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  This website and its content are provided on an "as-is" and
                  "as-available" basis to the extent permitted by applicable
                  law.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We do not guarantee that the website will always be available,
                  uninterrupted, secure, accurate, complete, or free from errors
                  or harmful components.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  To the maximum extent permitted by applicable law, PCT will
                  not be responsible for losses or damages arising from your use
                  of, or inability to use, this website or information provided
                  through it.
                </Text>
              </TermsSection>

              {/* Indemnification */}
              <TermsSection number={12} title="Indemnification">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  To the extent permitted by applicable law, you agree to be
                  responsible for losses, claims, liabilities, and reasonable
                  expenses arising from your unlawful use of the website,
                  violation of these Terms &amp; Conditions, or infringement of
                  another person's rights.
                </Text>
              </TermsSection>

              {/* Changes */}
              <TermsSection number={13} title="Changes to These Terms">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We may update or change these Terms &amp; Conditions from time
                  to time. Updated terms will be posted on this page with a
                  revised "Last updated" date.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Your continued use of the website after changes are posted
                  constitutes your acceptance of the updated Terms, to the
                  extent permitted by law.
                </Text>
              </TermsSection>

              {/* Governing Law */}
              <TermsSection number={14} title="Governing Law">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  These Terms &amp; Conditions are intended to be governed by
                  the laws applicable in the Province of Ontario and the
                  applicable laws of Canada, without regard to conflict-of-law
                  principles.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Any dispute relating to these Terms will be subject to the
                  courts having appropriate jurisdiction in Ontario, subject to
                  applicable law.
                </Text>
              </TermsSection>

              {/* Contact */}
              <Box
                bg="#eaf9f6"
                border="1px solid #ccece5"
                borderRadius="16px"
                p={{ base: "20px", md: "24px" }}
              >
                <Eyebrow>Questions or Concerns</Eyebrow>

                <Heading
                  fontSize={{ base: "20px", md: "22px" }}
                  color={navy}
                  mt="6px"
                  mb="10px"
                >
                  Contact us about these terms
                </Heading>

                <Text color="#4a5568" fontSize="14px" lineHeight="1.7">
                  If you have questions about these Terms &amp; Conditions,
                  please contact us.
                </Text>

                <VStack align="start" gap="5px" mt="14px">
                  <Text fontSize="13px" fontWeight="700" color={navy}>
                    {businessInfo.name}
                  </Text>

                  <Link
                    href={businessInfo.email.href}
                    color="pct.700"
                    fontSize="13px"
                    fontWeight="700"
                  >
                    {businessInfo.email.display}
                  </Link>

                  <Link
                    href={businessInfo.phone.href}
                    color="pct.700"
                    fontSize="13px"
                    fontWeight="700"
                  >
                    {businessInfo.phone.display}
                  </Link>

                  <Text color="#607086" fontSize="13px">
                    {businessInfo.address.full}
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
      </>

  );
}
