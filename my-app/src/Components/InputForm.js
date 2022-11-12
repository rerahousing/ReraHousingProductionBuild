import React, { useState } from "react";

function InputForm(props) {
  const [inputFields, setInputFields] = useState([
    { bhk: "", Price: "", Area: "" },
  ]);
  const [inputImage, setInputImage] = useState([]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const submit = (e) => {
    e.preventDefault();
    setBhkDet(inputFields);
    const image = [...inputImage];
    setDataImage(image);
  };
  const { setBhkDet, setDataImage } = props;

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { bhk: "", Price: "", Area: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeField = (e) => {
    e.preventDefault();
    const newField = [...inputFields];
    const newImage = [...inputImage];
    newField.pop();
    newImage.pop();

    setInputFields(newField);
    setInputImage(newImage);
  };
  return (
    <div>
      <form>
        {inputFields.map((input, index) => {
          return (
            <div className="row my-2" key={index}>
              <div className="col">
                <input
                  name="bhk"
                  placeholder="bhk"
                  className="form-control"
                  value={input.bhk}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </div>

              <div className="col">
                <input
                  name="Price"
                  placeholder="Price"
                  className="form-control"
                  value={input.Price}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </div>

              <div className="col">
                <input
                  name="Area"
                  className="form-control"
                  placeholder="Area"
                  value={input.Area}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </div>

              <div className="form-group col-12 my-2">
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                    name="image"
                    onChange={(e) => {
                      const data = [...inputImage];
                      data[index] = e.target.files[0];
                      setInputImage(data);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <button
          style={{ display: "inline" }}
          type="submit"
          className="btn btn-primary mx-2"
          onClick={addFields}
        >
          +
        </button>
        <button
          style={{ display: "inline" }}
          type="submit"
          className="btn btn-primary"
          onClick={removeField}
        >
          -
        </button>
        <button
          style={{ display: "inline" }}
          type="button"
          className="btn btn-primary mx-2"
          onClick={submit}
        >
          Add Details into DB
        </button>
      </form>
    </div>
  );
}

export default InputForm;
