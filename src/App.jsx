import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Pages from "./Layout/Pages";
import Shop from "./components/Shop";
import { RecoilRoot } from "recoil";
import Test from "./components/test";
import Login from "./components/Login";
import Checkout from './components/Checkout';
import { AuthProvider } from "./config/Context";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import RouteTracker from "./RouterTracker";
import ProtectedRoute from './ProtectedRoute';
import OrderList from './components/Admin/OrderList';

function App() {
    return (
        <RecoilRoot>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout><Pages /></Layout>} />
                        <Route path="/shop" element={<Layout><Shop /></Layout>} />
                        <Route path="/signup" element={<Layout><Test /></Layout>} />
                        <Route path="/login" element={<Layout><Login /></Layout>} />
                        <Route path="/blogs" element={<Layout><Blog /></Layout>} />
                        <Route path="/blogs/1" element={<Layout><Blog1 /></Layout>} />
                        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
                        <Route path="/admin" element={
                            <Layout>
                                <ProtectedRoute>
                                    <OrderList />
                                </ProtectedRoute>
                            </Layout>
                        } />
                    </Routes>
                    <RouteTracker />
                </BrowserRouter>
            </AuthProvider>
        </RecoilRoot>
    );
}

export default App;