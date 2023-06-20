export const reducer = (state, action) => {
    if (action.type === "CLOSE_SIDEBAR") {
        return { ...state, "isSideBarOpen": false };
    } else if (action.type === "OPEN_SIDEBAR") {
        return { ...state, "isSideBarOpen": true };
    } else if (action.type === "SET_PAGEID") {
        return { ...state, "pageId": action.payload.id };
    }
};