import {useSearchParams} from "react-router-dom";
import {UsersFilterType} from "../../redux/types/types";

type Params = {
    currentPage: number,
    filter :UsersFilterType
}
type condParams = {
    page?: string,
    term?: string,
    friend?: string
}

export const useCondSearchParams = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setCondSearchParams = (params:Params) => {
        const condParams: condParams = {}
        if(params.currentPage !== 1) condParams.page = String(params.currentPage)
        if(params.filter.term !== '') condParams.term = params.filter.term
        if(params.filter.onlyFollowed !== null) condParams.friend = String(params.filter.onlyFollowed)

        setSearchParams(condParams)
    }

    return {searchParams, setCondSearchParams}
}