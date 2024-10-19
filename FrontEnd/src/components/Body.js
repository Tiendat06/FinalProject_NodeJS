import {Routes, Route} from "react-router-dom";
import {HomePage, ContactPage, AboutPage} from "~/pages";

function Body(){
    return (
        <div className="container">
            <div className="row" style={{paddingTop: 20, paddingBottom: 20}}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default Body;