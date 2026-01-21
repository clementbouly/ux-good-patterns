import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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

function UserCardSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-lg border p-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
}

function UserCard({ user, td }: { user: User; td: (key: string) => string }) {
  const name = td(user.nameKey);
  const role = td(user.roleKey);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 rounded-lg border p-3"
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
        {getInitials(name)}
      </div>
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
}

export function GoodExample() {
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
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {[1, 2, 3].map((i) => (
                <UserCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {users?.map((user) => (
                <UserCard key={user.id} user={user} td={td} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
