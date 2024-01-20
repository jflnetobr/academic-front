import React from 'react'

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  OrderedList,
  ListItem,
  Link,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  useMediaQuery,
} from '@chakra-ui/react'

import Carousel from '@/components/Carousel'
import Header from '@/components/Header'

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Stack>
      <Header />
      <Stack minH="100vh" gap={8} px={{ base: 6, md: 12 }} py={6} bg="#E1E6FC">
        <Flex p={8} rounded="lg" bg="#FBFBFB" boxShadow="lg">
          <Carousel
            dots
            arrows={!isMobile}
            fade
            infinite
            autoplay
            speed={500}
            autoplaySpeed={5000}
          >
            {[0, 1, 2, 3].map((index) => (
              <Flex
                key={index}
                display="flex !important"
                align="center"
                justify="center"
                height={['300px', '400px']}
                bg="gray.400"
              >
                <Box>{index}</Box>
              </Flex>
            ))}
          </Carousel>
        </Flex>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Stack
            w="full"
            boxShadow="lg"
            rounded="lg"
            p={4}
            bg="#FBFBFB"
            flex={7}
          >
            <Text fontSize="lg" fontWeight="semibold" color="#444A63">
              Formulário de Ouvidoria
            </Text>
            <FormControl id="assunto">
              <FormLabel color="#444A63">Assunto</FormLabel>
              <Input
                type="text"
                borderColor="gray.400"
                placeholder="Here is a sample placeholder"
              />
            </FormControl>
            <FormControl id="conteudo">
              <FormLabel color="#444A63">Conteúdo</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                borderColor="gray.400"
                minH="150px"
              />
            </FormControl>
          </Stack>
          <Stack
            w="full"
            boxShadow="lg"
            rounded="lg"
            p={4}
            bg="#FBFBFB"
            flex={3}
          >
            <Text fontSize="lg" fontWeight="semibold" color="#444A63">
              Tutoriais
            </Text>
            <OrderedList>
              {[0, 1, 2, 3, 4].map((index) => (
                <ListItem key={index}>
                  <Link
                    color="teal.500"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    Tutorial {index + 1}
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
          </Stack>
        </Stack>
        <Stack w="full" boxShadow="lg" rounded="lg" p={4} bg="#FBFBFB">
          <Text fontSize="lg" fontWeight="semibold" color="#444A63">
            Calculadora IC
          </Text>
          <Tabs isFitted>
            <TabList>
              <Tab
                _selected={{
                  color: '#495796',
                  borderBottomColor: '#495796',
                }}
              >
                Nota Final
              </Tab>
              <Tab
                _selected={{
                  color: '#495796',
                  borderBottomColor: '#495796',
                }}
              >
                Faltas
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justify="center" gap={3}>
                  <Flex direction="column" w={{ base: '100%', md: '50%' }}>
                    <FormControl id="ab1">
                      <FormLabel color="#444A63">Nota AB1</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                    <FormControl id="ab2">
                      <FormLabel color="#444A63">Nota AB2</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                    <FormControl id="ab1">
                      <FormLabel color="#444A63">Nota Reav</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justify="center" gap={3}>
                  <Flex direction="column" w={{ base: '100%', md: '50%' }}>
                    <FormControl id="ab1">
                      <FormLabel color="#444A63">Disciplina</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                    <FormControl id="ab2">
                      <FormLabel color="#444A63">C.H.T</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                    <FormControl id="ab1">
                      <FormLabel color="#444A63">C.H.D</FormLabel>
                      <Input
                        type="number"
                        borderColor="gray.400"
                        placeholder="Here is a sample placeholder"
                        min={0}
                        max={10}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home
