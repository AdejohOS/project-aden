import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeUserModal } from "@/components/modals/subscribe-user-modal";
import { NuqsAdapter } from "nuqs/adapters/next";

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home | Africa Digital Education Network (ADEN)",
  description:
    "The African Digital Education Network's core mandates include raising awareness about the benefits of digital education across Africa and sharing resources with African institutions of higher education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        <NuqsAdapter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <SubscribeUserModal />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
