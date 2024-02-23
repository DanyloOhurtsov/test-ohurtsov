import { Skeleton } from "../cn-components/ui/skeleton";

const TrailSkeleton = () => {
    return (
        <div className="flex justify-between p-4 w-full items-center border-2">
            <div className="flex flex-col gap-2">
                <Skeleton className="w-[50px] h-[15px]" />
                <Skeleton className="w-[100px] h-[15px]" />
            </div>
            <Skeleton className="w-[80px] h-[20px]" />
        </div>
    );
};

export default TrailSkeleton;
