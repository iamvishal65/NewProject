

const profileData = [
  { label: "Name", value: "Vishal Kumar Singh" },
  { label: "Enrollment", value: "2023BTECH001" },
  { label: "Email", value: "example@email.com" },
  { label: "Phone", value: "9876543210" },
  { label: "Department", value: "Computer Science" }
];

const UserDataStructure = () => {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-md">

      {/* Profile Image */}
      <div className="flex justify-center mb-10">
        <div className="group relative w-28 h-28 rounded-full overflow-hidden cursor-pointer border border-gray-200">

          <img
            src="lo"
            alt="profile"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-200">
            <span className="text-white text-sm font-medium">Edit</span>
          </div>

        </div>
      </div>

      {/* Profile Fields */}
      <div className="space-y-6">
        {profileData.map((item) => (
          <ProfileField
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

    </div>
  );
};

const ProfileField = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center border-b pb-3 group">

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value}</p>
      </div>

      <button className="text-sm text-blue-600 opacity-70 group-hover:opacity-100 hover:text-blue-700 hover:underline transition">
        Edit
      </button>

    </div>
  );
};

export default UserDataStructure;