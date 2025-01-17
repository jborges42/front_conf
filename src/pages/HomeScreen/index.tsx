import React, {useEffect} from "react";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";



export const HomeScreen = () => {
  const navigate = useNavigate();


  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-hero w-full h-screen">
      <div className="w-full">
        <h1 className="text-[#e3e3e3] text-4xl font-bold mt-20 ml-7 drop-shadow-md">
          Ahh... <br />
          Você não vai <br />
          perder o melhor <br />
          evento do distrito <br />
          né?
        </h1>
      </div>
      <div className="w-full absolute bottom-16 flex justify-center flex-col items-center">
        <button className="bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl" onClick={goToLogin}>
          Viva essa experiência
        </button>
        <Footer />
      </div>
    </div>
  );
};
