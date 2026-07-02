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
    <div className="mt-5">
      <h1 className={`${sora.className} font-medium`}>
        {" "}
        Ticketo - Event Ticket Booking & Management Platform
      </h1>
    </div>
  );
}
