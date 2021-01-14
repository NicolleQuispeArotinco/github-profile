import React from "react";

import { Formik, Form, Field} from "formik";

import searchIcon from "../images/searchIcon.svg";
function SearchForm(){
  return(
    <div>
      <h1>Seach Form</h1>
      <Formik>
        <Form>
          <Field type="text" />
          <button>
            <img src={searchIcon}/>
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchForm;