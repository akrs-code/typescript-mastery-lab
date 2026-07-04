/**
 * Demonstrates: recursive type
 */
// Makes All properties optional including nested ones

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface UserProfile {
    id: number;
    name: string;
    contact: {
        email: string;
        phone: string;
    }
    address: {
        city: string;
        zip: string;
    }
}

const updateProfile: DeepPartial<UserProfile>  = {
    contact: {
        email: "new.email@gmailcom",
    }
}

// Read only
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
}

// Recursive 
type DeepKeys<T, P extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${P}${K}` | DeepKeys<T[K], `${P}${K}.`>
        : `${P}${K}`;
    }[keyof T & string]
  : never;

  interface UserProfile {
  id: number;
  name: string;
  preferences: {
    theme: "light" | "dark";
    notifications: {
      email: boolean;
      push: boolean;
    };
  };
}

// Result: "id" | "name" | "preferences" | "preferences.theme" | "preferences.notifications" | "preferences.notifications.email" | "preferences.notifications.push"
type TestKeys = DeepKeys<UserProfile>;
