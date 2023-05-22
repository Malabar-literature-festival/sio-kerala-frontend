// The themeColor property will intially share the theme color for the user.
// This color we using all the pages.
// I fwe change the color here all the project will be effected.

const menuStatus = false;

// This is the function we use to update the state of redux it initiailly as above. Any where in the apllication programer can call this reducers to update the redux.

function menuStatusReducer(state = menuStatus, action) {
  switch (action.type) {
    case "MENU_STATUS":
      // Saving the last selected colot theme to the local storage for persist in the system.
      return action.payload;
    default:
      return state;
  }
}
function currentMenuReducer(state = '', action) {
  switch (action.type) {
    case "CURRENT_MENU":
      // Saving the last selected colot theme to the local storage for persist in the system.
      return action.payload;
    default:
      return state;
  }
}
export { menuStatusReducer, currentMenuReducer };

// themColor: initial theme color for the application, it could be retrieved from local storage if previously saved.
// themColorReducer: a Redux reducer function to update the theme color state based on the action type "THEME".
// It updates the theme color state with the payload data and also saves the theme color data to the local storage for persistence.
// The default value of the state is the initial theme color.
