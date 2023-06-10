import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HomeStyled = tw.section`

    sm:pt-[calc(4.1rem + 7.2rem)]
    sm:pb-7
    sm:bg-customColor

    xl:pt-[calc(4.1rem + 7.2rem)]
    xl:pb-0
    xl:pt-[10rem]
    xl:bg-customColor

    2xl:pt-[calc(4.1rem + 7.2rem)]
    2xl:pb-0
    2xl:pt-[10rem]
    2xl:bg-customColor


`

export const Wrapper = tw.div`

sm:grid
sm:grid-cols-[1fr]
sm:w-[min(112rem,100%)] 
sm:mx-auto
sm:px-6

xl:grid-cols-[1fr]
xl:grid
xl:w-[min(112rem,100%)] 
xl:mx-auto
xl:px-6


2xl:grid
2xl:grid-cols-[60.5rem,1fr]
2xl:w-[min(112rem,100%)] 
2xl:mx-auto
2xl:px-6


`

export const Col_a = tw.div`
sm:mt-20
lg:mt-auto



2xl:text-left
2xl:self-center
2xl:pr-96


`
export const Col_b = tw.div`
    
    sm:mt-20
    sm:ml-72
    sm:w-96
    sm:h-auto

    md:ml-96
    
    lg:mt-20
    lg:ml-[390px]
    lg:w-96
    lg:h-auto

    2xl:mt-20
    2xl:ml-[90px]
    2xl:w-96
    2xl:h-auto


`
export const Col_c = tw.div`
    sm:flex-col
    sm:ml-auto
    sm:p-4
    sm:py-8
    sm:rounded
    sm:flex
    sm:w-full
    sm:mt-20
    sm:bg-customBege

    2xl:flex 
    2xl:flex-row 
    2xl:p-[400px] 
    2xl:gap-0 
    2xl:w-full 
    2xl:py-16 
    2xl:mx-auto  
    2xl:border 
    2xl:bg-customBege
    2xl:rounded-md 
    2xl:justify-center
    2xl:ml-[14rem]
    
    md:flex-row
    

    
`

export const HeaderColA = tw.header`
    
    sm:items-center
    2xl:block
`

export const H1_HeaderA = tw.h1`
sm:text-center
sm:mt-20
sm:text-4xl 
sm:text-customBlackColor 
sm:leading-7 
sm:mb-6


2xl:text-4xl 
2xl:text-customBlackColor 
2xl:leading-7 
2xl:mb-6
`

export const H4_HeaderA = tw.h4`
sm:text-center
sm:text-3xl
sm:mt-20
sm:font-bold 
sm:leading-6 
sm:tracking-wide 
sm:text-customBlueColor 
sm:uppercase 
sm:mb-4



2xl:text-3xl 
2xl:font-bold 
2xl:leading-6 
2xl:tracking-wide 
2xl:text-customBlueColor 
2xl:uppercase 
2xl:mb-4
`

export const P_content = tw.p`


sm:text-center
sm:mt-14
sm:text-3xl 
sm:leading-6 
sm:font-normal 
sm:text-gray-700 
sm:mb-8


2xl:text-3xl 
2xl:leading-6 
2xl:font-normal 
2xl:text-gray-700 
2xl:mb-8

`

export const Stat = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    &:not(:first-child){
        border-left: 1px solid; 
        color:hsl(190, 100%, 26%);
    }

    @media (min-width: 640px) {
        margin-top: 20px;
        &:not(:first-child){
            border-left: none;
            color:hsl(190, 100%, 26%);
        }
    }

    @media (min-width: 768px) {
        margin-top: 20px;
        &:not(:first-child){
            border-left: 1px solid; 
            color:hsl(190, 100%, 26%);
        }
    }
    @media (min-width:1024px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        &:not(:first-child){
            border-left: 1px solid; 
            color:hsl(190, 100%, 26%);
        }
    }

`


