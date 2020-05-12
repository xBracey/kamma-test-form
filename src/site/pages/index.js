import React from "react";
import { Content, Header, Head, Footer, ReadMore } from "../components";
import { GlobalStyle, Background } from "../globalStyles";

export default () => (
  <Background>
    <GlobalStyle />
    <Head title={"Home Page"} />
    <Header />
    <Content>
      <h1>Kamma Holding Text</h1>
      <h3>
        Ut venenatis tellus in metus vulputate eu scelerisque. Quam adipiscing
        vitae proin sagittis nisl rhoncus mattis.
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas
        maecenas pharetra convallis. Vitae aliquet nec ullamcorper sit amet
        risus nullam eget. Sit amet nisl purus in mollis nunc sed id. Aliquam
        sem et tortor consequat id. Suspendisse faucibus interdum posuere lorem
        ipsum. Interdum varius sit amet mattis vulputate enim nulla. Nibh
        praesent tristique magna sit amet purus gravida quis blandit.
        Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
        Venenatis a condimentum vitae sapien pellentesque. Pellentesque habitant
        morbi tristique senectus et. Habitant morbi tristique senectus et netus
        et malesuada fames ac.
      </p>
      <p>
        Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
        lobortis feugiat. Ac odio tempor orci dapibus ultrices. Convallis
        convallis tellus id interdum velit laoreet id donec ultrices. In
        hendrerit gravida rutrum quisque non tellus orci ac. Molestie a iaculis
        at erat pellentesque adipiscing. Non arcu risus quis varius quam quisque
        id. Ornare suspendisse sed nisi lacus sed viverra tellus. Ultrices in
        iaculis nunc sed augue lacus viverra vitae. Ultricies mi quis hendrerit
        dolor magna eget. Blandit aliquam etiam erat velit scelerisque in. Eget
        nunc lobortis mattis aliquam faucibus purus in. Lectus mauris ultrices
        eros in. Natoque penatibus et magnis dis parturient montes nascetur
        ridiculus. Accumsan tortor posuere ac ut consequat semper viverra. Etiam
        dignissim diam quis enim lobortis scelerisque. To find out more{" "}
        <a href="https://www.kammadata.com/about/">click here</a>.
        <ReadMore />
      </p>
    </Content>
    <Footer />
  </Background>
);
