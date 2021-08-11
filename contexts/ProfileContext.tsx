import { CameraCapturedPicture } from 'expo-camera';
import React, { useState, createContext, useContext } from 'react';

export type Profile = {
    name: string;
    picture?: CameraCapturedPicture;
};

type ProfileContext = {
    profile: Profile;
    updateProfile: (profile: Partial<Profile>) => void;
};

const DEFAULT_PROFILE: Profile = {
    name: '',
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

    const updateProfile = (profileUpdates: Partial<Profile>) => {
        setProfile({ ...profile, ...profileUpdates });
    };
    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
