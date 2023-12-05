import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoadingState } from "../helpers/loading/loadingSlice";
import LoadingOverlay from "react-loading-overlay-ts";
import { useEffect } from "react";

const Layout = () => {
      const { loading } = useSelector(selectLoadingState);
      console.log("loadingSate", loading);

      useEffect(() => {
            console.log("state valude changed", loading);
      }, [loading]);
      return (
            <LoadingOverlay active={loading} spinner text="Loading...">
                  <Outlet />
            </LoadingOverlay>
      );
};

export default Layout;
