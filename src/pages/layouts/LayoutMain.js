import React from 'react';
import '../../assets/css/main/bootstrap.min.css'
import '../../assets/css/main/style.css'
import '../../assets/fonts/icomoon/style.css'
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <div className="site-wrap">
                <Header />
                    {children}
                <Footer />
            </div>
        </div>
    )
}
