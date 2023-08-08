import { Navigate, Route, Routes } from "react-router-dom";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path={"/*"} element={<JournalRoutes />} />
      ) : (
        <Route path={"auth/*"} element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />

      {/* Login & Register */}
      {/* <Route path={"auth/*"} element={<AuthRoutes />} /> */}

      {/* Journal app */}
      {/* <Route path={"/*"} element={<JournalRoutes />} /> */}
    </Routes>
  );
};
