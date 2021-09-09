import { Heading, Text, VStack } from '@chakra-ui/react';
import faker from 'faker';
import ChangingColor from '../../components/ChangingColor';

function App({ data }) {
  return (
    <VStack pt="50px" spacing="55px">
      {data.map((user) => (
        <div key={user.id}>
          <Heading fontWeight="normal">{user.name}</Heading>
          <Heading fontWeight="normal">{user.email}</Heading>
        </div>
      ))}
    </VStack>
  );
}

export default App;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
