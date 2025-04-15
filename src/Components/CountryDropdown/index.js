import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
  return (
    <>
      <Button
        sx={{
          width: '150px',
          height: '80px',
          textAlign: 'left',
          justifyContent: 'flex-start',
        }}
        className="countryDrop"
      >
        <div className="d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Vietnam</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default CountryDropdown;