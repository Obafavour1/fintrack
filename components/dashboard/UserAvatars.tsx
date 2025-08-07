import { User } from "@/lib/types";
import { Avatar } from "../ui/Avatar";

export const UserAvatars = ({ users }: { users: User[] }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {users.map((user) => (
          <Avatar key={user.id} name={user.name} />
        ))}
      </div>
      <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-600">+12</span>
      </div>
    </div>
  );
};
