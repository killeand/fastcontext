import { useContext, useSyncExternalStore, useState, useEffect } from "react";
import FastContext from "./FastContext";

export default function useStore(selector) {
    const store = useContext(FastContext);

    // useSyncExternalStore
    const state = useSyncExternalStore(store.subscribe, () => selector(store.get()));

    // useState/useEffect
    // const [ state, setState ] = useState(store.get());
    // useEffect(() => {
    //     return store.subscribe(() => setState(store.get()));
    // }, []);

    return [ state, store.set];
}