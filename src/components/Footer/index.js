import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container, Row, Col, UncontrolledTooltip} from 'reactstrap'
import {Link} from 'gatsby'

import logo from '../../../static/img/snowball-logo-blue.png'
import facebookIcon from '../../../static/img/facebook_blue.png'
import linkedinIcon from '../../../static/img/linkedin_blue.png'
import twitterIcon from '../../../static/img/twitter_blue.png'
import wechatIcon from '../../../static/img/wechat_blue.png'
import qrCode from '../../img/wechat-english.jpg'

function Footer(props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 800)
  }, [])

  const changeZIndex = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      const footer = document.getElementById('footer')
      if (footer) {
        footer.style.zIndex = '-1'
      }
    } else {
      const footer = document.getElementById('footer')
      if (footer) {
        footer.style.zIndex = '-2'
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeZIndex)

    return () => {
      window.removeEventListener('scroll', changeZIndex)
    }
  }, [])

  if (!show) return null

  return (
    <StyledFooter id="footer" className="">
      <StyledContainer className="justify-content-between d-flex flex-column py-5">
        <Row className="w-100 justify-content-between my-3">
          <Col md={6}>
            <Row>
              <Col md={4} className="mb-3">
                <div>
                  <img src={logo} alt="" style={{maxHeight: '50px', maxWidth: '125px'}} />
                </div>
              </Col>
              <Col xs={4}>
                {props.firstRowLinks ? (
                  props.firstRowLinks.map(link => (
                    <StyledLink to={link.href} key={`firstRow-${link.name}`}>
                      <p className="mb-1">{link.name}</p>
                    </StyledLink>
                  ))
                ) : (
                  <>
                    <StyledLink to="/about">
                      <p className="mb-1">About</p>
                    </StyledLink>
                    <StyledLink to="/how-it-works">
                      <p className="mb-1">How it works</p>
                    </StyledLink>
                    <StyledLink to="/download">
                      <p className="mb-1">Downloads</p>
                    </StyledLink>
                  </>
                )}
              </Col>
              <Col xs={4}>
                {props.secondRowLinks ? (
                  props.firstRowLinks.map(link => (
                    <StyledLink to={link.href} key={`firstRow-${link.name}`}>
                      <p className="mb-1">{link.name}</p>
                    </StyledLink>
                  ))
                ) : (
                  <>
                    <StyledLink to="/blog">
                      <p className="mb-1">Blog</p>
                    </StyledLink>
                    <StyledLink to="/risk-disclosure">
                      <p className="mb-1">Risk Disclosure</p>
                    </StyledLink>
                    <StyledLink to="/faq">
                      <p className="mb-1">FAQs</p>
                    </StyledLink>
                    <StyledLink to="/contact">
                      <p className="mb-1">Contact</p>
                    </StyledLink>
                  </>
                )}
              </Col>
            </Row>
          </Col>

          <Col md={4}>{/* <h2>Hellew</h2> */}</Col>
        </Row>

        <Row className="my-3">
          <Col md={4} sm={12} className="ml-auto">
            <Row className="w-100">
              <Col className="text-right">
                <UncontrolledTooltip
                  placement="top"
                  target="weChatIcon"
                  style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}
                >
                  <img
                    src={qrCode}
                    alt="qr"
                    style={{height: '100px', width: '100px'}}
                    className="m-0"
                  />
                </UncontrolledTooltip>

                <img
                  src={wechatIcon}
                  alt=""
                  style={{maxHeight: '30px', maxWidth: '30px'}}
                  id="weChatIcon"
                  className="mr-4"
                />

                <StyledAnchor href="https://www.facebook.com/thesnowballx/" target="_blank">
                  <img
                    id="fbIcon"
                    src={facebookIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    className="mr-4"
                  />
                </StyledAnchor>
                <StyledAnchor href="https://www.linkedin.com/company/snowballx/" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    className="mr-4"
                    id="linkedInIcon"
                  />
                </StyledAnchor>

                <StyledAnchor href="https://twitter.com/thesnowball_x" target="_blank">
                  <img
                    src={twitterIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    id="twitterIcon"
                  />
                </StyledAnchor>
              </Col>
            </Row>
            <Row className="mt-3 w-100">
              <Col md={12} className="ml-auto text-right">
                <Link to="/privacy-policy" style={{color: 'black'}}>
                  <small className="mr-3" style={{fontSize: '10px', textDecoration: 'underline'}}>
                    Privacy Policy
                  </small>
                </Link>
                <Link to="/terms" style={{color: 'black'}}>
                  <small style={{fontSize: '10px', textDecoration: 'underline'}}>
                    Terms and Conditions
                  </small>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={9} className="mb-3" style={{lineHeight: 1}}>
            <StyledSmall>
              Snowball X®, 雪盈证券® are New Zealand registered trademarks of SNB Finance Holdings
              Limited (NZBN: 9429046386212) (&quot;SNB&quot;). SNB is registered on the New Zealand{' '}
              <a href="https://www.companiesoffice.govt.nz/" target="_blank">
                Financial Service Providers Register
              </a>{' '}
              (FSP: 594389). SNB’s Financial Service Providers registration can be verified on the
              Financial Service Providers Register. SNB is a member of the Financial Dispute
              Resolution Scheme, an independent dispute resolution service provider. SNB is not
              licensed by a New Zealand regulator and is not actively regulated in New Zealand.
              SNB’s registered office is at Level 5, 25 Teed Street, Newmarket, Auckland 1023, New
              Zealand.
              <br /> <br />
              By accessing this website and any portal within this website, you agree to and will
              comply with the terms of use, and any applicable portal terms of use.
              <br /> <br />
              The material on this website is given as information only. SNB does not provide any
              financial advice on buying, holding, or disposing of financial products. Any trading
              symbols displayed are for illustrative purposes only and are not intended to be
              recommendations or opinions.
              <br /> <br />
              Whilst the information on this website has been prepared with all reasonable care,
              SNB, its directors and officers make no representation or warranty (express or
              implied) regarding the accuracy or completeness of the information on this website and
              accept no responsibility for any errors, omissions, or service unavailability. To the
              maximum extent permitted by law, SNB, its directors and officers disclaim any
              liability arising from the use of information on this website.
              <br /> <br />
              No investment is free from risk. Returns can be positive or negative. The risk of loss
              in trading of any stock or other financial products can be substantial and it is
              possible you could receive back less money than you invest. Investors should seek
              independent and financial advice specific to their situation before making an
              investment decision. Please read through our{' '}
              <StyledLinkv2 to="risk-disclosure">Risk Disclosure</StyledLinkv2> and{' '}
              <StyledLinkv2 to="terms">Conditions</StyledLinkv2> before investing.
            </StyledSmall>
            <br />
            <StyledSmall />
          </Col>
        </Row>

        <Row className="mb-5 pb-5">
          <Col xs={12}>
            <Trademark>© 2019 Snowball X</Trademark>
          </Col>
        </Row>
      </StyledContainer>
    </StyledFooter>
  )
}

const StyledLinkv2 = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    /* p {
      opacity: 50% !important;
    } */
    color: #0056b3;
    text-decoration: underline;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: black;

  &:hover {
    /* p {
      opacity: 50% !important;
    } */
    color: #006fbb;
  }
`

const StyledAnchor = styled.a`
  &:hover {
    opacity: 50%;
  }
`

const StyledFooter = styled.footer`
  min-height: 40vh;
  background-color: #f5f5f5;
  position: fixed;
  height: 595px;
  bottom: 0;
  width: 100%;
  z-index: -2;
  padding-bottom: 20px;

  @media (max-width: 426px) {
    margin-bottom: 0px;
    padding-bottom: 0px !important;
    position: static;
    height: auto;
  }
`

const StyledContainer = styled(Container)`
  line-height: 1.1;
  padding: 50px 0 !important;
  max-width: 80% !important;
  padding-bottom: 20px;

  @media (max-width: 426px) {
    margin-bottom: 0px;
    padding-bottom: 0px !important;
  }
`

const StyledSmall = styled.small`
  line-height: 0.8;
  color: rgba(0, 0, 0, 0.8);
  font-size: 10px;
`

const Trademark = styled.small`
  font-size: 8px;
  color: #aaa;
`

export default Footer
