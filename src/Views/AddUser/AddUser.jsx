import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../data/UserProvider";
import Input from "../../Components/Input/Input.jsx";
import PrimaryButton from "../../Components/Button/PrimaryButton.jsx";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";

function AddUser() {
  const { data, setData } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGroup: "",
    eyeColor: "",
    hairColor: "",
    hairType: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    companyDept: "",
    companyTitle: "",
    companyName: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle Submit Ran");
    const newUser = {
      id: Date.now(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      age: parseInt(form.age),
      gender: form.gender,
      bloodGroup: form.bloodGroup,
      eyeColor: form.eyeColor,
      hair: { color: form.hairColor, type: form.hairType },
      address: {
        address: form.address,
        city: form.city,
        state: form.state,
        postalCode: form.postalCode,
        country: form.country,
      },
      company: {
        department: form.companyDept,
        title: form.companyTitle,
        name: form.companyName,
      },
      role: "user",
      image:
        form.image.trim() !== ""
          ? form.image
          : "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-High-Quality-Image.png",
    };

    setData([newUser, ...(data || [])]);
    console.log(data);
    navigate("/");
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Add New User</h1>
      <form onSubmit={handleSubmit} className="grid space-y-4">
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <Input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
          />
          <Input
            name="gender"
            value={form.gender}
            onChange={handleChange}
            placeholder="Gender"
          />
          <Input
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
          />
          <Input
            name="eyeColor"
            value={form.eyeColor}
            onChange={handleChange}
            placeholder="Eye Color"
          />
          <Input
            name="hairColor"
            value={form.hairColor}
            onChange={handleChange}
            placeholder="Hair Color"
          />
          <Input
            name="hairType"
            value={form.hairType}
            onChange={handleChange}
            placeholder="Hair Type"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Street Address"
          />
          <Input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
          />
          <Input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
          />
          <Input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
          />
          <Input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            name="companyDept"
            value={form.companyDept}
            onChange={handleChange}
            placeholder="Department"
          />
          <Input
            name="companyTitle"
            value={form.companyTitle}
            onChange={handleChange}
            placeholder="Title"
          />
          <Input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Organization"
          />
          <Input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>

        <PrimaryButton
          className="mt-3"
          collapseable="false"
          color="#03632c"
          Icon={UploadOutlinedIcon}
          text="Upload profile"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default AddUser;
