/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */ 
import CallModal from "components/message/CallModal";
import dynamic from "next/dynamic";
import SocketClient from "pages/SocketClient";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "redux/actions/authAction";
import { GLOBALTYPES } from "redux/actions/globalTypes";
import { io } from "socket.io-client";
import Alert from "../components/alert/Alert";

const GlobalLayout = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    const dispatch = useDispatch(); 
    const { auth, socket, call,alert } = useSelector((state) => state);
    const isLoadingUser = alert.loading;
    console.log(auth, "auth from global layout");
    useEffect(() => {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                }
            });
        }
    }, []);


    useEffect(() => {
        dispatch(loadUser());
        const socket = io(process.env.NEXT_PUBLIC_BASE_URL);
        // console.log(socket);
        dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
        return () => socket.close();
    }, [dispatch]);

    useEffect(() => {
        import("peerjs").then(({ default: Peer }) => {
            // normal synchronous code
            const newPeer = new Peer(undefined, {
                path: "/",
                secure: true,
            });

            dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
        });
    }, []);

    useEffect(() => {
        setIsClient(true);
    }, []);


    return (
        <div>
            <Alert />
            {!isLoadingUser && isClient && auth.user?._id && socket.connected && <SocketClient />}
            {!isLoadingUser && isClient && call && <CallModal />}
            <main>{children}</main>
        </div>
    );
};

// export default GlobalLayout;
export default dynamic (() => Promise.resolve(GlobalLayout), {ssr: false})