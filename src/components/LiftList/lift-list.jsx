import LiftItem from "./lift-item";
import LiftItemSkeleton from "../skeleton/lift-item-skeleton";

const LiftList = ({ get_data, filter, handleOpen }) => {
    const { loading, error, data } = get_data;

    let filteredLifts = [];

    if (!loading && data) {
        if (filter === "ALL") {
            filteredLifts = data.allLifts;
        } else {
            filteredLifts = data.allLifts.filter(
                (lift) => lift.status === filter
            );
        }
    }
    if (error) {
        return (
            <div className="border-2 border-inherit p-5 flex flex-col gap-4 h-[600px] overflow-hidden items-center justify-center">
                <h2 className="font-bold">Oops! Something went wrong</h2>
                <p>Try to reload the page</p>
            </div>
        );
    }

    return (
        <div className="border-2 border-inherit p-5 flex flex-col gap-4 h-[600px] overflow-hidden overflow-y-scroll">
            {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                      <LiftItemSkeleton key={i} />
                  ))
                : filteredLifts.map((lift) => (
                      <LiftItem
                          lift={lift}
                          key={lift.id}
                          handleOpen={handleOpen}
                      />
                  ))}
        </div>
    );
};

export default LiftList;
