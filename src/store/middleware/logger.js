//in the line bellow is used Currying principle to separate parameters
const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  // console.log('next', next);
  // console.log('action', action);
  next(action);
};

export default logger;
