import React, { useState, createContext, useContext } from "react";
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'

export type Profile = {
  name: string;
  image?: ImageInfo;
};

type ProfileContext = {
  profile: Profile;
  updateProfile: (profile: Partial<Profile>) => void;
};

const DEFAULT_PROFILE: Profile = {
  name: 'Random Cat',
  image: {
    uri: 'https://cataas.com/cat?type=square',
    width: 80,
    height: 80
  }
};

export const ProfileContext = createContext<ProfileContext>({
  profile: DEFAULT_PROFILE,
  updateProfile: () => {},
});

export function useProfile() {
  return useContext(ProfileContext);
}

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  const updateProfile = (profileUpdate: Partial<Profile>) => {
    setProfile({ ...profile, ...profileUpdate });
  };
  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
