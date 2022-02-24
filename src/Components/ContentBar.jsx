import React, { useState, useContext, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { readDocuments } from "../Models/Firestore";
import { Helmet } from "react-helmet";

const ContentBar = ({ defaultLinkData, DefaultComponent, LinksContext }) => {
  const url = useLocation();
  const linksData = useContext(LinksContext);
  const [content, setContent] = useState();

  const linkNow = linksData.findIndex((value, index) => {
    if (defaultLinkData.link + value.url === url.pathname) return true;
    else return false;
  });
  useEffect(() => {
    readDocuments(linksData[linkNow]?.content_id)
      .then((res) => setContent(res.data()))
      .catch((err) => console.log(err));
  }, [linksData, linkNow]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <Helmet>
        {content ? <title>{content.title}</title> : <title>App</title>}
      </Helmet>
      {url.pathname === defaultLinkData.link ? (
        <>
          {DefaultComponent}
          <hr />
          <nav style={{ display: "flex", justifyContent: "right" }}>
            {linksData.length >= 1 ? (
              <Link to={defaultLinkData.link + linksData[0]?.url}>
                {linksData[0]?.label}
              </Link>
            ) : null}
          </nav>
        </>
      ) : (
        <>
          <Outlet context={content} />
          <hr />
          {linksData?.length >= 1 ? (
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
              {linksData.length >= linkNow ? (
                <Link
                  to={
                    defaultLinkData.link +
                    (linksData[linkNow - 1] ? linksData[linkNow - 1].url : "")
                  }
                >
                  {linksData[linkNow - 1]
                    ? linksData[linkNow - 1].label
                    : defaultLinkData.label}
                </Link>
              ) : null}
              {linksData.length > linkNow + 1 ? (
                <Link to={defaultLinkData.link + linksData[linkNow + 1].url}>
                  {linksData[linkNow + 1].label}
                </Link>
              ) : null}
            </nav>
          ) : null}
        </>
      )}
    </>
  );
};

export default ContentBar;
