import React, { useState } from "react";

function InputForm(props) {
  const [inputFields, setInputFields] = useState([
    { bhk: "", Price: "", Area: "", image: "" },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    setBhkDet(inputFields);
  };
  const { setBhkDet, bhkDet, setImageData } = props;

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { bhk: "", Price: "", Area: "", image: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeField = (e) => {
    e.preventDefault();
    const newField = [...inputFields];
    newField.pop();
    setInputFields(newField);
  };
  return (
    <div>
      <form>
        {inputFields.map((input, index) => {
          return (
            <div className="d-flex my-2" key={index}>
              <input
                name="bhk"
                placeholder="bhk"
                className="form-control"
                value={input.bhk}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="Price"
                placeholder="Price"
                className="form-control"
                value={input.Price}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="Area"
                className="form-control"
                placeholder="Area"
                value={input.Area}
                onChange={(event) => handleFormChange(index, event)}
              />
              <div className="form-group">
                <input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    const data = [...inputFields];
                    data[index][e.target.name] = [e.target.files];
                    setImageData(data);
                  }}
                />
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
          type="submit"
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
