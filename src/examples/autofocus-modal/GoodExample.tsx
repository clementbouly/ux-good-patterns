import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">{td("autofocus.openModal")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{td("autofocus.addNewItem")}</DialogTitle>
          <DialogDescription>{td("autofocus.autoFocused")}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">{td("common.name")}</Label>
            <Input id="name" placeholder={td("autofocus.enterName")} autoFocus />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setOpen(false)}>{td("common.save")}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
