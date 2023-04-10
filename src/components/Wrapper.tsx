type WrapperProps = {
    width: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    children: React.ReactNode;
};

const Wrapper = ({ width, children }: WrapperProps) => {
    if (width === 'sm') {
        return <div className="m-auto max-w-screen-sm px-20 md:px-40">{children}</div>;
    } else if (width === 'md') {
        return <div className="m-auto max-w-screen-md px-20 md:px-40">{children}</div>;
    } else if (width === 'lg') {
        return <div className="m-auto max-w-screen-lg px-20 md:px-40">{children}</div>;
    } else if (width === 'xl') {
        return <div className="m-auto max-w-screen-xl px-20 md:px-40">{children}</div>;
    } else if (width === 'full') {
        return <div className="px-20 md:px-40">{children}</div>;
    } else {
        return null;
    }
};

export default Wrapper;
