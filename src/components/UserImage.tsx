import React, { ChangeEvent, useRef } from "react";
import { authActions } from "../Redux/Slices/authenticateSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import defaultImage from "/defaultProfileImage.png";

const UserImage: React.FC = () => {
  const profile = useAppSelector((state) => state.authentication.profile);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  // console.log(profile);

  function UploadProfile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      // const img = URL.createObjectURL(e.target.files[0]);
      // Convert the image to a base64 string
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(authActions.setProfile({ profile: base64String }));
      };
      // console.log(img);
      reader.readAsDataURL(e.target.files[0]);
    } else {
      dispatch(authActions.setProfile({ profile: defaultImage }));
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
        className="invisible absolute max-sm:w-16 max-sm:h-16  sm:sm:w-20 sm:h-20"
        type="file"
        onChange={UploadProfile}
      />
      <img
        onClick={tapOnHiddenInput}
        className="max-sm:w-16 max-sm:h-16      sm:w-20 sm:h-20 cursor-pointer rounded-full"
        src={profile === "" ? defaultImage : profile}
        alt="User Profile"
      />
    </div>
  );
};

export default UserImage;
