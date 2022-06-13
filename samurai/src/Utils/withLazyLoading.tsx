import React, {Suspense} from "react";
import Preloader from "../components/Common/Preloader/Preloader";

// function withLazyLoading <T>(Component: React.ComponentType<T>) {
//   return (
//       (props: T) => {
//           return(
//               <Suspense fallback={<Preloader/>}>
//                   <Component {...props} />
//               </Suspense>
//           )
//       }
//   )
// }

const withLazyLoading = (Component: React.FC<{}>) => ({ ...props }) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    )
}

export default withLazyLoading;



