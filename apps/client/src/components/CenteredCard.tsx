import { Card, CardBody, CardHeader } from "@nextui-org/react";

export const CenteredCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="container grid min-h-screen place-items-center">
      <div className="grid w-full gap-3 p-3 md:p-5">
        <Card className="mx-auto w-full md:w-1/2 lg:w-1/3">
          {title && <CardHeader>{title}</CardHeader>}
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </div>
  );
};
