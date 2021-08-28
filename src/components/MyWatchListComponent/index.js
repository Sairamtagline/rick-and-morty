import React, { useEffect, useState } from "react";
import { Col, Container, Input, Row, Table } from "reactstrap";
import Button from "../../shared/Button";
import { equal, ternary, notEqual, length, greaterThan } from "../../util/javascript";


const getData = JSON.parse(localStorage.getItem("allData")) || [];

const Index = () => {
  const [allData, setAllData] = useState(getData);
  const [item, setItem] = useState({ title: "", done: false });
  const [itemIndex, setItemIndex] = useState(0);
  const [btnName, setBtnName] = useState("Add");

  const handleAdd = () => {
    if (greaterThan(length(item.title) ,0)) {
      setAllData([...allData, item]);
      setItem({ ...item, title: "" });
      if (equal(btnName, "Edit")) {
        setAllData(
          allData.map((v, ind) =>
            ternary(equal(itemIndex, ind), { ...v, title: item.title }, v)
          )
        );
        setBtnName("Add");
      }
    }
  };

  const handleDelete = (i) => {
    setAllData(
      allData.filter((individualItem, index) => {
        return notEqual(i, index);
      })
    );
  };

  const handleEdit = (i) => {
    setBtnName("Edit");
    setItem(allData[i]);
    setItemIndex(i);
  };

  const handleCheckbox = (i) => {
    setAllData(
      allData.map((v, ind) =>
        ternary(equal(i, ind), { ...v, done: !v.done }, v)
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("allData", JSON.stringify(allData));
  }, [allData]);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="watch-list">
            <Input
              type="text"
              value={item.title}
              placeholder="Add"
              onChange={(e) => setItem({ ...item, title: e.target.value })}
            />
            <Button onClick={handleAdd}>{btnName}</Button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="watchlist-table">
            <Table className="mt-5">
              {allData.map((v, i) => (
                <tr key={i}>
                  <td>
                    <Input
                      type="checkbox"
                      checked={allData[i].done}
                      onChange={() => handleCheckbox(i)}
                    />
                  </td>
                  <td>
                    <span>{v.title}</span>
                  </td>
                  <td className="text-end">
                    <Button onClick={() => handleEdit(i)}>Edit</Button>
                    <Button onClick={() => handleDelete(i)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
