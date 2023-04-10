const MouseIcon = () => {
    return (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <div className="flex h-40 w-24 justify-center rounded-full border border-white py-4">
                <div className="relative h-4 w-4 animate-mouse-scroll rounded-full bg-white"></div>
            </div>
        </div>
    );
};

export default MouseIcon;
