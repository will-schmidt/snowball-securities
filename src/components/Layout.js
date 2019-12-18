import React from 'react'
import {Helmet} from 'react-helmet'
import {withPrefix} from 'gatsby'
import styled from 'styled-components'

import Footer from './Footer'
// import './global.scss'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'

const TemplateWrapper = ({children, white, stickyFooter, footerLinks}) => {
  const {title, description} = useSiteMetadata()

  return (
    <div className="h-100">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/logo.jpg`} />
      </Helmet>
      <Header white={white} />
      <StyledMain>{children}</StyledMain>
      <Footer footerLinks={footerLinks} />

      <StickyFooterCta className="container">
        <div className="row h-100" style={{borderTop: '1px solid rgba(120, 120, 120, 0.2)'}}>
          <div
            className="col-6 justify-content-center d-flex align-items-center text-primary pt-1 font-weight-bold h-100"
            style={{borderRight: '1px solid rgba(120,120,120, 0.2)'}}
          >
            OPEN ACCOUNT
          </div>
          <div
            className="col-3 d-flex justify-content-center d-flex align-items-center pt-1"
            style={{borderRight: '1px solid rgba(120,120,120, 0.2)'}}
          >
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00762743 17.1049C-0.119982 16.818 1.2839 9.26698 9.52363 3.83101C17.7634 -1.60497 24.9248 0.377578 24.9528 0.252399C24.9763 0.14731 24.9947 4.53802 25 5.9494C25.0009 6.19792 24.8214 6.41069 24.5755 6.45255C23.0899 6.70553 18.2283 7.53337 18.2283 7.53337L15.8425 5.03814C15.8425 5.03814 14.1423 5.41883 11.758 7.11307C9.37362 8.80727 7.84119 10.4437 7.84119 10.4437L9.28567 13.5748C9.28567 13.5748 7.08656 17.4801 6.3864 18.7234C6.26261 18.9433 6.00287 19.0489 5.75999 18.9782C4.39091 18.5784 0.0992409 17.3108 0.00762743 17.1049Z"
                fill="#006FBB"
              />
            </svg>
          </div>
          <div className="col-3 d-flex justify-content-center d-flex align-items-center pt-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                fill="#006FBB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 23.7805C18.73 23.7805 23.7805 18.73 23.7805 12.5C23.7805 6.26996 18.73 1.21951 12.5 1.21951C6.26993 1.21951 1.21948 6.26996 1.21948 12.5C1.21948 18.73 6.26993 23.7805 12.5 23.7805Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8186 5.48781V8.10007H6.40247V15.555H8.00895V14.7148H11.8186V19.8171H13.471V14.7148H17.296V15.555H18.9025V8.10007H13.471V5.48781H11.8186ZM7.92686 13.1098V9.7561H11.5854V13.1098H7.92686ZM13.4147 9.7561V13.1098H17.3781V9.7561H13.4147Z"
                fill="#006FBB"
              />
            </svg>
          </div>
        </div>
      </StickyFooterCta>
    </div>
  )
}

const StickyFooterCta = styled.div`
  position: sticky;
  height: 40px;
  background: white;
  bottom: 0;
  z-index: 2000;
  display: none;

  @media (max-width: 426px) {
    display: block;
  }
`

const StyledMain = styled.main`
  ${'' /* This fixes an issue with the footer not fully showing on large screen sizes */}
  margin-bottom: 580px;
  position: relative;

  @media (max-width: 550px) {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`

export default TemplateWrapper
