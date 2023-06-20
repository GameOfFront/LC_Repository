import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
grid 
grid-cols-1 
gap-6.7rem 
max-w-[112rem] 
mx-auto 
px-[2.4rem]
py-60

2xl:grid-cols-2
`

export const Col_IMG = tw.div`

sm:pt-8 
sm:pl-36

md:pl-64

lg: order-last
lg:pl-[280px]

2xl:order-last 
2xl:pt-48
`

export const Img = tw.img`
w-full
max-w-[400px]


`

export const Col_Texto = tw.div`
order-first 
md:order-last
md:pt-16

lg:order-first
2xl:order-last
`

export const AboutUs = tw.h4`


 sm:text-center
 lg: font-semibold mb-2 text-5xl
 2xl:font-semibold 
 2xl:mb-2 
 2xl:text-4xl
`

export const AboutText = tw.h4`


sm:text-center

lg: text-3xl font-semibold

2xl:text-3xl 
2xl:font-bold
`

export const BlocoText = tw.div`
mt-6


`

export const Paragrafo = tw.p`

text-4xl

sm:text-center
md:pt-24

2xl:text-4xl
`