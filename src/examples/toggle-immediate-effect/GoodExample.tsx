import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [autoplay, setAutoplay] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [subtitles, setSubtitles] = useState(false);

  const settings = [
    {
      id: "autoplay",
      label: td("toggle.autoplay"),
      checked: autoplay,
      onChange: setAutoplay,
    },
    {
      id: "fullscreen",
      label: td("toggle.fullscreen"),
      checked: fullscreen,
      onChange: setFullscreen,
    },
    {
      id: "subtitles",
      label: td("toggle.subtitles"),
      checked: subtitles,
      onChange: setSubtitles,
    },
  ];

  return (
    <fieldset className="grid gap-4">
      <legend className="text-sm font-medium mb-4">{td("toggle.videoSettings")}</legend>
      <div className="grid gap-3">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center gap-2">
            <Switch
              id={`good-${setting.id}`}
              checked={setting.checked}
              onCheckedChange={setting.onChange}
            />
            <Label htmlFor={`good-${setting.id}`} className="cursor-pointer">
              {setting.label}
            </Label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
