import { createContext, useContext, useEffect, useState } from 'react';
import { me as fetchMe, signin, signup } from '../api/auth.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    const [loading, setLoading] = useState(Boolean(token));

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const login = async ({ email, password }) => {
        const response = await signin({ email, password });
        localStorage.setItem('token', response.token);
        setToken(response.token);
        setUser(response.user);
        return response;
    };

    const register = async ({ name, email, password }) => {
        const response = await signup({ name, email, password });
        localStorage.setItem('token', response.token);
        setToken(response.token);
        setUser(response.user);
        return response;
    };

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        const loadUser = async () => {
            try {
                const response = await fetchMe(token);
                setUser(response.user);
            } catch (error) {
                logout();
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, register, isAuthenticated: Boolean(user) }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
