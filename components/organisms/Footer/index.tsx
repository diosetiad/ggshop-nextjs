import React from "react";
import Image from "next/image";
import FooterItem from "../../molecules/FooterItem";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={40} height={40} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                GGShop membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  sub1="About Us"
                  sub2="Press Release"
                  sub3="Terms of Use"
                  sub4="Privacy & Policy"
                />
                <FooterItem
                  title="Support"
                  sub1="Refund Policy"
                  sub2="Unlock Rewards"
                  sub3="Live Chatting"
                />
                <FooterItem
                  title="Connect"
                  sub1="ggshop"
                  sub2="cs@ggshop.com"
                  sub3="Pasific 12, Jakarta Selatan"
                  sub4="021 - 1122 - 9090"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
