export declare function create(container: HTMLElement): {
    render: (parameters: {
        importCallback: (feature: string | null) => Promise<any>;
    } | {
        feature: JSX.Element;
    }) => void;
};
