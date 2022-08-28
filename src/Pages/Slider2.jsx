import { useEffect } from "react";
import { useState } from "react";
import { Progress, Button } from "@chakra-ui/react";
import "./slider2.css";

function Slider2() {
  const data1 = [
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/zda3vycwoollgmtpgzo3",
      title1: "G7 HAUL PACK",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/i4c0j3coodlmaau6qnmv",
      title1: "The Ghosts of Matecumbe Key",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/upyge4svxsgyakz7gthj",
      title1: "CRIMSON RHEN Vol. 1 GN from Clownfish Studios",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/flwsvqbo75vq2e3uzjtf",
      title1: "Taskin FLYT Expandable Travel Backpack",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/s4fyy16n0pu0jd2ciija",
      title1: "CRIMSON RHEN Vol. 1 GN from Clownfish Studios",
      des1: "Wesley Snipes returns to comics with a sci-fi/noir tale. Get the exclusive variant cover here!",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/k4x7oj7ffwmkd0e6kjvw",
      title1: "The Get Right Band's Concept Album!",
      des1: "We're making a concept album and we would love and appreciate your help bringing it to life!",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/ltss6zqeyprj8jojgnuj",
      title1: "G7 HAUL PACK",
      des1: "Wesley Snipes returns to comics with a sci-fi/noir tale. Get the exclusive variant cover here!",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/oqksggleeccnu48ulpgr",
      title1: "INVADER Pre-Order Campaign!",
      des1: "Get your copies of INVADER, Chameleon, Passing Notes & additional perks!",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/flwsvqbo75vq2e3uzjtf",
      title1: "G7 HAUL PACK",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/s4fyy16n0pu0jd2ciija",
      title1: "G7 HAUL PACK",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/k4x7oj7ffwmkd0e6kjvw",
      title1: "G7 HAUL PACK",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
    {
      img1: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/ltss6zqeyprj8jojgnuj",
      title1: "G7 HAUL PACK",
      des1: "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
      info1: "Travel & Outdoors",
      price: `$28,994`,
      raised: `${(Math.random() * 100).toFixed(2)}` + "%",
      days: `${(Math.random() * 50).toFixed(0)}`,
    },
  ];
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(1);
  const [count2, setcount2] = useState(2);
  const [count3, setcount3] = useState(3);
  const handlenext = () => {
    if (count3 === 11) {
      return setcount(0), setcount1(1), setcount2(2), setcount3(3);
    }
    setcount(count + 4);
    setcount1(count1 + 4);
    setcount2(count2 + 4);
    setcount3(count3 + 4);
  };
  const handlepre = () => {
    if (count === 0) {
      return setcount(0), setcount1(1), setcount2(2), setcount3(3);
    }
    setcount(count - 4);
    setcount1(count1 - 4);
    setcount2(count2 - 4);
    setcount3(count3 - 4);
  };
  // console.log(count, count1, count2, count3);
  return (
    <>
      <h2 className="PopularProjects">Popular Projects</h2>
      <div className="displayslider">
        <button
          className="prenex1"
          disabled={count === 0}
          bg="red"
          onClick={handlepre}
        >
          <img src="https://img.icons8.com/metro/72/less-than.png" alt="" />
        </button>
        <button className="prenex2" bg="red" onClick={handlenext}>
          <img src="https://img.icons8.com/metro/72/more-than.png" alt="" />
        </button>
        <div className="slider2Container">
          <img className="avatar" src={data1[count]?.img1} alt="" />
          <div className="featuring">
            <h4>FEATURED</h4>
            <img
              src="https://img.icons8.com/material-outlined/2x/filled-like.png"
              alt=""
            />
          </div>
          <div className="information">
            <p>{data1[count]?.title1}</p>
            <p>{data1[count]?.des1}</p>
          </div>
          <div className="pricecontainer">
            <h5
              style={{
                textAlign: "left",
                marginTop: "15px",
                marginBlock: "6px",
              }}
            >
              {data1[count]?.info1}
            </h5>
            <div className="pricedes">
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {data1[count]?.price}
                </p>
              </div>
              <div>{data1[count]?.raised}</div>
            </div>
            <Progress
              borderRadius={10}
              colorScheme="green"
              size="sm"
              value={data1[count]?.raised}
            />
            <div className="days">
              <img
                src="https://img.icons8.com/ios-glyphs/2x/clock--v2.gif"
                alt=""
              />
              <p>{data1[count]?.days} Days Left</p>
            </div>
          </div>
        </div>
        <div className="slider2Container1">
          <img className="avatar" src={data1[count1]?.img1} alt="" />
          <div className="featuring">
            <h4>FEATURED</h4>
            <img
              src="https://img.icons8.com/material-outlined/2x/filled-like.png"
              alt=""
            />
          </div>
          <div className="information">
            <p>{data1[count1]?.title1}</p>
            <p>{data1[count1]?.des1}</p>
          </div>
          <div className="pricecontainer">
            <h5
              style={{
                textAlign: "left",
                marginTop: "15px",
                marginBlock: "6px",
              }}
            >
              {data1[count1]?.info1}
            </h5>
            <div className="pricedes">
              <div className="pricecontainer">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {data1[count1]?.price}
                </p>
              </div>
            </div>
            <Progress
              borderRadius={10}
              colorScheme="green"
              size="sm"
              value={data1[count1]?.raised}
            />
            <div className="days">
              <img
                src="https://img.icons8.com/ios-glyphs/2x/clock--v2.gif"
                alt=""
              />
              <p>{data1[count1]?.days} Days Left</p>
            </div>
          </div>
        </div>
        <div className="slider2Container2">
          <img className="avatar" src={data1[count2]?.img1} alt="" />
          <div className="featuring">
            <h4>FEATURED</h4>
            <img
              src="https://img.icons8.com/material-outlined/2x/filled-like.png"
              alt=""
            />
          </div>
          <div className="information">
            <p>{data1[count2]?.title1}</p>
            <p>{data1[count2]?.des1}</p>
          </div>
          <div className="pricecontainer">
            <h5
              style={{
                textAlign: "left",
                marginTop: "15px",
                marginBlock: "6px",
              }}
            >
              {data1[count2]?.info1}
            </h5>
            <div className="pricedes">
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {data1[count2]?.price}
                </p>
                <p>{data1[count2]?.pricetitle}</p>
              </div>
              <div>{data1[count2]?.raised}</div>
            </div>
            <Progress
              borderRadius={10}
              colorScheme="green"
              size="sm"
              value={data1[count2]?.raised}
            />
            <div className="days">
              <img
                src="https://img.icons8.com/ios-glyphs/2x/clock--v2.gif"
                alt=""
              />
              <p>{data1[count2]?.days} Days Left</p>
            </div>
          </div>
        </div>
        <div className="slider2Container3">
          <img className="avatar" src={data1[count3]?.img1} alt="" />
          <div className="featuring">
            <h4>FEATURED</h4>
            <img
              src="https://img.icons8.com/material-outlined/2x/filled-like.png"
              alt=""
            />
          </div>
          <div className="information">
            <p>{data1[count3]?.title1}</p>
            <p>{data1[count3]?.des1}</p>
          </div>
          <div className="pricecontainer">
            <h5
              style={{
                textAlign: "left",
                marginTop: "15px",
                marginBlock: "6px",
              }}
            >
              {data1[count3]?.info1}
            </h5>
            <div className="pricedes">
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {data1[count3]?.price}
                </p>
              </div>
              <div>{data1[count3]?.raised}</div>
            </div>
            <Progress
              borderRadius={10}
              colorScheme="green"
              size="sm"
              value={data1[count3]?.raised}
            />
            <div className="days">
              <img
                src="https://img.icons8.com/ios-glyphs/2x/clock--v2.gif"
                alt=""
              />
              <p>{data1[count3]?.days} Days Left</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider2;
