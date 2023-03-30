import React, { useState } from "react";
import { Prism } from "@mantine/prism";
import { HTMLData } from "../../data/html";

const HTML = () => {
  const [chapterContent, setChapterContent] = useState(HTMLData[0]);
  const [index, setIndex] = useState(0)

  const updateContent = (val, i) => {
    setIndex(i)
    setChapterContent(val)
   }

  return (
    <section className="main">
      <nav>
        <ul>
          {HTMLData.map((val, i) => {
            return (
              <li key={i} className={index === i && "active"} onClick={() => updateContent(val, i)}>
                {val.topic}
              </li>
            );
          })}
        </ul>
      </nav>
      <h1>{chapterContent.topic}</h1>
      <div className="content">
        {chapterContent?.content?.map((val, i) => {
          return (
            <div key={i}>
              <h2>{val.title}</h2>
              {val?.para &&
                val?.para?.map((para, i) => {
                  return <p key={i}>{para}</p>;
                })}

              {val?.list && (
                <ul>
                  {val?.list?.map((list, index) => {
                    return (
                      <li key={index}>
                        {list.li}
                        {list?.nestedList && (
                          <ul>
                            {list?.nestedList?.map((nestedList, i) => {
                              return <li key={i}>{nestedList}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              {val?.orderedList && (
                <ol>
                  {val?.orderedList?.map((olVal, index) => {
                    return (
                      <li key={index}>
                        {olVal.li}
                        {olVal?.nestedList && (
                          <ul>
                            {olVal?.nestedList?.map((nestedList, i) => {
                              return <li key={i}>{nestedList}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ol>
              )}
              {val.image && (
                <div className="imgWrapper">
                  <img src={val.image} alt={val.alt} />
                </div>
              )}
              {val?.code && (
                <div className="codeWrapper">
                  <Prism className="prism" language="tsx" colorScheme="dark">
                    {val.code}
                  </Prism>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HTML;
