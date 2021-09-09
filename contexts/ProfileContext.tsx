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
    uri: 'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200',
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
