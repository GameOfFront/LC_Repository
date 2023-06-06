import { H1, Container2 } from "./index.js";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export const Teste = () => {
  return (
    <div>
      <Container>Hello World</Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <H1>Hello World</H1>
      <Container2>Hello World</Container2>
    </div>
  );
};
