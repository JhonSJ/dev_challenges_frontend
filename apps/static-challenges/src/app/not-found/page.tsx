import Image from "next/image";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import { Information } from "@/components";
import './page.css';

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 Challenge",
  description: "",
};

export default function NotFound() {
  return (
    <section className={`root-container ${space_mono.className}`}>
      <header className="header">404 Not found</header>

      <article className="content">
        <div className="w-full aspect-[539/447] m-auto max-w-[539px]">
          <Image
            src="/Scarecrow.png"
            alt="not-found"
            width="539"
            height="447"
            priority
            className="m-auto"
          />
        </div>

        <div className="right-section">
          <h1 className="right-section__title">I have bad news for you</h1>
          <p className="right-section__description">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="right-section__button mt-7">Back to homepage</button>
        </div>
      </article>

      <Information title="@JhonSJ" href="https://github.com/JhonSJ" />
    </section>
  );
}
