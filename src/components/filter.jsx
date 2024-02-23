import { FILTER_STATUS_TYPE } from "../variables/variables";

const Filter = ({props}) => {
    
    const {selectedItem, setSelectedItem} = props
    const filterButtons = FILTER_STATUS_TYPE;

    const change = (e) => {
        setSelectedItem(e.target.value)
    };

    return (
        <div className="absolute right-6  border-1 p-1 outline-1">
            <select
                value={selectedItem}
                onChange={(e) => change(e)}
            >
                {filterButtons.map((button) => (
                    <option value={button} key={button}>{button}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
