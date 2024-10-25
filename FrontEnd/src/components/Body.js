import {Routes, Route} from "react-router-dom";
import {HomePage, ContactPage, AboutPage, ShopPage, DetailsPage, ProfilePage} from "~/pages";

function Body(){
    return (
        <div className="container">
            <div className="row" style={{paddingTop: 20, paddingBottom: 20}}>
                <Routes>
                    {/*b2c*/}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="/user/profile" element={<ProfilePage />} />

                    {/*b2b*/}

                </Routes>
            </div>
        </div>
    );
}
export default Body;