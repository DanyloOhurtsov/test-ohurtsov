import { useState } from "react";

import { ApolloProvider, useQuery } from "@apollo/client";

import { GET_ALL_LIFTS } from "./variables/variables";
import { clientMy } from "./hooks/apolloClient";
import { Header, LiftList, ModalItem } from "./components";

const App = () => {
    const [selectedItem, setSelectedItem] = useState("ALL");
    const [modalOpen, setModalOpen] = useState({ isOpen: false, item: {} });

    const data = useQuery(GET_ALL_LIFTS);

    return (
        <div className=" container w-full p-8">
            <Header
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            <LiftList
                get_data={data}
                filter={selectedItem}
                handleOpen={setModalOpen}
            />
            {modalOpen.isOpen && (
                <ModalItem modalOpen={modalOpen} setModalOpen={setModalOpen} />
            )}
        </div>
    );
};

const ApolloApp = () => (
    <ApolloProvider client={clientMy}>
        <App />
    </ApolloProvider>
);

export default ApolloApp;
