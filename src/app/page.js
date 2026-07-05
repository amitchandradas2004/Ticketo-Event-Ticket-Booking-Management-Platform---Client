import Frequently from "@/components/Additionals/Frequently";
import HowItWorks from "@/components/Additionals/HowItWorks";
import TrustAndProof from "@/components/Additionals/Trustandproof";
import { Inter, Sora } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div>
      <h1 className={`${sora.className} font-medium`}>
        {" "}
        Ticketo - Event Ticket Booking & Management Platform
      </h1>
      <HowItWorks/>
      <TrustAndProof/>
      <Frequently />
    </div>
  );
}
