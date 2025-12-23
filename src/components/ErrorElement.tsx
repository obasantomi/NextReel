import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import NavLayout from "./NavLayout";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <>
      <NavLayout />
      <div>
        <div className="mx-5 md:mx-10 my-5">
          {isRouteErrorResponse(error) ? (
            <>
              <h2 className="mb-2">Invalid Page (404)</h2>
              <p>
                The page you're looking for doesn't exist or may have been
                moved.
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-2">Unexpected Error (500)</h2>
              <p>We ran into an unexpected problem while loading this page.</p>
            </>
          )}
          <Link
            to={"/"}
            className="bg-[#e50914] mt-4 max-w-30 flex hover:bg-[#b0070f] text-[12px] text-white transition-colors duration-300 max-h-8 cursor-pointer font-bold self-center p-1.5 md:p-3  justify-center items-center rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorElement;
