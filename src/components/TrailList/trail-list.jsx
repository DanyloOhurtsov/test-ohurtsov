import React from "react";
import TrailSkeleton from "../skeleton/trail-skeleton";
import TrailItem from "./trail-item";

const TrailList = ({ data }) => {
    const dataToMap = data?.trailAccess;

    return (
        <div className=" border-2 flex flex-col h-[400px] w-full p-2 border-inherit gap-4 overflow-hidden overflow-y-scroll">
            {!!dataToMap ? (
                dataToMap.map((trail) => (
                    <TrailItem key={trail.id} trail={trail} />
                ))
            ) : (
                <TrailSkeleton />
            )}
        </div>
    );
};

export default TrailList;
