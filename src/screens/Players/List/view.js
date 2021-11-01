import React from "react";
import { Table, Row, Col, Avatar, Divider } from "antd";
import className from "classnames";
import get from "lodash/get";
import isNil from "lodash/isNil";
import faker from "faker";
import Pagination from "../../../Shared/Pagination";
import Loading from "../../../Shared/Loading";
import Unknown from "../../../Shared/Unknown";
import { isEvenNumber } from "../../../utils/helpers";

const columns = ({ onClickTeam }) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <h2>{text}</h2>,
  },
  {
    title: "Team",
    dataIndex: "current_team",
    key: "current_team",
    render: (record) => (
      <div onClick={() => !isNil(record) && onClickTeam(record.id)}>
        {!isNil(record) && (
          <Avatar
            src={get(record, "image_url", faker.image.business())}
            size={100}
          />
        )}
      </div>
    ),
  },
  {
    title: "Game",
    dataIndex: "current_videogame",
    key: "current_videogame",
    render: (record) => <h2>{get(record, "name", "")}</h2>,
  },
];

const View = ({ playersQuery, onPageChange, page, onClickTeam }) => {
  const { idle, errors, loading, data, totalItems } = playersQuery;

  if (idle) return <div />;
  if (errors) return <Unknown />;
  if (loading) return <Loading />;

  return (
    <Row justify="center">
      <Col span={24}>
        <h1>Players</h1>
        <Divider />
        <Table
          rowKey="id"
          columns={columns({ onClickTeam })}
          rowClassName={(_, index) =>
            className({
              "table-row-dark": isEvenNumber(index),
              "table-row-light": !isEvenNumber(index),
            })
          }
          dataSource={data}
          pagination={false}
        />
        <div className="p-top-10 text-center">
          <Pagination
            current={page}
            onPageChange={onPageChange}
            total={totalItems}
          />
        </div>
      </Col>
    </Row>
  );
};

export default View;
