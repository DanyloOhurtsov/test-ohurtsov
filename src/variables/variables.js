import { gql } from "@apollo/client";

export const STATUS_TYPE = ["OPEN", "HOLD", "CLOSED"];
export const FILTER_STATUS_TYPE = ["ALL", "OPEN", "HOLD", "CLOSED"];

export const GET_ALL_LIFTS = gql`
    {
        allLifts {
            id
            elevationGain
            name
            status
            trailAccess {
                id
                name
                status
            }
        }
    }
`;

export const MODIFY_LIFT_STATUS = gql`
    mutation ModifyLiftStatus($id: ID!, $status: LiftStatus!) {
        setLiftStatus(id: $id, status: $status) {
            id
            name
            status
            elevationGain
        }
    }
`;

export const API_URL =
    "https://thingproxy.freeboard.io/fetch/https://current--danylo-ohurtsovs-team.apollographos.net/graphql";
