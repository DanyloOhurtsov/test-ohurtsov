import React from "react";
import { Button } from "./cn-components/ui/button";
import { FaRegEdit } from "react-icons/fa";

const LiftItem = ({ lift, handleOpen }) => {
    return (
        <div className=" flex justify-between p-4 w-full items-center border-2">
            <div className="flex flex-col gap-2 w-full">
                <p className=" font-bold">{lift.name}</p>
                <p>
                    Elevation gain:{" "}
                    <span className="font-semibold">{lift.elevationGain}</span>
                </p>
            </div>
            <div className="w-full flex justify-center">
                <p className="w-[140px]">
                    Status: <span className="font-semibold">{lift.status}</span>
                </p>
            </div>
            <div className=" w-full flex justify-end">
                <Button
                    variant={"personal"}
                    className="p-1"
                    onClick={() => handleOpen({ isOpen: true, item: lift })}
                >
                    <FaRegEdit size={24} />
                </Button>
            </div>
        </div>
    );
};

export default LiftItem;
