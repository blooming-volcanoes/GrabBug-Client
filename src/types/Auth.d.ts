/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */
export interface IUser {
    email: string | undefined;
    name?: string | undefined;
    password: string | undefined;
    code?: string | undefined;
}

export interface IAuthContext {
    user: any;
    loading: boolean;
    authLoading: boolean;
    error: null;
    verify?: any;
    token?: string;
    setError: React.Dispatch<React.SetStateAction<null>>;
    setUser: React.Dispatch<React.SetStateAction<{}>>;
    login: (data: IUser) => Promise<void>;
    register: (data: IUser) => Promise<void>;
    // verifyOtp: (data: IUser) => Promise<void>;
    logout: () => void;
    updateLocalStorageOnUserDataChanged?: (updatedUserData) => void;
}

export interface UserChatContext {
    selectedChat: any;
    setSelectedChat: any;
    chats: any;
    setChats: any;
    notification?: any;
    setNotification?: any;
    socket?: any;
}

export interface ChatUser {
    _id: string;
    email: string | undefined;
    name?: string | undefined;
    pic: string;
    OTPExpire?: string;
    OTP?: string;
    role: string;
    status: string;
    createdAt: string;
}
