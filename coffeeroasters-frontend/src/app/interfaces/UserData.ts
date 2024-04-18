export interface UserData {
  id: string;
  firstname: string;
  lastname: string;
  dob: Date;
  email: string;
  password: string;
  role: string;
  enabled: boolean;
  authorities: Authority[];
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface Authority {
  authority: string;
}
