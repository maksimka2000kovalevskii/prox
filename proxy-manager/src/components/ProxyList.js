import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #f4f4f4;
`;

const ProxyList = () => {
  const [proxies, setProxies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/proxies")
      .then((response) => {
        setProxies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the proxies!", error);
      });
  }, []);

  return (
    <List>
      {proxies.map((proxy, index) => (
        <ListItem key={index}>{proxy}</ListItem>
      ))}
    </List>
  );
};

export default ProxyList;
