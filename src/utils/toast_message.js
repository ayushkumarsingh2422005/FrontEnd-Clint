import { toast } from "react-toastify";

export default function showToastMessage (type , message) {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        default:
            toast.info(message);
            break;
    }
}