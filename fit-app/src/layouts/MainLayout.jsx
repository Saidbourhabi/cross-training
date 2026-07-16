import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
return (
    <>
        <Banner />
        <Header />
        <main>
            <Outlet /> 
        </main>
        <Footer />
    </>
);
}