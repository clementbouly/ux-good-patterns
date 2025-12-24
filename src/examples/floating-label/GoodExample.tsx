import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import FloatingInput from "@/components/FloatingInput";

export const GoodExample = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Independent visibility state for each field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  return (
    <form className="space-y-6">
      {/* Field 1: New Password */}
      <div className="space-y-2">
        <div className="relative">
          <FloatingInput
            id="new-password"
            label="New Password"
            value={password}
            placeholder="Enter your new password"
            type={showPassword ? "text" : "password"}
            required={true}
            onHandleChange={handlePasswordChange}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Field 2: Confirm Password */}
      <div className="space-y-2">
        <div className="relative">
          <FloatingInput
            id="confirm-password"
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm your password"
            type={showConfirm ? "text" : "password"}
            required={true}
            onHandleChange={handleConfirmPasswordChange}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirm(!showConfirm)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
      <p className="text-xs text-center text-muted-foreground mt-2">
        Labels remain visible, show/hide buttons let you control visibility.
      </p>
    </form>
  );
};
