import * as React from 'react'

import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'

import { ColorModeSwitcher } from '@/ColorModeSwitcher'

const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router
          </Link>
        </VStack>
      </Grid>
    </Box>
  )
}

export default Home
