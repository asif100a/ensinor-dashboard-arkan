'use client';

export function setCurrentUser(userRole: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem('userRole', userRole);
  }
  return { message: "User login successful" };
}

export function getCurrentUser() {
  const user = localStorage.getItem('userRole');
  if (!user) return null;
  return { userRole: user };
}
