import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import PrimaryButton from "../Button/PrimaryButton";

// divides the users into pages based on count
// needs a setCurrentArray function to set the current array of users to be displayed
const Pagination = ({ users, count, className, setCurrentArray }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const startIndex = (currentPage - 1) * count;
    const endIndex = startIndex + count;
    setCurrentArray(users.slice(startIndex, endIndex));
  }, [currentPage, count, users, setCurrentArray]);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / count)) {
      setCurrentPage(currentPage + 1);
      const startIndex = currentPage * count;
      const endIndex = startIndex + count;
      setCurrentArray(users.slice(startIndex, endIndex));
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const startIndex = (currentPage - 2) * count;
      const endIndex = startIndex + count;
      setCurrentArray(users.slice(startIndex, endIndex));
    }
  };

  return (
    <div className={className}>
      <div className="mt-4 flex items-center justify-center">
        <PrimaryButton
          Icon={NavigateBeforeIcon}
          onClick={previousPage}
          text="previous"
          size="sm"
        />
        <span className="text-secondary mx-4 text-xl font-medium sm:text-2xl">
          Page {currentPage} of {Math.ceil(users.length / count)}
        </span>
        <PrimaryButton
          Icon={NavigateNextIcon}
          iconPosition="right"
          size="sm"
          onClick={nextPage}
          text="next"
        >
          Next
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Pagination;
