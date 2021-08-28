import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Axios from "../../shared/axios";
import { ternary } from "../../util/javascript";
import Loader from "../Loader";
import EpisodeTable from "./EpisodeTable";
import Pagination from "./Pagination";

const Index = () => {
  const [allEpisode, setAllEpisode] = useState([]);
  const [info, setInfo] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const { data, statusCode } = await Axios("get", "episode", null);
      if (statusCode) {
        setAllEpisode(data.results);
        setInfo(data.info);
        setShowLoader(false);
      }
    }
    fetchData();
  }, []);
  return ternary(
    showLoader,
    <Loader />,
    <Container>
      <Row>
        <Col md={12}>
          <EpisodeTable allEpisode={allEpisode} />
          <div className="pagination"></div>
          <div className="text-end">
            <Pagination
              info={info}
              setAllEpisode={setAllEpisode}
              setInfo={setInfo}
              setShowLoader={setShowLoader}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
