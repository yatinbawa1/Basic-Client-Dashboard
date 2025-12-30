import { useNavigate } from "react-router-dom";

function UserItem({ user }) {
  const fullName = `${user.firstName} ${user.lastName}`;
  const isActive = user.role === "admin";
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/user/${user.id}`, {
          replace: false,
          state: {
            name: `${user.firstName} ${user.lastName}`,
            image: user.image,
          },
        });
      }}
      className="h-20 rounded-md bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center p-4">
        <img
          src={user.image}
          alt={fullName}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="ml-4 flex-1">
          <p className="font-semibold">{fullName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div
          className={`ml-auto h-4 w-4 rounded-full ${
            isActive ? "bg-green-500" : "bg-red-500"
          } animate-pulse`}
          title={isActive ? "Active" : "Inactive"}
        />
      </div>
    </div>
  );
}

export default UserItem;
