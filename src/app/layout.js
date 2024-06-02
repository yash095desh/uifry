
import localFont from 'next/font/local'
import "./globals.css";


const clashDisplay= localFont({src:[
  {
    path:'../font/ClashDisplay-Regular.ttf',
    weight:'400',
    style : 'normal'
  },
  {
    path:'../font/ClashDisplay-Medium.ttf',
    weight:'500',
    style : 'normal'
  },
  {
    path:'../font/ClashDisplay-Bold.ttf',
    weight:'700',
    style : 'normal'
  }
]})



export const metadata = {
  title: "uifry",
  description: "Most Popular Accounting App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>{children}</body>
    </html>
  );
}
