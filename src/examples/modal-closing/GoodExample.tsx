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
          <DialogTitle>{td("modal.deleteItem")}</DialogTitle>
          <DialogDescription>{td("modal.multipleWays")}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm">{td("modal.canBeClosedThreeWays")}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            {td("common.cancel")}
          </Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>
            {td("common.delete")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
