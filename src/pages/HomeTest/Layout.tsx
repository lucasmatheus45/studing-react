import Link from "next/link";
import NavigationButton from "@/components/NavigationButton";

export const Layout = (): JSX.Element => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "blue",
      }}
    >
      <h1>teste de tela</h1>

      <NavigationButton title="Navegar para produto" screenLink="/Product" />
    </div>
  );
};
