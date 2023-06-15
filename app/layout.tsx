import { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata:Metadata ={
    title:"Coupons Flux",
    authors:[{name:"Umit",url:"https://www.linkedin.com/in/umit-kumar-sahoo-737060240/"}
    ,{name:"Rishav",url:""}
    ],
    description:"Free Coupons and Refund Money , Exchange Coupons for Money , Buy and Sell Coupons",
    other:{company:"CouponsFlux"}
}

export default function RootLayout({children}:{children:React.ReactNode}){
    
    return <html lang="en">
        <body >
            <Header/>
            {children}
        </body>
    </html>
}