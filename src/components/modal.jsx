import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { STATUS_TYPE } from "../variables/variables";

const style = {
    position: "absolute",
    top: "0",
    right: "0",
    width: "50%",
    height: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ModalItem = ({ modalOpen, setModalOpen }) => {
    const handleClose = () => {
        setModalOpen({ isOpen: false, item: {} });
    };
    const { item, isOpen } = modalOpen;

    const { handleSubmit } = useForm();
    const [selectedItem, setSelectedItem] = useState(item.status);
    const filterButtons = STATUS_TYPE;

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={{ ...style, width: 400 }}
                    className="flex flex-col justify-between"
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
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
                        
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalItem;
