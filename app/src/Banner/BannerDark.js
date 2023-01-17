
import BannerButtonDark from "./Button/BannerButtonDark";
import "./bannerdark.css"

const BannerDark = ({ imgLink, title, subtitle }) => {
  return (
    <div className="christmasBanner">
      <img
        src={imgLink}
        alt=""
      ></img>
      <div className="bannerContent" >
        <h1 className="bannerTitle"  >{title}</h1>
        <h3 className="bannerSubtitle" >{subtitle}</h3>
        <BannerButtonDark />
      </div>

    </div>
  );
};

export default BannerDark;
