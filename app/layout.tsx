import type { Metadata } from "next";
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { TooltipProvider } from "@radix-ui/react-tooltip"
import ThemeProvider from "@/components/ThemeProvider"
import "@/styles/global.css"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { FetchTokenBalanceProvider } from "@/context/FetchTokenBalance";


export const metadata: Metadata = {
  title: "The RamiCoin",
  description: `We trade Bitcoin & Gold, earn profits, and distribute to the RamiCoin holders.`,
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      url: "/meta-rami.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersData = await headers();
  const cookies = headersData.get('cookie');

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#dac7f9" />
      </head>
      <body
        className={`antialiased`}
      >
        <ContextProvider cookies={cookies}>
          <FetchTokenBalanceProvider>
            <ThemeProvider>
              <TooltipProvider>
                <div className="mx-auto max-w-screen-2xl">
                  <Nav />
                  {children}
                  <Footer />
                </div>
              </TooltipProvider>
            </ThemeProvider>
          </FetchTokenBalanceProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
