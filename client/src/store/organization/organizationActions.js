import {getOrganizationRequest} from "../../api/organizationService";
import {organizationActions} from "./organizationSlice";

export const getOrganization = () => {
    return async dispatch => {
        try {
            const { data } = await getOrganizationRequest()
            dispatch(organizationActions.getAllOrganization({
                organization: data
            }))
        } catch (e) {
            console.error(e)
        }
    }
}