
import tw from "tailwind-styled-components";


export const Paragrafo = tw.p`
    font-normal
    text-3xl
    leading-150
    text-hsl-210-11-15
`
export const Card = tw.div`
    w-1/3
    flex-grow
    p-6
    text-left
    bg-white
    border 
    border-solid 
    border-brand-light
    rounded-md
    
    sm:w-[580px]
    sm:ml-16

    md:w-[700px]
    lg:w-1/3
    xl:w-1/3
    
`
export const Cards = tw.div`
    flex 
    flex-row 
    flex-wrap 
    gap-16 
    text-base 
    text-center 
    overflow-auto 
    overscroll-auto

    sm:flex-col
    lg:flex-row
    xl:flex-row
    2xl:flex-row
`
export const WrapperServices = tw.div`
 
w-full
grid
mx-auto
px-2.4

`
export const H2_ = tw.h2`
mb-24
mx-auto
text-4xl
leading-[5.2rem]
text-hsl-210-11-15

sm:ml-32
md:ml-10
`

export const H4_ = tw.h4`
    text-4xl
    font-bold
    leading-[1.5]
    tracking-tighter
    text-[hsl(190, 100%, 26%)]
    uppercase
    mb-[1.6rem]

    sm:ml-[300px]
    sm:mr-[480px]

    md:ml-[300px]
    md:mr-[280px]
`