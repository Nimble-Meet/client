import { toast } from 'react-hot-toast';

interface IToast {
    type: 'success' | 'error' | 'loading';
    message: string;
    duration?: number;
}

const renderToast = ({ type, message, duration }: IToast) => {
    switch (type) {
        case 'error':
            return toast.error(message, {
                duration: duration
            });
        case 'success':
            return toast.success(message, {
                duration: duration
            });
        default:
            return toast(message, {
                duration: duration
            });
    }
};

export default renderToast;
