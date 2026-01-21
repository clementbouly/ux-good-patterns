import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn, getInitials } from "@/lib/utils";
import { useDemoI18n } from "@/hooks/useI18n";

type User = {
  id: number;
  nameKey: string;
  roleKey: string;
};

const FAKE_USERS: User[] = [
  { id: 1, nameKey: "skeleton.aliceMartin", roleKey: "skeleton.productDesigner" },
  { id: 2, nameKey: "skeleton.bobJohnson", roleKey: "skeleton.frontendDeveloper" },
  { id: 3, nameKey: "skeleton.claraDavis", roleKey: "skeleton.uxResearcher" },
];

export function BadExample() {
  const { td } = useDemoI18n();
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
        <h3 className="text-sm font-medium">{td("skeleton.teamMembers")}</h3>
        <Button variant="secondary" size="sm" onClick={loadUsers} disabled={isLoading}>
          <RefreshCw className={cn("size-3.5", isLoading && "animate-spin")} />
          {td("skeleton.reloadToTest")}
        </Button>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground h-[186px]">
            <Spinner className="size-8" />
            <span className="text-sm">{td("common.loading")}</span>
          </div>
        ) : (
          users?.map((user) => {
            const name = td(user.nameKey);
            const role = td(user.roleKey);
            return (
              <div key={user.id} className="flex items-center gap-3 rounded-lg border p-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                  {getInitials(name)}
                </div>
                <div>
                  <p className="font-medium text-sm">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
