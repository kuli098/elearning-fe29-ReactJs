// import { FETCH_COURSE_CATEGORIES } from "../Action/Type";
import {
  FETCH_CATEGORIES,
  FETCH_COURSE_CATEGORIES,
  FETCH_ALL_COURSES,
  FETCH_COURSE_DETAIL,
  FETCH_COURSE_PAGE
} from "../Action/Type";

const initialState = {
  categoriesList: [],
  courseCategories: [],
  courseList: [],
  choosenCategories: "BackEnd",
  courseDetail: {},
  coursePage: []
};

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      state.categoriesList = payload;
      return { ...state };

    case FETCH_COURSE_CATEGORIES:
      state.courseCategories = payload;
      return { ...state };

    case FETCH_ALL_COURSES:
      state.courseList = payload;
      return { ...state };

    case FETCH_COURSE_DETAIL:
      state.courseDetail = payload;
      return { ...state };

    case FETCH_COURSE_PAGE:
      console.log(payload);
      state.coursePage = payload.items;
      console.log(+Math.ceil(payload.totalCount / payload.count));// làm tròn lên
      return { ...state };

    default:
      return state;
  }
};

export default CourseReducer;
