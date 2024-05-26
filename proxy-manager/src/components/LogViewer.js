import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LogContainer = styled.div`
  padding: 2rem;
`;

const LogEntry = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #e8e8e8;
`;

const LogViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/logs")
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the logs!", error);
      });
  }, []);

  return (
    <LogContainer>
      {logs.map((log, index) => (
        <LogEntry key={index}>
          {log.client_ip} > {log.master_proxy_ip} > {log.proxy_ip} >{" "}
          {log.timestamp}
        </LogEntry>
      ))}
    </LogContainer>
  );
};

export default LogViewer;
