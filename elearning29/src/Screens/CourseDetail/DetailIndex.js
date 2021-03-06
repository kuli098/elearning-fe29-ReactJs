import React, { Component } from "react";
import "../../sass/Page/_CourseDetail.scss";
import SocialNetwork from "./SocialNetwork";
import CourseDetail from "./DetailInfo/CourseDetail";
import CourseDetailCover from "./CourseDetailCover/CourseDetailCover";
import CourseDetailRight from "./DetailInfo/CourseDetailRight";

class DetailIndex extends Component {
  render() {
    return (
      <>
        {/* CourseDetail Cover */}
        <CourseDetailCover params={this.props.match.params} />
        {/* SocialNetwork */}
        <SocialNetwork />

        {/* CourseDetail */}
        <section className="courseDetails">
          <div className="container">
            <div className="row">
              {/* CourseDetail */}
              <CourseDetail params={this.props.match.params} />

              {/* Course Detail Right */}
              <CourseDetailRight />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailIndex;
