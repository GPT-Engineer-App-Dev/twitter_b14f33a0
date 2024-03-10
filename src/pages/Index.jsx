import React from "react";
import { Box, Container, Flex, VStack, HStack, Text, Input, Button, IconButton, Avatar, Divider, useColorModeValue, Stack, Heading, Textarea } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Tweet = ({ username, handle, content, avatar }) => (
  <HStack spacing={3} paddingY={2}>
    <Avatar src={avatar} />
    <VStack align="start">
      <Text fontWeight="bold">
        {username}{" "}
        <Text as="span" fontWeight="normal" color="gray.500">
          @{handle}
        </Text>
      </Text>
      <Text>{content}</Text>
    </VStack>
  </HStack>
);

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" padding={4}>
      <Flex height="100vh" bg={bg} color={color}>
        {/* Sidebar */}
        <VStack align="start" spacing={4} marginRight={4}>
          <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter" />
          <VStack align="start" spacing={1}>
            <Button leftIcon={<FaHome />} justifyContent="start" variant="ghost">
              Home
            </Button>
            <Button leftIcon={<FaHashtag />} justifyContent="start" variant="ghost">
              Explore
            </Button>
            <Button leftIcon={<FaBell />} justifyContent="start" variant="ghost">
              Notifications
            </Button>
            <Button leftIcon={<FaEnvelope />} justifyContent="start" variant="ghost">
              Messages
            </Button>
            <Button leftIcon={<FaBookmark />} justifyContent="start" variant="ghost">
              Bookmarks
            </Button>
            <Button leftIcon={<FaListAlt />} justifyContent="start" variant="ghost">
              Lists
            </Button>
            <Button leftIcon={<FaUserAlt />} justifyContent="start" variant="ghost">
              Profile
            </Button>
            <Button leftIcon={<FaEllipsisH />} justifyContent="start" variant="ghost">
              More
            </Button>
          </VStack>
          <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" size="lg" borderRadius="full">
            Tweet
          </Button>
        </VStack>

        {/* Feed */}
        <VStack flex={1} spacing={0} align="stretch" borderX="1px" borderColor="gray.200">
          <Box padding={4} borderBottom="1px" borderColor="gray.200">
            <Heading size="md">Home</Heading>
          </Box>
          <Box padding={4}>
            <HStack spacing={3}>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDAyMTA1OXww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Textarea placeholder="What's happening?" resize="none" />
            </HStack>
            <Flex justifyContent="flex-end" marginTop={2}>
              <Button colorScheme="twitter" size="sm">
                Tweet
              </Button>
            </Flex>
          </Box>
          <Divider />
          <VStack spacing={0} divider={<Divider />}>
            <Tweet username="John Doe" handle="johndoe" content="Just setting up my twttr" avatar="https://images.unsplash.com/photo-1646837279851-71a9b28b87c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2huJTIwZG9lJTIwYXZhdGFyfGVufDB8fHx8MTcxMDA2Njk4OHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Tweet username="Jane Smith" handle="janesmith" content="Hello Twitter! #myfirstTweet" avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYW5lJTIwc21pdGglMjBhdmF0YXJ8ZW58MHx8fHwxNzEwMDY2OTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            {/* More tweets */}
          </VStack>
        </VStack>

        {/* Widgets */}
        <VStack align="start" spacing={4} marginLeft={4} width="300px">
          <Input placeholder="Search Twitter" />
          {/* Trends, Who to follow, etc. */}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
