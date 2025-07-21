export function setCurrentUser(userRole: string) {
  localStorage.setItem('userRole', userRole);
  return {message: "User login successful"};
}

export function getCurrentUser() {
  const user = localStorage.getItem('userRole');
  if(!user) {
    return null;
  }
  return {userRole: user};
}