import { useState } from "react";
import { Input } from "@/components/ui/input";

export const BadExample = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="space-y-4">
      {/* The label is missing, relying entirely on the placeholder */}
      <div>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <p className="text-xs text-center text-muted-foreground mt-2">
        Once you start typing, if you get distracted and come back, you forget which field is which.
      </p>
    </form>
  );
};
