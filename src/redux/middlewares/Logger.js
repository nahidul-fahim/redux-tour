const Logger = store => next => action => {
    const currentState = store.getState();
    console.log("Current state is:", currentState);
    console.log("Action dispatched:", action);

    next(action)
    console.log("Updated state is:", store.getState());
};

export default Logger;