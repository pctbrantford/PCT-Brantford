import { useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import greatestTechnicianImage from "../../assets/greatest_technician_ever_lived.avif";
import servicesImage from "../../assets/services.avif";
import heroImage from "../../assets/home_page.avif";

const carouselSlides = [
  {
    src: greatestTechnicianImage,
    alt: "Personal Computer Terminal expert technician diagnosing computer",
    title: "Expert Bench Diagnostics",
    subtitle: "Precision hardware troubleshooting & repair",
  },
  {
    src: servicesImage,
    alt: "PCT Brantford professional computer repair services",
    title: "Full-Service Computer Workshop",
    subtitle: "Screens, keyboards, spills, boards & upgrades",
  },
  {
    src: heroImage,
    alt: "Technician repairing open laptop with precision tools",
    title: "30+ Years Local Heritage",
    subtitle: "Brantford's trusted technology partner",
  },
];

export default function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <Box
      position="relative"
      h={{ base: "340px", md: "450px", lg: "500px" }}
      borderRadius="30px"
      bg="linear-gradient(145deg,#dce7f0,#f8fafc)"
      overflow="hidden"
      boxShadow="0 25px 60px rgba(20,45,70,.14)"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 30+ Years Experience Badge */}
      <Box
        position="absolute"
        top="20px"
        right="20px"
        zIndex="10"
        bg="rgba(255,255,255,0.92)"
        backdropFilter="blur(10px)"
        borderRadius="16px"
        p="12px 18px"
        boxShadow="0 15px 40px rgba(20,45,70,.14)"
        border="1px solid rgba(255,255,255,0.8)"
      >
        <Text fontFamily="heading" fontSize="24px" fontWeight="700" color="#07111f" lineHeight="1">
          30+
        </Text>
        <Text fontSize="11px" color="#6d7c8e" fontWeight="600" mt="2px">
          Years experience
        </Text>
      </Box>

      {/* Carousel Card Container */}
      <Box
        position="absolute"
        inset={{ base: "72px 16px 18px", md: "84px 30px 26px" }}
        borderRadius="22px"
        overflow="hidden"
        boxShadow="0 25px 60px rgba(20,45,70,.25)"
        bg="#07111f"
        role="group"
      >
        {/* Slides Track */}
        <Flex
          w={`${carouselSlides.length * 100}%`}
          h="100%"
          transform={`translateX(-${(currentIndex * 100) / carouselSlides.length}%)`}
          transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        >
          {carouselSlides.map((slide) => (
            <Box
              key={slide.title}
              w={`${100 / carouselSlides.length}%`}
              h="100%"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.6s ease"
                _groupHover={{ transform: "scale(1.06)" }}
              />
              <Box
                position="absolute"
                inset="0"
                bg="linear-gradient(180deg, rgba(7,17,31,0.1) 0%, rgba(7,17,31,0.75) 100%)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                bottom={{ base: "26px", md: "30px" }}
                left="20px"
                right="20px"
                pointerEvents="none"
                zIndex="2"
              >
                <Text
                  color="white"
                  fontFamily="heading"
                  fontWeight="700"
                  fontSize={{ base: "15px", md: "18px" }}
                  textShadow="0 2px 10px rgba(0,0,0,0.7)"
                >
                  {slide.title}
                </Text>
                <Text
                  color="#cbd5e1"
                  fontSize={{ base: "11px", md: "13px" }}
                  textShadow="0 1px 6px rgba(0,0,0,0.7)"
                  mt="2px"
                >
                  {slide.subtitle}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>

        {/* Previous Button */}
        <Button
          position="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="5"
          w="34px"
          h="34px"
          minW="34px"
          p="0"
          borderRadius="full"
          bg="rgba(7,17,31,0.65)"
          backdropFilter="blur(8px)"
          color="white"
          fontSize="20px"
          fontWeight="700"
          border="1px solid rgba(255,255,255,0.2)"
          _hover={{ bg: "pct.500", color: "#07111f", borderColor: "pct.500" }}
          _active={{ transform: "translateY(-50%) scale(0.95)" }}
          onClick={prevSlide}
          aria-label="Previous image"
        >
          ‹
        </Button>

        {/* Next Button */}
        <Button
          position="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="5"
          w="34px"
          h="34px"
          minW="34px"
          p="0"
          borderRadius="full"
          bg="rgba(7,17,31,0.65)"
          backdropFilter="blur(8px)"
          color="white"
          fontSize="20px"
          fontWeight="700"
          border="1px solid rgba(255,255,255,0.2)"
          _hover={{ bg: "pct.500", color: "#07111f", borderColor: "pct.500" }}
          _active={{ transform: "translateY(-50%) scale(0.95)" }}
          onClick={nextSlide}
          aria-label="Next image"
        >
          ›
        </Button>

        {/* Interactive Dot Scroller Indicators */}
        <HStack
          position="absolute"
          bottom="12px"
          left="0"
          right="0"
          justify="center"
          gap="6px"
          zIndex="5"
        >
          {carouselSlides.map((_, idx) => (
            <Box
              key={idx}
              w={currentIndex === idx ? "22px" : "7px"}
              h="7px"
              borderRadius="full"
              bg={currentIndex === idx ? "pct.500" : "rgba(255,255,255,0.5)"}
              cursor="pointer"
              transition="all 0.3s ease"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
