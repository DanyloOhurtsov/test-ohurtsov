import { useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

import { STATUS_TYPE } from "../variables/variables";
import TrailList from "./TrailList/trail-list";
import { useModifyLiftStatus } from "../hooks/useMutations";

const ModalItem = ({ modalOpen, setModalOpen }) => {
    const handleClose = () => {
        setModalOpen({ isOpen: false, item: {} });
    };
    const { item, isOpen } = modalOpen;

    const { modifyLiftStatus, loading } = useModifyLiftStatus();

    const { handleSubmit } = useForm();
    const [selectedItem, setSelectedItem] = useState(item.status);
    const filterButtons = STATUS_TYPE;

    const onSubmit = () => {
        modifyLiftStatus({ itemId: item.id, itemStatus: selectedItem });
        handleClose();
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="flex flex-col justify-between w-1/2 h-full border-2 border-inherit p-6 absolute top-0 right-0 bg-white">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        onReset={handleClose}
                        className="flex flex-col justify-between items-center h-full"
                    >
                        <div className="flex flex-col gap-4 items-center">
                            <h2
                                id="parent-modal-title"
                                className="text-center font-semibold"
                            >
                                {item.name}
                            </h2>
                            <p
                                id="parent-modal-description"
                                className="text-center flex gap-2"
                            >
                                Elevation Gain:
                                <span className=" font-semibold">
                                    {item.elevationGain}
                                </span>
                            </p>
                        </div>
                        <select
                            value={selectedItem}
                            onChange={(e) => setSelectedItem(e.target.value)}
                        >
                            {filterButtons.map((button) => (
                                <option value={button} key={button}>
                                    {button}
                                </option>
                            ))}
                        </select>
                        <TrailList data={item} />
                        <div className=" flex justify-between items-center w-full px-24">
                            <Button
                                type={"reset"}
                                variant={"contained"}
                                color={"warning"}
                            >
                                Cancel
                            </Button>
                            <Button
                                type={"submit"}
                                variant={"contained"}
                                color={"success"}
                            >
                                {loading ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalItem;
