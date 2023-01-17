
import BannerButtonLight from "./Button/BannerButtonLight.js";
import "./bannerlight.css"

const BannerLight = ({ imgLink, title, subtitle, bannerLogoLink }) => {
  return (
    <div className="christmasBanner">
      <img id="mainBannerImg"
        src={imgLink}
        alt=""
      ></img>

      <div className="bannerContent" >
        <h1 className="bannerTitleLight"  >{title}</h1>
        <h3 className="bannerSubtitleLight" >{subtitle}</h3>

        <BannerButtonLight />
      </div>
      
      <div className="bannerLogoLink">
        <img src={bannerLogoLink}
          alt=""></img>
      </div>

    </div>
  );
};

export default BannerLight;

