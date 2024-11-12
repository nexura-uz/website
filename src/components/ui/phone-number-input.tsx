import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles

type E164Number = string & { __tag: "E164Number" }; // Mock type, replace with actual type from lib if available

export default function PhoneNumberInput() {
  const [phone, setPhone] = useState<E164Number | "">("");

  const handlePhoneChange = (value: string) => {
    // If value is empty or a valid E164Number, set it; else leave unchanged
    setPhone((value as E164Number) || "");
  };

  return (
    <PhoneInput
      country={"uz"}
      value={phone}
      onChange={handlePhoneChange}
      inputProps={{
        name: "phoneNumber",
        required: true,
        autoFocus: true,
      }}
      inputClass="!bg-background !text-primary !w-full"
      containerClass=""
      buttonClass="rounded-l-lg"
      placeholder="Enter your phone number"
      enableSearch
    />
  );
}
