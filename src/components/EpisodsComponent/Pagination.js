import React from "react";
import Axios from "../../shared/axios";
import Button from "../../shared/Button";
import { equal } from "../../util/javascript";

const Pagination = ({ info, setAllEpisode, setInfo, setShowLoader }) => {
  const prevNext = async (btn) => {
    setShowLoader(true);
    const uelEndPoint = info[btn].split(process.env.REACT_APP_API_URL);
    const { data, statusCode } = await Axios("get", uelEndPoint[1], null);
    if (statusCode) {
      setAllEpisode(data.results);
      setInfo(data.info);
    }
    setShowLoader(false);
  };
  const paginationButton = [
    {
      btnName: "Previous",
      onClick: () => prevNext("prev"),
      disabled: equal(info.prev, null),
    },
    {
      btnName: "Next",
      onClick: () => prevNext("next"),
      disabled: equal(info.next, null),
    },
  ];
  return paginationButton.map(({ onClick, btnName, disabled }, i) => (
    <Button onClick={onClick} key={i} disabled={disabled}>
      {btnName}
    </Button>
  ));
};

export default Pagination;
