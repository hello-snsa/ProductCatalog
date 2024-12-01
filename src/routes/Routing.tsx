import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const ComingSoon = lazy(() => import("../pages/ComingSoon"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
import Loader from "../components/Loader";

export const Routing = () => {

    return (
        <Suspense fallback={<Loader isLoading />}>
            <Routes>
                <Route path="/" element={< Home />} />
                < Route path="/cart" element={< Cart />} />
                < Route path="/coming-soon" element={< ComingSoon />} />
                < Route path="*" element={< PageNotFound />} />
            </Routes>
        </Suspense>
    )
}

export default Routing;


