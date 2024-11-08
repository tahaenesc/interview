import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title?: string;
  desc?: string;
};

export function CharacterCard({ title, desc }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        {/* Use the title and desc props if provided */}
        <CardTitle>{title || "Default Title"}</CardTitle>
        <CardDescription>{desc || "Default Description"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">merhaba</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
