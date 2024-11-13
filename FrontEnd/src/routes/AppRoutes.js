import {
    AboutPage,
    CartPage,
    CheckoutPage,
    ContactPage,
    DetailsPage,
    HomePage,
    ProfilePage,
    ShopPage
} from "~/pages";
import {
    DashboardManageUserPage,
    DashboardHomePage,
    DashboardManageAccountPage,
    DashboardManageOrderPage,
    DashboardManageProductPage
} from "~/pages";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            {/* b2c */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/details/:id" element={<DetailsPage />} />
            <Route path="/shop/checkout" element={<CheckoutPage />} />
            <Route path="/shop/cart" element={<CartPage />} />

            <Route path="/user/profile" element={<ProfilePage />} />

            {/* b2b */}
            <Route path='/dashboard' element={<DashboardHomePage />} />
            <Route path='/dashboard/user' element={<DashboardManageUserPage />} />
            <Route path='/dashboard/account' element={<DashboardManageAccountPage />} />
            <Route path='/dashboard/product' element={<DashboardManageProductPage />} />
            <Route path='/dashboard/order' element={<DashboardManageOrderPage />} />
        </Routes>
    );
}

export default AppRoutes;
