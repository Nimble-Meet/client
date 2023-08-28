import React from 'react';

interface Props {
    ref: React.MutableRefObject<any>;
    handler: (event: MouseEvent | TouchEvent) => void;
}

const useOnClickOutside = ({ ref, handler }: Props) => {
    React.useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
};

export default useOnClickOutside;
