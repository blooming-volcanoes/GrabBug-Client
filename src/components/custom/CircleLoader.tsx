/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from "react";

function CircleLoader({ className }: { className?: string }) {
    return (
        <div className={` flex justify-center ${className}`}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`animate-spin `}
            >
                <rect
                    x="1.5"
                    y="1.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    stroke="#818CF8"
                    strokeWidth="3"
                />
                <mask id="path-2-inside-1" fill="white">
                    <path d="M20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 -5.74026e-08 10 0L10 3.34226C10.8743 3.34226 11.7401 3.51446 12.5478 3.84905C13.3556 4.18363 14.0895 4.67404 14.7077 5.29226C15.326 5.91049 15.8164 6.64444 16.151 7.45219C16.4855 8.25995 16.6577 9.12569 16.6577 10H20Z" />
                </mask>
                <path
                    d="M20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 -5.74026e-08 10 0L10 3.34226C10.8743 3.34226 11.7401 3.51446 12.5478 3.84905C13.3556 4.18363 14.0895 4.67404 14.7077 5.29226C15.326 5.91049 15.8164 6.64444 16.151 7.45219C16.4855 8.25995 16.6577 9.12569 16.6577 10H20Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    mask="url(#path-2-inside-1)"
                />
            </svg>
        </div>
    );
}

export default CircleLoader;
