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

function PrivacySection({ number, title, children }) {
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

export default function PrivacyPolicy() {
  return (
    <>
       {/* SEO Section */}
      <SEO
        title="Privacy Policy | Personal Computer Terminal"
        description="Privacy policy for Personal Computer Terminal."
        canonical="/privacy-policy"
      />
         <Box bg="#f7f9fc" minH="100vh">
   
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
              Privacy Policy
            </Text>
          </HStack>

          <Eyebrow light>Your Privacy Matters</Eyebrow>

          <Heading
            as="h1"
            fontSize={{ base: "42px", md: "58px" }}
            letterSpacing="-.05em"
            lineHeight="1.05"
            mt="16px"
            color="white"
          >
            Privacy Policy
          </Heading>

          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="#b7c6d7"
            maxW="700px"
            mt="18px"
            lineHeight="1.7"
          >
            We are committed to protecting the privacy, accuracy,
            confidentiality, and security of your personal information.
          </Text>

          <Text color="#8297ac" fontSize="12px" mt="20px">
            Last updated: August 24, 2026
          </Text>
        </Container>
      </Box>

      {/* Privacy Content */}
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
              <PrivacySection number={1} title="Introduction">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Personal Computer Terminal ("PCT", "we", "us", or "our") is
                  committed to maintaining the accuracy, confidentiality, and
                  security of your personal information.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  This Privacy Policy explains how we collect, use, disclose,
                  retain, and protect personal information provided to us
                  through our website, contact forms, telephone communications,
                  and in connection with our products and services.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Our privacy practices are intended to comply with applicable
                  Canadian privacy laws, including the Personal Information
                  Protection and Electronic Documents Act (PIPEDA), where
                  applicable.
                </Text>
              </PrivacySection>

              {/* Responsibility */}
              <PrivacySection
                number={2}
                title="Responsibility for Personal Information"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We are responsible for maintaining and protecting personal
                  information under our control.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We take reasonable steps to ensure that personal information
                  is handled in accordance with this Privacy Policy and
                  applicable privacy requirements.
                </Text>
              </PrivacySection>

              {/* Information Collected */}
              <PrivacySection number={3} title="Information We Collect">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Depending on how you interact with us, we may collect personal
                  information such as:
                </Text>

                <VStack align="stretch" gap="8px" mt="14px" pl="8px">
                  {[
                    "First and last name",
                    "Email address",
                    "Telephone number",
                    "Information about your computer or device",
                    "Details about your repair or service request",
                    "Information provided through contact forms",
                    "Information necessary to provide requested products or services",
                  ].map((item) => (
                    <HStack key={item} align="flex-start" gap="10px">
                      <Text color="pct.700" fontWeight="800" fontSize="14px">
                        ✓
                      </Text>

                      <Text color="#4a5568" fontSize="14px" lineHeight="1.6">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </PrivacySection>

              {/* Identifying Purposes */}
              <PrivacySection number={4} title="How We Use Your Information">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We collect, use, and disclose personal information only for
                  purposes that are reasonable and appropriate for operating our
                  business and providing our products and services.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  This may include:
                </Text>

                <VStack align="stretch" gap="8px" mt="14px" pl="8px">
                  {[
                    "Responding to questions and service requests",
                    "Contacting you about a repair or service",
                    "Providing computer repair and IT services",
                    "Providing product information and quotations",
                    "Processing orders or service requests",
                    "Scheduling appointments or follow-ups",
                    "Improving our website, services, and customer experience",
                    "Meeting legal, regulatory, or business requirements",
                  ].map((item) => (
                    <HStack key={item} align="flex-start" gap="10px">
                      <Text color="pct.700" fontWeight="800" fontSize="14px">
                        ✓
                      </Text>

                      <Text color="#4a5568" fontSize="14px" lineHeight="1.6">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </PrivacySection>

              {/* Consent */}
              <PrivacySection number={5} title="Consent">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Knowledge and consent are required for the collection, use, or
                  disclosure of personal information except where otherwise
                  required or permitted by law.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Providing personal information to us is generally your choice.
                  However, choosing not to provide certain information may
                  prevent us from being able to respond to your request or
                  provide a requested product or service.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Where appropriate, consent may be provided directly through a
                  form, email, telephone conversation, or other communication
                  with us.
                </Text>
              </PrivacySection>

              {/* Limiting Collection */}
              <PrivacySection number={6} title="Limiting Collection">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We limit the collection of personal information to information
                  that is reasonably necessary for the purposes identified in
                  this Privacy Policy or otherwise communicated to you.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Personal information may be collected when you contact us,
                  submit a service request, use our website, request a
                  quotation, purchase a product, or otherwise interact with our
                  business.
                </Text>
              </PrivacySection>

              {/* Use Disclosure Retention */}
              <PrivacySection number={7} title="Use, Disclosure & Retention">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Personal information will generally only be used or disclosed
                  for the purposes for which it was collected, unless you
                  provide additional consent or disclosure is required or
                  permitted by law.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We may use trusted service providers where necessary to
                  operate our website, communicate with customers, process
                  requests, provide services, or maintain our business systems.
                  Where appropriate, we take reasonable steps to ensure that
                  personal information is handled securely.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Personal information will be retained only for as long as
                  reasonably necessary to fulfill the purposes for which it was
                  collected, to provide services, resolve disputes, maintain
                  business records, or as required by law.
                </Text>
              </PrivacySection>

              {/* Accuracy */}
              <PrivacySection number={8} title="Accuracy">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We take reasonable steps to keep personal information
                  accurate, complete, and up to date when it is used for
                  purposes that require accuracy.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  If you believe that information we hold about you is
                  inaccurate or incomplete, you may contact us and request that
                  it be corrected.
                </Text>
              </PrivacySection>

              {/* Safeguards */}
              <PrivacySection
                number={9}
                title="Safeguarding Personal Information"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We take reasonable administrative, technical, and physical
                  precautions to protect personal information against loss,
                  theft, unauthorized access, use, disclosure, copying,
                  modification, or destruction.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  The level of protection applied may depend on the sensitivity
                  of the information and the circumstances in which it is
                  collected or stored.
                </Text>
              </PrivacySection>

              {/* Openness */}
              <PrivacySection number={10} title="Openness">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We will make information about our privacy practices available
                  through this Privacy Policy and other appropriate
                  communications.
                </Text>
              </PrivacySection>

              {/* Access */}
              <PrivacySection number={11} title="Access to Your Information">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Upon request, and subject to applicable legal requirements and
                  exceptions, you may request information about the personal
                  information we hold about you, how it is used, and how it has
                  been disclosed.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  You may also request that inaccurate or incomplete personal
                  information be corrected.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Certain information may not be accessible where disclosure is
                  restricted or prohibited by applicable law, including
                  circumstances involving legal, security, privacy, or
                  proprietary considerations.
                </Text>
              </PrivacySection>

              {/* Cookies */}
              <PrivacySection number={12} title="Cookies">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Our website may use cookies or similar technologies. Cookies
                  are small files or pieces of information that may be stored on
                  your device when you visit a website.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Cookies may be used to support website functionality,
                  understand how visitors use the website, improve performance,
                  or provide a more convenient browsing experience.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Most browsers allow you to control or disable cookies through
                  their settings. Disabling certain cookies may affect some
                  website functionality.
                </Text>
              </PrivacySection>

              {/* Analytics */}
              <PrivacySection number={13} title="Website Analytics">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  If analytics or similar website measurement tools are used,
                  they may collect information about how visitors interact with
                  our website, such as pages visited, approximate usage
                  information, browser information, and technical information.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  Any third-party analytics provider used by the website may
                  have its own privacy practices and policies.
                </Text>
              </PrivacySection>

              {/* Third Party */}
              <PrivacySection
                number={14}
                title="Third-Party Websites & Services"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Our website may contain links to third-party websites and
                  services, including external websites, social media platforms,
                  mapping services, review platforms, payment providers, or
                  other online services.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  These third-party services are not governed by this Privacy
                  Policy. We encourage you to review the privacy policies of
                  third-party websites before providing them with personal
                  information.
                </Text>
              </PrivacySection>

              {/* Children */}
              <PrivacySection number={15} title="Children's Privacy">
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  Our website is intended for general audiences and is not
                  specifically directed toward children.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  We do not knowingly collect personal information from children
                  for purposes that are not permitted by applicable law.
                </Text>
              </PrivacySection>

              {/* Changes */}
              <PrivacySection
                number={16}
                title="Changes to This Privacy Policy"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our practices, services, technology, or applicable
                  legal requirements.
                </Text>

                <Text
                  color="#4a5568"
                  fontSize="14px"
                  lineHeight="1.8"
                  mt="12px"
                >
                  When changes are made, the updated policy will be posted on
                  this page and the "Last updated" date will be revised.
                </Text>
              </PrivacySection>

              {/* Complaints */}
              <PrivacySection
                number={17}
                title="Questions, Requests & Complaints"
              >
                <Text color="#4a5568" fontSize="14px" lineHeight="1.8">
                  If you have questions about this Privacy Policy, want to
                  request access to your personal information, request a
                  correction, or have a privacy-related concern, please contact
                  us.
                </Text>
              </PrivacySection>

              {/* Contact */}
              <Box
                bg="#eaf9f6"
                border="1px solid #ccece5"
                borderRadius="16px"
                p={{ base: "20px", md: "24px" }}
              >
                <Eyebrow>Privacy Contact</Eyebrow>

                <Heading
                  fontSize={{ base: "20px", md: "22px" }}
                  color={navy}
                  mt="6px"
                  mb="10px"
                >
                  Contact us about your privacy
                </Heading>

                <Text color="#4a5568" fontSize="14px" lineHeight="1.7">
                  For questions, requests, or concerns regarding your personal
                  information or this Privacy Policy, please contact us.
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
