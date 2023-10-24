import { RatingsContext } from "../context/RatingsContext";
import { useContext } from "react";

export const useRatingsContext = () => {
    const context = useContext(RatingsContext)

    if(!context) {
        throw Error("useWorkoutsContext must be used inside an RatingsContextProvider")
    }

    return context
}