import React from "react";

const TrailItem = ({ trail }) => {
    return (
        <div className="flex justify-between p-4 w-full items-center border-2">
            <div className="flex flex-col gap-2 w-full">
                <p className=" font-bold">{trail.name}</p>
            </div>
            <div className="w-full flex justify-center">
                <p className="w-[140px]">
                    Status:{" "}
                    <span className="font-semibold">{trail.status}</span>
                </p>
            </div>
        </div>
    );
};

export default TrailItem;
