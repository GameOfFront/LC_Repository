import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Col_a = tw.div`
text-left
self-center
`
export const Col_b = tw.div`
    mt-5
`

export const Col_c = tw.div`
    flex 
    flex-row 
    p-[400px] 
    gap-0 
    w-full 
    py-16 
    mx-auto  
    border 
    bg-customBege
    rounded-md 
    justify-center ml-[14rem]
`

export const P_content = tw.p`
text-3xl leading-6 font-normal text-gray-700 mb-8

`

export const H1_HeaderA = tw.h1`
text-5xl text-customBlackColor leading-7 mb-6
`
export const H4_HeaderA = tw.h4`
text-lg font-bold leading-6 tracking-wide text-customBlueColor uppercase mb-4
`
export const HomeStyled = tw.section`
    pt-[calc(4.1rem + 7.2rem)]
    pb-0 
    pt-0
    bg-customColor
`
export const Stat = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    &:not(:first-child){
        border-left: 1px solid; 
        color:hsl(190, 100%, 26%);
    }


`
export const Wrapper = tw.div`
grid 
grid-cols-[60.5rem,1fr] 
w-[min(112rem,100%)] 
mx-auto 
px-6
`

export const HeaderColA = tw.header`
    block
`