import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 2rem;
`;

const Input = styled(Field)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #61dafb;
  border: none;
  cursor: pointer;
`;

const ProxyForm = () => {
  const initialValues = {
    proxy1: "",
    proxy2: "",
    proxy3: "",
    proxy4: "",
    proxy5: "",
  };

  const validationSchema = Yup.object({
    proxy1: Yup.string().required("Required"),
    proxy2: Yup.string().required("Required"),
    proxy3: Yup.string().required("Required"),
    proxy4: Yup.string().required("Required"),
    proxy5: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post("/api/proxies", values)
      .then((response) => {
        console.log("Proxies saved", response);
      })
      .catch((error) => {
        console.error("There was an error saving the proxies!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input type="text" name="proxy1" placeholder="Proxy 1" />
            <ErrorMessage name="proxy1" component="div" />
            <Input type="text" name="proxy2" placeholder="Proxy 2" />
            <ErrorMessage name="proxy2" component="div" />
            <Input type="text" name="proxy3" placeholder="Proxy 3" />
            <ErrorMessage name="proxy3" component="div" />
            <Input type="text" name="proxy4" placeholder="Proxy 4" />
            <ErrorMessage name="proxy4" component="div" />
            <Input type="text" name="proxy5" placeholder="Proxy 5" />
            <ErrorMessage name="proxy5" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Save Proxies
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProxyForm;
