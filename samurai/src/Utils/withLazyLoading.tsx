import React, {SuspenseProps} from "react";
import Preloader from "../components/Common/Preloader/Preloader";

function withLazyLoading <T>(Component: React.ComponentType<T>) {
  return (
      (props: T) => {
          return(
              <React.Suspense fallback={<Preloader/>}>
                  <Component {...props} />
              </React.Suspense>
          )
      }
  )
}

export default withLazyLoading;