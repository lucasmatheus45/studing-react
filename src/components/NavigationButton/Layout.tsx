import Link from "next/link";
import { ButtonTitle, Container } from "./styles";
import { INavigartionButtonProps } from "./types";
import { useCallback } from "react";

export const Layout = ({
  title,
  screenLink,
}: INavigartionButtonProps): JSX.Element => {
  const showScreenLink = useCallback(() => {
    console.log("Link da screen-----", screenLink);
  }, [screenLink]);

  const showLog = useCallback(() => {
    console.log("Qual o botão esta sendo clicado", title);
    showScreenLink();
  }, [title, showScreenLink]);

  return (
    <Container
      onClick={() => {
        showLog();
      }}
    >
      <Link href={screenLink}>
        <ButtonTitle>{title}</ButtonTitle>
      </Link>
      <input type="" />
    </Container>
  );
};
