import React, { useEffect } from 'react';

const Doodle = () => {
    useEffect(() => {
        const head = document.getElementById('head');
        const eyeLeft = document.getElementById('eye-left');
        const eyeRight = document.getElementById('eye-right');

        if (!head || !eyeLeft || !eyeRight) {
            return;
        }

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // Normalize mouse position to a -1 to 1 range
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            const headMovement = 4;
            const eyeMovement = 2;

            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                head.style.transform = `translate(${x * headMovement}px, ${y * headMovement}px)`;
                // The eyes move relative to the head for a parallax effect
                eyeLeft.style.transform = `translate(${x * eyeMovement}px, ${y * eyeMovement}px)`;
                eyeRight.style.transform = `translate(${x * eyeMovement}px, ${y * eyeMovement}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            // Reset styles when the component unmounts
            head.style.transform = '';
            eyeLeft.style.transform = '';
            eyeRight.style.transform = '';
        };
    }, []);

    return (
        <svg className="w-60 h-60 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 211.73 180">
            <defs>
                <linearGradient id="linear-gradient-hair" x1="102.94" y1="154.47" x2="102.94" y2="36.93" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#000"></stop>
                    <stop offset="0.01" stopColor="#000"></stop>
                    <stop offset="0.54" stopColor="#000"></stop>
                    <stop offset="1" stopColor="#000"></stop>
                </linearGradient>
                <linearGradient id="colorful-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8338ec" />
                    <stop offset="0.5" stopColor="#ff006e" />
                    <stop offset="1" stopColor="#00f5ff" />
                </linearGradient>
                <clipPath id="clip-path">
                    <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none"></path>
                </clipPath>
                <clipPath id="clip-path-2">
                    <path id="mouth-clip" d="M98.93 112.17c2.78 1.59 7.5 1.67 9.31 1.17 2.3-.62 5.68-1.48 5.59-5.35-.06-3.22-2.93-3.73-4.72-3.41-5 .91-5.46-.2-8.93-.39-2.61-.14-4.28 1.23-4.43 3.8-.12 2.13 1.91 3.46 3.18 4.18z" fill="none"></path>
                </clipPath>
                <path opacity="0" id="yawn-clip" d="M105.4 117.65c6 0 7.67-1.66 7.3-5.83s-2.64-10.27-7.86-10.27-6.48 6.37-6.85 9.92 1.38 6.18 7.41 6.18z" fill="#fff"></path>
            </defs>
            <path id="bg" d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" fill="url(#colorful-bg)" data-svg-origin="105.32126712799072 101.11200714111328" transform="matrix(1,0,0,1,0,0)" style={{ transformOrigin: '0px 0px' }}></path>
            <g clipPath="url(#clip-path)">
                <g id="me" data-name="me" data-svg-origin="102.23083877563477 199.74785232543945" transform="matrix(1,0,0,1,0,0)" style={{ opacity: 1, transformOrigin: '0px 0px' }}>
                    <g id="body">
                        <path id="shadow" className="shadow" d="M129.86,48.47s6.76,4.91,10,12.07,7,29.06,11.71,39.82,9.06,22.5,9.91,26.42,1.57,5-2.52,10.2-14.63,12-14.63,12l-11.47,6.8s14.87,9.67,17.68,19.32a71.16,71.16,0,0,1,4.34,18.79l-21.39,4.54L113.2,164.85l-13-11.1L90.31,75.37Z" opacity="0.09" style={{ isolation: 'isolate', transformOrigin: '0px 0px' }} data-svg-origin="126.22404479980469 123.45000457763672" transform="matrix(1,0,0,1,-0.55128,2.03046)"></path>
                        <path id="shadow-2" className="shadow" d="M69.44,54A23.64,23.64,0,0,0,58.91,64.27c-4.39,7.87-4.1,30.52-7.61,41.23S40.76,124.26,41.93,135s2.64,12.27,2.64,12.27a66.65,66.65,0,0,1,14.93,1.88c7,1.89,18.42,5.48,18.42,5.48S63.6,166.53,61.84,176a67.23,67.23,0,0,0-2.34,18.26l20.89,1.9,16.19-34,11.42-12L109.91,75Z" opacity="0.09" style={{ isolation: 'isolate', transformOrigin: '0px 0px' }} data-svg-origin="75.8550910949707 125.07999420166016" transform="matrix(1,0,0,1,-0.52274,1.92485)"></path>
                        <path id="hair-back" className="hair" d="M127.63,45.17c2.65,1.35,11.15,4.2,16.07,23.12,2.88,20.58,3.79,26.07,4.68,30.6s1.2,11.6,6.3,21.15.85,14.65.85,14.65l-7.63,7.08s3.45-12.65-2.63-18.13c0,0,2,14,0,17s-8.75,6.92-8.75,6.92-2.48-4.53-5.06-9.64,2.78,11,.08,12.09-18.82,6.25-30.6,3.86-21.53-5-24-5.79c0,0,2.75-1.37.77-7.62s-1-7.59-1.52-7-2.1,3-1,7.49a7.45,7.45,0,0,1-1.92,7.18s-7.11-4.65-12.77-5.21A51.35,51.35,0,0,1,51,141.14s-5-11.43-.4-23.56S58,104.1,58.32,88.87s2.41-34.66,20.41-45S116.87,35.4,127.63,45.17Z" fill="url(#linear-gradient-hair)" data-svg-origin="102.92224884033203 95.71350479125977" transform="matrix(1,0,0,1,-0.83301,1.5918)" style={{ transformOrigin: '0px 0px' }}></path>
                        <path id="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#ede3d1"></path>
                        <path id="top" d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z" fill="#00f5ff" stroke="#404040" strokeMiterlimit="10" strokeWidth="0.5"></path>
                        <path id="shoulder" d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z" fill="#404040"></path>
                        <path id="shoulder-2" data-name="shoulder" d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z" fill="#404040"></path>
                    </g>
                    <path id="shadow-3" data-name="shadow" d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z" fill="#efceb9"></path>
                    <g id="head" data-svg-origin="104.07083129882812 86.37029647827148" transform="matrix(1,0,0,1,0,0)" style={{ transformOrigin: '0px 0px' }}>
                        <g id="ear-left" className="ear" data-svg-origin="80.51000213623047 105.0994873046875" transform="matrix(1,0,0,1,-0.2608,2.4088)" style={{ transformOrigin: '0px 0px' }}>
                            <path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#ede3d1"></path>
                            <path d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z" fill="#b5aa9a"></path>
                        </g>
                        <g id="ear-right" className="ear" data-svg-origin="127.48999786376953 105.21952819824219" transform="matrix(1,0,0,1,-0.25911,2.40205)" style={{ transformOrigin: '0px 0px' }}>
                            <path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#ede3d1"></path>
                            <path d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z" fill="#b5aa9a"></path>
                        </g>
                        <g id="face" data-svg-origin="70.81439971923828 43.9721794128418" transform="matrix(1,0,0,1,0.34147,-0.75836)" style={{ transformOrigin: '0px 0px' }}>
                            <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#ede3d1"></rect>
                            <g id="inner-face" data-svg-origin="74.3599853515625 77.77883911132812" transform="matrix(1,0,0,1,1.19215,-1.48471)" style={{ transformOrigin: '0px 0px' }}>
                                <path id="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#b5aa9a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="112.54000091552734 77.77883911132812" transform="matrix(1,0,0,1,0,-0.68049)" style={{ transformOrigin: '0px 0px' }}></path>
                                <path id="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#b5aa9a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="88.92000579833984 78.29693603515625" transform="matrix(1,0,0,1,0,-0.62026)" style={{ transformOrigin: '0px 0px' }}></path>
                                <g className="mouth-g" style={{ opacity: 1 }}>
                                    <g clipPath="url(#clip-path-2)">
                                        <g id="mouth" className="mouth" opacity="0">
                                            <ellipse cx="104.95" cy="106.66" rx="9.92" ry="9.48" fill="#2b343b"></ellipse>
                                            <path id="tongue" d="M111.44 112.27a14.53 14.53 0 01-13.29-.37s1.52-3.48 6.56-3.35 6.73 3.72 6.73 3.72z" fill="#ffaa96"></path>
                                        </g>
                                    </g>
                                    <path id="mouth-2" className="mouth" data-name="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#b5aa9a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"></path>
                                </g>
                                <path id="oh" opacity="0" d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z" fill="#262528" style={{ opacity: 0 }}></path>
                                <g id="eyes" style={{ opacity: 1 }}>
                                    <path id="eye-left" className="eye" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" data-svg-origin="89.47734069824219 83.69889068603516" transform="matrix(1,0,0,1,0.46853,0.82544)" style={{ opacity: 1, transformOrigin: '0px 0px' }}></path>
                                    <path id="eye-right" className="eye" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" data-svg-origin="113.6673355102539 83.69889068603516" transform="matrix(1,0,0,1,0.46853,0.82544)" style={{ opacity: 1, transformOrigin: '0px 0px' }}></path>
                                    <path id="eye-right-2" className="eye" data-name="eye-right" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="114.11000061035156 88" transform="matrix(1,0,0,1,0.38912,0.07939)" style={{ opacity: 0, transformOrigin: '0px 0px' }}></path>
                                    <path id="eye-left-2" className="eye" data-name="eye-left" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="89.8499984741211 87.43000030517578" transform="matrix(1,0,0,1,0.38759,0.0992)" style={{ opacity: 0, transformOrigin: '0px 0px' }}></path>
                                </g>
                                <path className="dizzy dizzy-1" opacity="0" d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.75" data-svg-origin="117.2210578918457 87.44113540649414" transform="matrix(1,0,0,1,0,0)" style={{ opacity: 0, transformOrigin: '0px 0px' }}></path>
                                <path className="dizzy dizzy-2" opacity="0" d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.75" data-svg-origin="92.55302047729492 87.10653305053711" transform="matrix(1,0,0,1,0,0)" style={{ opacity: 0, transformOrigin: '0px 0px' }}></path>
                                <path id="nose" d="M102.39 98.13s3.09 1.55 5.78 0" fill="none" stroke="#e0d5c1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path id="blush-left" className="eye" d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z" fill="#efceb9" fillRule="evenodd" data-svg-origin="87.51107788085938 92.13317108154297" transform="matrix(1,0,0,1,0.39091,0.6694)" style={{ transformOrigin: '0px 0px' }}></path>
                                <path id="blush-right" className="eye" d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z" fill="#efceb9" fillRule="evenodd" data-svg-origin="117.15631866455078 92.1531753540039" transform="matrix(1,0,0,1,0.39086,0.66822)" style={{ transformOrigin: '0px 0px' }}></path>
                            </g>
                            <path id="hair-front" d="M134.1,57.61C129.22,51.79,118,45,115.33,44.84s-13-1.87-20.65,0-16,4.51-18.77,8.26-6.17,18-4.77,24.41c0,0,3-3.09,10.46-5.73h0s.74-6.33,1.45-7.18a32.29,32.29,0,0,0-.1,6.73,59.67,59.67,0,0,1,8.22-2,37,37,0,0,1,.25-8.11,67.11,67.11,0,0,0,.54,8c2-.32,4.18-.59,6.52-.78h0s.18-2.82.61-5.5c0,0,.28,3.33.6,5.42,1.78-.12,3.64-.19,5.62-.21a76.76,76.76,0,0,1,9.11.45c-.05-2.15,0-6.82-.22-7.36s1.07,2.06,1.54,7.52a51.14,51.14,0,0,1,8.84,1.92c.23-2.37.41-5.93-.3-7.88,0,0,2.1,5,1.9,8.42h0c8.36,3,11.06,7.25,11.06,7.25S139,63.43,134.1,57.61Z" fill="#000" data-svg-origin="70.81439971923828 43.9721794128418" transform="matrix(1,0,0,1,0.4656,0.75712)" style={{ transformOrigin: '0px 0px' }}></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
};

export default Doodle;
