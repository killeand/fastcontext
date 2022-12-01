import { FastContextProvider } from './FastContext';
import useStore from './useStore';
import "./main.css";

export default function Application() {
    return (
        <FastContextProvider>
            <div className="container">
                <h5>Application</h5>
                <ContentContainer />
            </div>
        </FastContextProvider>
    );
}

function ContentContainer() {
    return (
        <div className="container">
            <h5>ContentContainer</h5>
            <FormContainer />
            <DisplayContainer />
        </div>
    );
}

function DisplayContainer() {
    return (
        <div className="container">
            <h5>DisplayContainer</h5>
            <Display value="first" />
            <Display value="last" />
        </div>
    );
}

function FormContainer() {
    return (
        <div className="container">
            <h5>FormContainer</h5>
            <TextInput value="first" />
            <TextInput value="last" />
        </div>
    );
}

function Display({value}) {
    // useSyncExternalStore
    let [ fieldValue ] = useStore((store) => store[value]);

    // useState/useEffect
    //let [ store, setStore ] = useStore();
    //let fieldValue = store[value];

    return (
        <div className="value">
            {value}: {fieldValue}
        </div>
    );
}

function TextInput({value}) {
    // useSyncExternalStore
    let [ fieldValue, setStore ] = useStore((store) => store[value]);

    // useState/useEffect
    //let [ store, setStore ] = useStore();
    //let fieldValue = store[value];

    return (
        <div className="field">
            {value}:{" "}
            <input value={fieldValue} onChange={(e) => setStore({[value]:e.target.value})} />
        </div>
    );
}