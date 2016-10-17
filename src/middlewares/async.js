export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or the payload does not have a .then property
    // we don't care about it, and send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    console.log("We have a promise", action);
  }
}
