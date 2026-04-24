import React from "react";
import CustomInput from "./CustomInput";

export default function EditModal({ ref ,defaultStreetAddress,defaultCity,defaultState,defaultZipCode  }) {
  return (
    <dialog id="my_modal_1" className="modal" ref={ref}>
  <div className="modal-box max-w-md">

    {/* Title */}
    <h3 className="font-bold text-xl mb-4">
      Edit Address
    </h3>

    {/* Form */}
    <form method="dialog" className="space-y-4">

      <CustomInput
        label="Street Address"
        id="streetAddress"
        defaultValue={defaultStreetAddress}
      />

      <CustomInput
        label="City"
        id="city"
        defaultValue={defaultCity}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <CustomInput
          label="State"
          id="state"
          defaultValue={defaultState}
        />
        <CustomInput
          label="Zip Code"
          id="zipCode"
          defaultValue={defaultZipCode}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <button className="btn btn-ghost">
          Cancel
        </button>

        <button className="btn btn-primary" type="submit">
          Save Changes
        </button>
      </div>

    </form>
  </div>
</dialog>
  );
}
