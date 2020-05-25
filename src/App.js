import React from "react";
import header from "./asset/header.PNG";
import footer from "./asset/footer.PNG";
import "./App.css";
import Input from "./Components/InputComponent";
import SingleDisplay from "./Components/SingleDisplayComponent";
import ListDisplay from "./Components/ListDisplayComponent";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import { changeFormState } from "./Redux/actions";
import { connect } from "react-redux";

function App(props) {
  const handleChange = (event, attribute) => {
    const data = { [attribute]: event.target.value };
    props.changeFormState(data);
  };

  const handleButtonClick = () => {
    const node = document.getElementById("result-print");
    htmlToImage.toBlob(node).then(function (blob) {
      saveAs(blob, "result.png");
    });
  };
  return (
    <div className="root">
      <div className="input-container">
        <img src={header} alt="header" className="header" />
        <div className="whole-text-outside">
          <div className="whole-text-inside">
            <Input
              key="岗位名称"
              name="岗位名称"
              handleChange={handleChange}
              value={props.title}
              attribute="title"
            />
            <Input
              key="工作地点"
              name="工作地点"
              handleChange={handleChange}
              value={props.address}
              attribute="address"
            />
            <Input
              key="公司名称"
              name="公司名称"
              handleChange={handleChange}
              value={props.name}
              attribute="name"
            />
            <Input
              key="职责描述"
              name="职责描述"
              handleChange={handleChange}
              value={props.description}
              attribute="description"
            />
            <Input
              key="工作经验"
              name="工作经验"
              handleChange={handleChange}
              value={props.workingExperience}
              attribute="workingExperience"
            />
            <Input
              key="教育背景"
              name="教育背景"
              handleChange={handleChange}
              value={props.education}
              attribute="education"
            />
            <Input
              key="联系方式"
              name="联系方式"
              handleChange={handleChange}
              value={props.contact}
              attribute="contact"
            />
            <button className="button" onClick={handleButtonClick}>
              一键生成图片
            </button>
          </div>
        </div>

        <img src={footer} alt="footer" className="footer" />
      </div>

      <div className="result-container">
        <div className="result-print" id="result-print">
          <img src={header} alt="header" className="header" />
          <div className="whole-text-outside">
            <div className="whole-text-inside">
              <h1>{props.title}</h1>
              <SingleDisplay
                key="工作地点"
                name="工作地点"
                attribute={props.address}
              />
              <SingleDisplay name="公司名称" attribute={props.name} />
              <ListDisplay
                key="职责描述"
                name="职责描述"
                attribute={props.description}
              />
              <ListDisplay
                key="工作经验"
                name="工作经验"
                attribute={props.workingExperience}
              />
              <ListDisplay
                key="教育背景"
                name="教育背景"
                attribute={props.education}
              />
              <ListDisplay
                key="联系方式"
                name="联系方式"
                attribute={props.contact}
              />
            </div>
          </div>
          <img src={footer} alt="footer" className="footer" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  address: state.address,
  name: state.name,
  description: state.description,
  workingExperience: state.workingExperience,
  education: state.education,
  contact: state.contact
});

const mapDispatchToProps = (dispatch) => ({
  changeFormState: (data) => dispatch(changeFormState(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
