import React, { useState, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { readDocuments } from "../Models/Firestore";
import { Helmet } from "react-helmet";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const ContentBar = ({ defaultLinkData, DefaultComponent, LinksContext, title }) => {
  const url = useLocation();
  const [content, setContent] = useState();

  const linkNow = LinksContext?.findIndex((value, index) => {
    if (defaultLinkData.link + value.url === url.pathname) return true;
    else return false;
  });
  useEffect(() => {
    readDocuments(LinksContext[linkNow]?.content_id)
      .then((res) => {
        setContent(res.data())
        title(res.data())
      })
      .catch((err) => console.log(err));
  }, [LinksContext, linkNow, title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <Helmet>
        {content ? <title>{content.title}</title> : <title>Documentation</title>}
      </Helmet>
      {url.pathname === defaultLinkData.link ? (
        <>
          <hr />
          <nav style={{ display: "flex", justifyContent: "right" }}>
            {LinksContext.length >= 1 ? (
              <Link to={defaultLinkData.link + LinksContext[0]?.url} style={{ display: "flex", alignItems: "center"}}>
                {LinksContext[0]?.label} <IoArrowForwardOutline size={'18px'} />
              </Link>
            ) : null}
          </nav>
        </>
      ) : (
        <>
          <Outlet context={content} />
          <hr />
          {LinksContext?.length >= 1 ? (
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
              {LinksContext.length >= linkNow ? (
                <Link
                  to={
                    defaultLinkData.link +
                    (LinksContext[linkNow - 1] ? LinksContext[linkNow - 1].url : "")
                  }
                  style={{ display: "flex", alignItems: "center"}}
                >
                  <IoArrowBackOutline size={'18px'} />
                  {LinksContext[linkNow - 1]
                    ? LinksContext[linkNow - 1].label
                    : defaultLinkData.label}
                </Link>
              ) : null}
              {LinksContext.length > linkNow + 1 ? (
                <Link to={defaultLinkData.link + LinksContext[linkNow + 1].url} style={{ display: "flex", alignItems: "center"}}>
                  {LinksContext[linkNow + 1].label} <IoArrowForwardOutline size={'18px'} />
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
