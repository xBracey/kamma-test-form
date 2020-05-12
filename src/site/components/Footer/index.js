import React from "react";
import { Footer } from "./styles";

const footerMenu = [
  {
    name: "Privacy Policy",
    link: "https://www.kammadata.com/support/privacy/",
  },
  {
    name: "Terms and Conditions",
    link: "https://www.kammadata.com/support/terms/",
  },
  {
    name: "Contact",
    link: "https://www.kammadata.com/support/contact/",
  },
];

export default () => {
  const footerMenuComponent = footerMenu.map(menuItem => (
    <a href={menuItem.link} key={menuItem.name}>
      {menuItem.name}
    </a>
  ));

  return (
    <Footer>
      <p>© Kamma 2020</p>
      {footerMenuComponent}
    </Footer>
  );
};
