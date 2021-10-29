import React from 'react';
import Footer from '@/Components/Footer';
import Navbare from '@/Components/Navbare';
import Sidebare from '@/Components/Sidebare';
import { Head } from '@inertiajs/inertia-react';
import Tiroire from '@/Components/Tiroire';

export default function Authenticated({children, MenuOpen}) {

    return (
            <>
            <Head> 
                <title>ZYONEMANAGEMENT</title>
                <link rel="stylesheet" href="css/app.css" />
                <link rel="stylesheet" href="BackTemplate/plugins/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="BackTemplate/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
                <link rel="stylesheet" href="BackTemplate/dist/css/adminlte.min.css" />
            </Head>

            <div className="wrapper">
                <div className="preloader flex-column justify-content-center align-items-center">
                    <img className="animation__wobble" src="img/Zyone/Zyone8.jpg" alt="ZYONESCHOOLSLogo" height={100} width={100} />
                </div>
                <Navbare />

                <Sidebare MenuOpen={MenuOpen} />

                {children}

                <Tiroire />
                <Footer />
            </div>

        </>
    );
}
