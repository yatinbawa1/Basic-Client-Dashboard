export default function Input({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-md bg-white p-4 shadow-sm transition-all placeholder:text-gray-400 focus:shadow-lg focus:outline-none"
      required={required}
    />
  );
}
