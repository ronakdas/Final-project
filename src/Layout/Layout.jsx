import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed
import Footer from '../components/Footer'; // Adjust path if needed

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <div className='credit'>
                Copyright Ⓒ 2023 Kahani Khane Ki. All Rights Reserved.
            </div>
        </div>
    );
}

export default Layout;