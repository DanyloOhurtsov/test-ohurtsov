import { useMutation } from "@apollo/client";
import { MODIFY_LIFT_STATUS } from "../variables/variables";

export const useModifyLiftStatus = () => {
    const [mutate, { loading, error }] = useMutation(MODIFY_LIFT_STATUS);

    const modifyLiftStatus = async ({ itemId, itemStatus }) => {
        try {
            await mutate({
                variables: { id: itemId, status: itemStatus },
            });
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return { modifyLiftStatus, loading, error };
};
