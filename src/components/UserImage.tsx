import React, { ChangeEvent, useRef } from "react";
import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import defaultImage from "/defaultProfileImage.png";

const UserImage: React.FC = () => {
  const profile = useAppSelector((state) => state.authentication.profile);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function UploadProfile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const img = URL.createObjectURL(e.target.files[0]);
      dispatch(authActions.setProfile({ profile: img }));
    }
  }

  function tapOnHiddenInput() {
    if (inputRef.current) {
      inputRef.current.click(); // Programmatically trigger the click event on the input
    }
  }

  return (
    <div className="flex justify-center">
      <input
        ref={inputRef}
        className="invisible absolute w-20 h-20"
        type="file"
        onChange={UploadProfile}
      />
      <img
        onClick={tapOnHiddenInput}
        className="w-20 h-20 cursor-pointer rounded-full"
        src={profile === "" ? defaultImage : profile}
        alt="User Profile"
      />
    </div>
  );
};

export default UserImage;
