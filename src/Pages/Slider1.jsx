import Carousel from "framer-motion-carousel";
import "./slider.css";

function Slider1() {
  let data = [
    {
      img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660248117/o1bsorkwpenlkl7rpaly.png",
      des: "Learn how entrepreneurs can use equity crowdfunding to access more capital after their Indiegogo campaign.",
      name: "Indiegogo & StartEngine Team Up to Help Entrepreneurs Raise More Capital",
      info: "Learn More",
      info1: "FEATURED",
    },
    {
      img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1661187308/pkhdopfykl3swqaxjsja.png",
      des: "The beautiful, premium charging cables & powerhouse power banks for the rest of us",
      name: "Last Charging Cable & Power Bank You'll Ever Need?",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
    {
      img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660839657/winojhxm0vkkiiuexafr.jpg",
      des: "World's Cleanest Robot with Wet Dry Vac",
      name: "Smartmi A1",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
    {
      img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660332982/k1bskhh7fnjljde4pjlm.jpg",
      des: "The Bar Experience You Take With You",
      name: "Cooler Keg",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
  ];

  return (
    <>
      <div className="container">
        <Carousel interval={5000}>
          {data?.map((item, i) => (
            <div className="showing">
              <img
                draggable="false"
                src={item.img}
                key={i}
                alt="gsds"
              />
              <div className="showing-info">
              <p className="info1">{item.info1}</p>
              <h5 className="name">{item.name}</h5>
              <p className="des">{item.des}</p>
              <p className="info">{item.info}</p>
              <p className="count">{`${i} / 4`}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default Slider1;
