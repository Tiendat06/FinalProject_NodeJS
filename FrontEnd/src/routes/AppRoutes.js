import {AboutPage, CartPage, CheckoutPage, ContactPage, DetailsPage, HomePage, ProfilePage, ShopPage} from "~/pages";
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
        </Routes>
    );
}

export default AppRoutes;
