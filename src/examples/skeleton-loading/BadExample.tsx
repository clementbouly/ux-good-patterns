import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { RefreshCw } from "lucide-react";

type User = {
  id: number;
  name: string;
  role: string;
};

const FAKE_USERS: User[] = [
  { id: 1, name: "Alice Martin", role: "Product Designer" },
  { id: 2, name: "Bob Johnson", role: "Frontend Developer" },
  { id: 3, name: "Clara Davis", role: "UX Researcher" },
];

export function BadExample() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = () => {
    setIsLoading(true);
    setUsers(null);

    // Simulate API call
    setTimeout(() => {
      setUsers(FAKE_USERS);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Team Members</h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={loadUsers}
          disabled={isLoading}
        >
          <RefreshCw className={`size-3.5 ${isLoading ? "animate-spin" : ""}`} />
          Reload to test
        </Button>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground h-[186px]">
            <Spinner className="size-8" />
            <span className="text-sm">Loading...</span>
          </div>
        ) : (
          users?.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                {user.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.role}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
