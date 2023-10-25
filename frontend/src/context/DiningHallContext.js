// import {createContext, useReducer} from 'react'

// export const DiningContext = createContext()

// export const diningReducer = (state, action) => {
//     switch(action.type) {
//         case 'SET_RATINGS':
//             return {
//                 ratings: action.payload
//             }
//         case 'CREATE_RATING':
//             return {
//                 ratings: [action.payload, ...state.ratings]
//             }
//         case 'DELETE_RATING':
//             return {
//                 ratings: state.ratings.filter((rating)=> rating._id !== action.payload._id)
//             }
//         default:
//             return state
//     }
// }

// export const RatingsContextProvider = ({children}) => {

//     const [state, dispatch] = useReducer(diningReducer, {
//         ratings: null
//     })

//     return (
//         <DiningContext.Provider value = {{...state, dispatch}}>
//             {children}
//         </DiningContext.Provider>
//     )
// }


