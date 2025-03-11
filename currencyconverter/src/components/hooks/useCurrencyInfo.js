import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error , setError] = useState(null);
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const res = await fetch(`https://api.frankfurter.app/latest?from=${currency.toLowerCase()}`);
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const result = await res.json();
                setData(result.rates || {}); // Ensure we only store rates
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
                setData({}); // Ensure it always returns an object
            }
        };
        fetchCurrencyData();
    }, [currency]);

    return error || Object.keys(data).length === 0 ? {} : data;
}

export default useCurrencyInfo;
