import React from "react";
import { Prism } from "@mantine/prism";

const Basics = () => {
  return (
    <section className="main">
      <nav>
        <ul>
          <li>
            <a href="/html">headings</a>
          </li>
          <li>
            <a href="/basics">Basics</a>
          </li>
        </ul>
      </nav>
      <h1>Basics</h1>
      <div className="content">
        <h2>Intro</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur¿ ʔ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
          adipisicing elit. Molestiae, officiis quasi! Recusandae vel amet aut.
          Maiores id cumque laborum, consequuntur animi, qui ad quisquam
          obcaecati harum tenetur, amet ullam nobis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          officiis quasi! Recusandae vel amet aut. Maiores id cumque laborum,
          consequuntur animi, qui ad quisquam obcaecati harum tenetur, amet
          ullam nobis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          officiis quasi! Recusandae vel amet aut. Maiores id cumque laborum,
          consequuntur animi, qui ad quisquam obcaecati harum tenetur, amet
          ullam nobis.
        </p>
        <h2>CSS</h2>
        <ul>
          <li>A CSS rule set contains a selector and a declaration block.</li>
          <li>
            A CSS rule set contains a selector and a declaration block.
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste
                blanditiis facilis error accusamus magnam nemo, odio enim? Neque
                quidem rem minus.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste
                blanditiis facilis error accusamus magnam nemo, odio enim? Neque
                quidem rem minus.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Ordered List</h2>
        <ol>
          <li>One</li>
          <li>
            Two
            <ul>
              <li>Two point one</li>
              <li>Two point Two</li>
            </ul>
          </li>
        </ol>
        <h2>Image</h2>
        <div className="imgWrapper">
          <img
            src="https://www.w3schools.com/images/mylearning.png"
            alt="img"
          />
        </div>
        <h2>Code</h2>
        <div className="codeWrapper">
          <Prism className="prism" language="tsx" colorScheme="dark">
            {`
              p {
                  color: yellow;
                  text-align: center;
                  font-size:18px
              }     
              `}
          </Prism>
        </div>
      </div>
    </section>
  );
};

export default Basics;
