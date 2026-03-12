import React, { useState } from "react";
const SettingsPageStructure = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-8">Settings</h1>

      {/* Account */}
      <Section title="Account">
        <SettingItem label="Email" value="example@email.com" button="Change" />
      </Section>

      {/* Security */}
      <Section title="Security">
        <SettingItem
          label="Password"
          value="********"
          button="Change Password"
        />
      </Section>

      {/* Notifications */}
      <Section title="Notifications">
        <ToggleItem label="Email Notifications" />
        <ToggleItem label="Project Updates" />
      </Section>

      {/* Privacy */}
      <Section title="Privacy">
        <ToggleItem label="Make profile visible to others" />
      </Section>

      {/* Appearance */}
      <Section title="Appearance">
        <ToggleItem
          label="Dark Mode"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </Section>

      {/* Danger Zone */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-red-600 font-semibold mb-3">Danger Zone</h2>

        <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

const SettingItem = ({ label, value, button }) => {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value}</p>
      </div>

      <button className="text-blue-600 text-sm hover:underline">
        {button}
      </button>
    </div>
  );
};

const ToggleItem = ({ label, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <p className="text-gray-800">{label}</p>

      <input
        type="checkbox"
        className="w-5 h-5 accent-blue-600"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default SettingsPageStructure;
