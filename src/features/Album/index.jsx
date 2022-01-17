import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlubmFeature.propTypes = {};

function AlubmFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Nhà nhà nghe gì ?",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/a/7/9/da791871c6f665fcc7591a36592a8fc9.jpg",
    },
    {
      id: 2,
      title: "Tết 50: Zing Choice",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/a/e/f/5/aef5c19d03cf90660957b3f673d6cd15.jpg",
    },
    {
      id: 3,
      title: "Rap việt thế hệ trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/3/d/c/b3dc8485b1bf4243791545a2d3bae4a8.jpg",
    },
    {
      id: 4,
      title: "Rap việt thế hệ trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/3/d/c/b3dc8485b1bf4243791545a2d3bae4a8.jpg",
    },
    {
      id: 5,
      title: "Rap việt thế hệ trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/3/d/c/b3dc8485b1bf4243791545a2d3bae4a8.jpg",
    },
  ];
  return (
    <div>
      <h3>Alubum List</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlubmFeature;
