import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (user === null) {
    // 로그인 하지 않은 경우
    return <Navigate to="/login" />;
  }
  // 로그인 한 경우
  return children;
}
