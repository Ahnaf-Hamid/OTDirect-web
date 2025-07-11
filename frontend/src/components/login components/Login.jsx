import { useContext, useState } from "react";
import SignIn from "./SignIn";
import SignUpOptions from "./SignUpOptions";
import SignUp from "./SignUp";
import { Context } from "../../context/Context";

const Login = () => {
  const { setShowLogin } = useContext(Context);
  const [currentState, setCurrentState] = useState("Sign In");
  const [signUpOption, setSignUpOption] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] overflow-y-auto py-4">
      <div className="flex justify-center items-center min-h-full">
        <div className="bg-white w-xl p-6 rounded-xl shadow-lg mx-2">
          {/* main heading div */}
          <div
            className={`flex ${
              currentState === "Sign Up Options"
                ? "justify-end"
                : "justify-between"
            }`}
          >
            {(currentState === "Sign In" || currentState === "Sign Up") && (
              <h1 className="text-2xl font-semibold">{currentState}</h1>
            )}
            <button
              onClick={() => setShowLogin(false)}
              className="font-bold flex justify-end text-orange-500 text-xl cursor-pointer"
            >
              X
            </button>
          </div>
          <hr className="my-4 text-gray-400" />

          {/* Sign Up display div */}
          <SignUp
            currentState={currentState}
            signUpOption={signUpOption}
          />

          {/* Sign Up Options display div */}
          <SignUpOptions
            currentState={currentState}
            setCurrentState={setCurrentState}
            setSignUpOption={setSignUpOption}
          />

          {/* Sign In display div */}
          <SignIn currentState={currentState} />

          {/* login popup last */}
          {currentState === "Sign In" ? (
            <p
              className="mt-4 text-lg"
              onClick={() => setCurrentState("Sign Up Options")}
            >
              or dont have an account{" "}
              <span className="text-[#7A1233] font-semibold cursor-pointer">
                Sign Up
              </span>
            </p>
          ) : (
            <p
              className="mt-4 text-lg"
              onClick={() => setCurrentState("Sign In")}
            >
              back to{" "}
              <span className="text-[#7A1233] font-semibold cursor-pointer">
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
