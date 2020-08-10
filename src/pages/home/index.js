import { useState } from "react";
import Head from "next/head";

import BannerTop from "~/components/BannerTop";
import AboutClub from "~/components/AboutClub";
import OportuniteClub from "~/components/OportuniteClub";
import FooterClub from "~/components/FooterClub";

export default function Home() {
  const [modal, setModal] = useState();

  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <Head>
        <title>UnifarClub</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div id="quem-somos"></div>
        <BannerTop
          setModal={setModal}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <AboutClub
          modal={modal}
          setModal={setModal}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <OportuniteClub />
        <FooterClub />
      </main>
    </>
  );
}
