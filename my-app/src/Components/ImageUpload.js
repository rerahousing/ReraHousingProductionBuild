import React, { useContext, useState, useEffect } from "react";
import PropertyContext from "../Context/Property/PropertyContext";
import axios from "axios";

function ImageUpload(props) {
  const context = useContext(PropertyContext);
  const { property, getProperty, addProperty } = context;
  const [image, setImage] = useState([]);
  const { formData } = props;
  useEffect(() => {
    getProperty();
  }, []);

  const submitImage = (e) => {
    e.preventDefault();

    Array.from(image).forEach((item) => {
      formData.append("imgCollection[]", item);
    });
    addProperty(formData);
  };

  return (
    <div className="container">
      <div className="row">
        <form>
          <h3>React Multiple File Upload</h3>
          <div className="form-group">
            <input
              type="file"
              multiple
              onChange={(e) => {
                console.log(e.target.files);
                setImage(e.target.files);
              }}
            />
          </div>
          {Array.from(image).map((item) => {
            return (
              <span>
                <img src={item ? URL.createObjectURL(item) : null} />
              </span>
            );
          })}
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={submitImage}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ImageUpload;
