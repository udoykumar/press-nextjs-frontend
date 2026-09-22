import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getMe } from "@/service/getMe";

export default async function Home() {
  const user = await getMe();
  // console.log(user);
  // console.log("root router");
  return (
    <div>
      next js project
      <Button size={"xs"} variant={"destructive"}>
        click me
      </Button>
      <Card>lsjflksjdfkjdk kjflksjkjfslk jflkjslk jjl lkfj jj s</Card>
    </div>
  );
}
