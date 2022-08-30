import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialvalue = {
  isOpenNow: false,
  isOpenNowLogin: false,
  isOpenNowmobnav: false,
  isAuth:false,
};

function reducer(state, action) {
  switch (action.type) {
    case "opensingup": {
      return {
        ...state,
        isOpenNow: true,
      };
    }
    case "closesingup": {
      return {
        ...state,
        isOpenNow: false,
      };
    }
    case "openlogin": {
      return {
        ...state,
        isOpenNowLogin: true,
      };
    }
    case "closelogin": {
      return {
        
        ...state,
        isOpenNowLogin: false,
      };
    }
    case "openmobilenav": {
      return {
        ...state,
        isOpenNowmobnav: true,
      };
    }
    case "closemobilenav": {
      return {
        ...state,
        isOpenNowmobnav: false,
      };
    }
    case "loginsucceed":{
        return{
            ...state,
            isAuth:true,
        }
    }
    case "logoutsucceed":{
        return{
            ...state,
            isAuth:false,
        }
    }
    default: {
      return state;
    }
  }
}

const onopensingup = { type: "opensingup" };
const onclosesingup = { type: "closesingup" };

function AuthContextprovider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextprovider;
