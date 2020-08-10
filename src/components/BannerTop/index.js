import React from "react";

import * as Styled from "./styles";

import MenuTop from "~/components/MenuTop";

function BannerTopo({ setModal, setActiveItem }) {
  return (
    <>
      <MenuTop setModal={setModal} setActiveItem={setActiveItem} />
      <Styled.BannerTop>
        <span>
          <h2>Unidos somos capazes de mais sorrisos.</h2>
          <p>Sorria mais com Unificar!</p>
          <a
            onClick={() => {
              setModal(true);
              setActiveItem(2);
            }}
          >
            Faça parte do clube!
          </a>
        </span>
      </Styled.BannerTop>
    </>
  );
}

export default BannerTopo;
