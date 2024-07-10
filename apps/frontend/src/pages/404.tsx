import { CenteredCard } from "@/components/CenteredCard";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <CenteredCard>
      <div className="grid gap-5">
        <h1 className="text-center text-3xl font-bold md:text-5xl">404</h1>
        <h3
          className="text-center text-lg font-bold md:text-2xl"
          style={{ color: "#FF4D4F" }}
        >
          Oops!, <span className="font-bold">Page Not Found</span>
        </h3>
        <p className="text-center text-lg font-bold">
          The page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <Button as={Link} to={"/"} size="sm" color="primary" fullWidth>
            Go Home
          </Button>
        </div>
      </div>
    </CenteredCard>
  );
};

export default NotFound;
