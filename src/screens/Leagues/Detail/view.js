import React from "react";
import { Card, Row, Col } from "antd";
import get from "lodash/get";
import moment from "moment";
import { DATE_FORMAT } from "../../../utils/constants";

import Loading from "../../../Shared/Loading";

const { Meta } = Card;

const Description = ({ series }) => {
  return series.map(({ id, full_name, begin_at, end_at }) => (
    <div key={id}>
      <h4>{full_name}</h4>
      <p>
        From : {moment(begin_at).format(DATE_FORMAT)} - To :
        {moment(end_at).format(DATE_FORMAT)}
      </p>
    </div>
  ));
};

const View = ({ leagueQuery }) => {
  const { idle, errors, loading, data } = leagueQuery;

  if (idle) return <div />;
  if (errors) return <div>Error</div>;
  if (loading) return <Loading />;

  return (
    <div className="container__antd">
      <Row justify="center">
        <Col>
          <Card
            title={<h1 className="text-center">{get(data, "name", "")}</h1>}
            hoverable
            style={{ width: 600 }}
            cover={
              <img alt={get(data, "id", "")} src={get(data, "image_url", "")} />
            }
          >
            <Meta
              title={`Game : ${get(data, "videogame.name")}`}
              description={<Description series={get(data, "series", [])} />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default View;
