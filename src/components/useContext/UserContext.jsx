import { createContext, useContext } from "react";

// 1. Context 생성
const UserContext = createContext();

// 2. 사용자 정보를 제공하는 Provider 컴포넌트
export function UserProvider({ children }) {
  const user = {
    name: "김소영",
    role: "관리자"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Context 값을 쉽게 가져오는 커스텀 훅
export function useUser() {
  return useContext(UserContext);
}
