import tw from "tailwind-styled-components";

export const Logo = tw.div`
  
  sm:top-10 
  sm:left-5
  sm:m-12

  lg:ml-[90px]
  
  md:ml-[120px]
  
  xl:ml-[200px]

  2xl:top-20
  2xl:left-20 
  2xl:m-400

`;

export const DivMenu = tw.div`

  sm:gap-x-40
  sm:flex 
  sm:items-center
  sm:mx-auto
  sm:pl-[1.5rem]
  sm:min-w-[112rem]


  md:gap-x-28
  md:flex 
  md:items-center
  md:mx-auto
  md:px-6 
  md:min-w-[112rem]
  md:w-full
 
  lg:gap-x-80
  lg:flex 
  lg:items-center
  lg:mx-auto
  lg:ml-auto
  lg:px-6 
  lg:min-w-[112rem]
  lg:w-full

  2xl:flex 
  2xl:items-center 
  2xl:justify-between 
  2xl:mx-auto 
  2xl:px-6 
  2xl:min-w-[112rem] 
  2xl:w-full
`;

export const MenuUp = tw.ul`
  list-none 
  flex 
  items-center
  justify-between 
  w-60 
  gap-8 
  sm:w-40 
  md:w-52
  
  2xl:list-none
  2xl:flex
  2xl:items-center
  2xl:justify-between
  2xl:w-60
  2xl:gap-8
`;

export const Nav = tw.nav`
  bg-d7f4e6 
  flex 
  h-18 
  fixed 
  top-0 
  w-screen 
  z-50
  sm:w-96
  
  2xl:bg-d7f4e6 
  2xl:flex 
  2xl:h-18 
  2xl:fixed 
  2xl:top-0 
  2xl:w-screen 
  2xl:z-50
  
`;

