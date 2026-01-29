import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDemoI18n } from "@/hooks/useI18n";

const TITLE_MAX_LENGTH = 15;
const DESCRIPTION_MAX_LENGTH = 100;

export function BadExample() {
  const { td } = useDemoI18n();
  const [title, setTitle] = useState(() =>
    td("inputLimit.defaultTitle").slice(0, TITLE_MAX_LENGTH)
  );
  const [description, setDescription] = useState(() =>
    td("inputLimit.defaultDescription").slice(0, DESCRIPTION_MAX_LENGTH)
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="title-bad">{td("inputLimit.articleTitle")}</Label>
        <Input
          id="title-bad"
          type="text"
          placeholder={td("inputLimit.titlePlaceholder")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={TITLE_MAX_LENGTH}
        />
        <p className="text-xs text-muted-foreground">
          {td("inputLimit.noWayToEnterMore")}
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description-bad">{td("inputLimit.description")}</Label>
        <Textarea
          id="description-bad"
          placeholder={td("inputLimit.descriptionPlaceholder")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={DESCRIPTION_MAX_LENGTH}
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">
          {td("inputLimit.textCutOff")}
        </p>
      </div>
    </div>
  );
}
