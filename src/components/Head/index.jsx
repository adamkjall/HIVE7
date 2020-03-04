import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ description, image, lang, prerenderStatusCode, title, type, url }) => {
  // config.application.baseUrl will be a fallback
  // if an URL scheme (protocol, hostname and optional port) is provided as url and/or image.url
  // it will not be overriden by the config one (useful to define external links)
  const PAGE_URL = new URL(url, process.env.APP_BASE_URL);
  const IMAGE_URL = image && image.url ? new URL(image.url, process.env.APP_BASE_URL) : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <link rel="canonical" content={PAGE_URL.href} />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={PAGE_URL.href} />
      {/* <meta property="og:site_name" content="{SITE_NAME}" /> */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {IMAGE_URL && <meta property="og:image" content={IMAGE_URL.href} />}
      {image && image.width && <meta property="og:image:width" content={image.width} />}
      {image && image.height && <meta property="og:image:height" content={image.height} />}
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@{TWITTER_USERNAME}" /> */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {IMAGE_URL && <meta property="twitter:image" content={IMAGE_URL.href} />}
      {image && image.alt && <meta property="twitter:image:alt" content={image.alt} />}
      {prerenderStatusCode && (
        <meta name="prerender-status-code" content={`${prerenderStatusCode}`}></meta>
      )}
    </Helmet>
  );
};

Head.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.integer,
    height: PropTypes.integer
  }),
  lang: PropTypes.string,
  prerenderStatusCode: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string.isRequired
};

Head.defaultProps = {
  lang: 'en',
  type: 'website'
};

export default Head;
