
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
<Button variant={"primary"} size={"lg"}  >
  Primary
</Button>
    <Button variant={"destructive"}>
      Primary
    </Button>
      <Button variant={"teritary"}>
          Primary
      </Button>
  </div>
  );
}
