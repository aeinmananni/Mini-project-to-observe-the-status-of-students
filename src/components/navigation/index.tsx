import CustomLink from "../UI/custom-link";

type NavigationType = {
  className?: string;
};
const Navigation = ({ className }: NavigationType) => {
  return (
    <div className={`flex gap-4 items-center justify-center ${className}`}>
      <CustomLink
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "text-blue-600"
        }
        to={"/"}
      >
        مشاهده دانش اموزان
      </CustomLink>
      <CustomLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 duration-500" : "text-blue-600"
        }
        to={{ pathname: "/score", search: "?student=4" }}
      >
        کارنامه
      </CustomLink>
      <CustomLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 duration-500" : "text-blue-600"
        }
        to={"/about"}
      >
        ارتباط باما
      </CustomLink>
      <CustomLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 duration-500" : "text-blue-600"
        }
        to={"/performance"}
      >
        عملکرد یکساله
      </CustomLink>
      <CustomLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 duration-500" : "text-blue-600"
        }
        to={"/addStudent"}
      >
        اضافه کردن دانش آموزان
      </CustomLink>
    </div>
  );
};

export default Navigation;
