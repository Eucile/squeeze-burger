const middlewareLogger = store => next => action => {
  next(action);
};

export default middlewareLogger;
