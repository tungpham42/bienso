import React, { useState } from "react";
import provinces from "../data/provinces";
import { Container, Form, Table, Alert } from "react-bootstrap";

const SearchApp = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = (value) => {
    setSearch(value);
    const matchedProvince = provinces.find(
      (item) => item.code === value.trim()
    );
    setResult(matchedProvince || { province: "Không tìm thấy mã này!" });
  };

  return (
    <Container className="mt-5 col-md-6 col-sm-8 col-xs-12">
      <h1 className="text-center">Tra cứu tỉnh thành theo biển số</h1>
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Nhập mã biển số:</Form.Label>
          <Form.Control
            type="number"
            min={11}
            max={99}
            size="lg"
            placeholder="VD: 01, 02..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch(e.target.value);
              }
            }}
          />
        </Form.Group>
      </Form>
      {result && (
        <div className="mt-4">
          {result.province === "Không tìm thấy mã này!" ? (
            <Alert variant="danger">{result.province}</Alert>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mã biển số</th>
                  <th>Tỉnh thành</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{search}</td>
                  <td>{result.province}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </div>
      )}
    </Container>
  );
};

export default SearchApp;
