import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-theme";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const change = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img src="/image/IMG_20210531_145745.jpg" alt="Pierre p Parker" className="peter" />
      <h3>
        <span className="text-red-600">Peter</span>Parker
      </h3>
      <p className="">
        Web Developer
      </p>
      <a href="https://firebasestorage.googleapis.com/v0/b/ecommerce-2050.appspot.com/o/Suleiman-%20Resume.pdf?alt=media&token=49244bae-e6a1-4a08-9736-a2fa1422f7b3" download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-400 rounded-full dark:text-white dark:bg-gray-800" >
        <GiTie className="w-6 h-6" />
        Download resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="https://github.com/msumari">
          <AiFillGithub className="w-8 h-8 text-black cursor-pointer dark:text-white" />
        </a>

        <a href="https://www.linkedin.com/in/suleiman-msumari-75170b181/">
          <AiFillLinkedin className="w-8 h-8 text-blue-800 cursor-pointer" />
        </a>

        <a href="https://twitter.com/KherySuleiman">
          <AiFillTwitterCircle className="w-8 h-8 text-blue-500 cursor-pointer" />
        </a>
      </div>

      <div className="py-4 my-5 bg-gray-00 sytle={{marginLeft: '-1rem', marginRigth:'-1rem'}}">
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation className="text-red-500" />
          <span className="dark:text-white ">Dar es salaam, Tanzania</span>
        </div>
        <p className="my-2 dark:text-white">smile.pierre8@gmail.com</p>
        <p className="my-2 dark:text-white">+255 628206857</p>
      </div>
      
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-700 to-yellow-800 focus:outline-none"
        onClick={() => {
          window.open("mailto:smile.pierre8@gmail.com");
        }}
      >
        Email me
      </button>
      <button
        onClick={change}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-700 to-yellow-800 focus:outline-none"
      >
        Dark mode
      </button>
    </div>
  );
};

export default Sidebar;