export const useMutations = ({ itemId, itemStatus }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://thingproxy.freeboard.io/fetch/https://current--danylo-ohurtsovs-team.apollographos.net/graphql",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            query: "query {allLifts {id, name}}",
                            mutation
                        }),
                    }
                );
                const data = await response.json();
                setData(data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { data, loading };
};
