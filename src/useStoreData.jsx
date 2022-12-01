import { useRef, useCallback } from "react";

export default function useStoreData(initialState) {
    const store = useRef(initialState);
    const get = useCallback(() => store.current, []);
    const subscribers = useRef(new Set());
    const set = useCallback((value) => {
        store.current = { ...store.current, ...value };
        subscribers.current.forEach((callback) => callback());
    }, []);
    const subscribe = useCallback((callback) => {
        subscribers.current.add(callback);

        return () => subscribers.current.delete(callback);
    }, []);

    console.warn("calling: ", store.current);

    return { get, set, subscribe };
}