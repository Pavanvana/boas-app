import React, { useState } from "react";

import TextField from "../../common/TextField/TextField";
import Button from "../../common/Button/Button";
import {
  boasImageURLs,
  socialMediaImages,
  supportedPaymentMethodsImages,
} from "../../constants/imageURL";

import {
  subscribeHeaderClass,
  footerTopClass,
  subscribeDescriptionClass,
  subscribeButtonClass,
  footerBottomContainerClass,
  boasLogoClass,
  footerTextClass,
  footerSectionsClass,
  aboutBoasClass,
  downloadAppClass,
  supportedPaymentMethodsClass,
} from "./styles";
import "./index.css";

const Footer = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");

  const renderFooterTopSection = (): React.ReactElement => (
    <div className={footerTopClass}>
      <div className="w-full">
        <h3 className={subscribeHeaderClass}>Subscribe to our newsletter.</h3>
        <p className={subscribeDescriptionClass}>
          We will send you updates and sustainability news
        </p>
      </div>
      <div className="flex items-center max-[800px]:flex-col max-[800px]:items-start">
        <TextField
          value={email}
          onChange={setEmail}
          placeholder="Email Address"
          className="mr-2 p-[12px_15px_12px_15px] font-sans max-[500px]:pl-[0px]"
        />
        <Button
          buttonText="Subscribe"
          onClick={() => {}}
          size="large"
          className={subscribeButtonClass}
        />
      </div>
    </div>
  );

  const renderFooterBottomSection = (): React.ReactElement => (
    <div className={footerBottomContainerClass}>
      <div className="flex max-[800px]:flex-col items-start justify-start w-full">
        <div className={footerSectionsClass}>
          <img
            src={boasImageURLs.boasLogo}
            alt="boas logo"
            className={boasLogoClass}
          />
          <p className={footerTextClass}>You've made it to the end!</p>
          <p className={footerTextClass}>
            Thanks for taking the time. If you're here because you're lost, feel
            free to{" "}
            <a href="/pages/contact-us" className="no-underline text-[#3272B7]">
              contact us
            </a>{" "}
            and we'll get you back on track.
          </p>
        </div>
        <div className={footerSectionsClass}>
          <h3 className={aboutBoasClass}>ABOUT BOAS</h3>
          <ul>
            <li>
              <a href="/pages/mission">Mission</a>
            </li>
            <li>
              <a href="/pages/sustainability">Sustainability</a>
            </li>
            <li>
              <a href="/a/faq">FAQ</a>
            </li>
            <li>
              <a href="/pages/contact-us">Contact</a>
            </li>
            <li>
              <a href="/blogs/nieuws">Blog</a>
            </li>
            <li>
              <a href="/pages/team">Team</a>
            </li>
            <li>
              <a href="/pages/careers">Careers</a>
            </li>
            <li>
              <a href="/pages/shipping-and-returns">Shipping &amp; Returns</a>
            </li>
          </ul>
        </div>
        <div className={footerSectionsClass}>
          <h3 className="mb-[12px] text-[34px] font-sans">Brands and Press</h3>
          <ul>
            <li>
              <a href="/pages/sell">Sell on BOAS</a>
            </li>
            <li>
              <a href="/pages/brands">All Brands</a>
            </li>
            <li>
              <a href="/pages/press">Press</a>
            </li>
            <li>
              <a href="/pages/affiliate">Affiliate Program</a>
            </li>
          </ul>
        </div>
        <div className={footerSectionsClass}>
          <h3 className={downloadAppClass}>Download the BOAS app</h3>
          <div className="flex items-center gap-[20px]">
            <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
              <img src={boasImageURLs.appGooglePlay} alt="App google-play" />
            </a>
            <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
              <img src={boasImageURLs.appStore} alt="App appStore" />
            </a>
          </div>
        </div>
      </div>
      <div className="supported-payment-methods">
        <h3 className={supportedPaymentMethodsClass}>
          Supported Payment Methods
        </h3>
        <div className="supported-payment-list">
          <img src={supportedPaymentMethodsImages.dealPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.amazonPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.paypalPayment} alt="logo" />
          <img
            src={supportedPaymentMethodsImages.masterCardPayment}
            alt="logo"
          />
          <img src={supportedPaymentMethodsImages.klarnaPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.visaPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.shoppayPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.gPayPayment} alt="logo" />
          <img src={supportedPaymentMethodsImages.amxPayment} alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="privacy-and-terms-div">
          <p className="py-[15px]">
            <a href="https://shop.boas.co/pages/privacy-policy">
              Privacy Policy&nbsp;&nbsp;&nbsp;
            </a>
            <a href="https://shop.boas.co/pages/terms-conditions">
              &nbsp;&nbsp;&nbsp;Terms and Conditions
            </a>
          </p>

          <p className="copyright">Copyright © 2022 BOAS Marketplace</p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/BOASgoods/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-tiktok" aria-hidden="true">
                <div className="social-icons-logo">
                  <img
                    src={socialMediaImages.facebook}
                    alt="test"
                    className="social-logo"
                  />
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/boas.good/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-tiktok" aria-hidden="true">
                <div className="social-icons-logo">
                  <img
                    src={socialMediaImages.instagram}
                    alt="test"
                    className="social-logo"
                  />
                </div>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@boas.good"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-tiktok" aria-hidden="true">
                <div className="social-icons-logo">
                  <img
                    src={socialMediaImages.tickTock}
                    alt="test"
                    className="social-logo"
                  />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/boas-good"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-tiktok" aria-hidden="true">
                <div className="social-icons-logo">
                  <img
                    src={socialMediaImages.linkedIn}
                    alt="test"
                    className="social-logo"
                  />
                </div>
              </div>
            </a>

            <a
              href="https://open.spotify.com/show/58n1Z5bfAfQDB9xIbzYzHX?si=f204bc31215544e9"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-tiktok" aria-hidden="true">
                <div className="social-icons-logo" id="spotify-logo">
                  <img
                    src={socialMediaImages.spotify}
                    alt="test"
                    className="social-logo"
                  />
                </div>
              </div>
            </a>
            <a
              href="https://youtube.com/@BOASGOOD?si=VGKpSJFBg_cQFQsn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fab fa-youtube" aria-hidden="true">
                <img
                  src={socialMediaImages.youTube}
                  alt="youtube"
                  className="youtube-logo"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-[50px_0px_10px_0px]" id="footer">
      {renderFooterTopSection()}
      {renderFooterBottomSection()}
    </div>
  );
};

export default Footer;
