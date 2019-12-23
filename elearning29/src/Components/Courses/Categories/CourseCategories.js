import React, { Component } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { connect } from "react-redux";
import { setCourseCategories } from "../../../Redux/Action/Action";

class CourseCategories extends Component {
  render() {
    return (
      <div className="tab-content course__tab">
        <div
          className="tab-pane fade show active"
          id={this.props.choosenCategories}
          role="tabpanel"
        >
          <div className="row course__items">
            {/* Course Item */}
            {this.props.courseCategories.map((item, index) => {
              return <CourseItem item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
  // hàm chạy đầu tiên sau khi render giao diện: fetch dữ liệu của category về
  // category sét cứng là FrontEnd
  componentDidMount() {
    const categoriesId = this.props.choosenCategories;
    // console.log(this.props.choosenCategories);
    this.props.dispatch(setCourseCategories(categoriesId));
  }
}

const mapStateToProps = state => {
  return {
    courseCategories: state.CourseCategories.courseCategories,
    choosenCategories: state.CourseCategories.choosenCategories
  };
};

export default connect(mapStateToProps, null)(CourseCategories);