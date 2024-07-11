import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        const handleTokenChange = () => {
            const token = Cookies.get('token');
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };

        window.addEventListener('cookiechange', handleTokenChange);
        return () => window.removeEventListener('cookiechange', handleTokenChange);
    }, []);

    return isAuthenticated;
};

export default useAuth;
