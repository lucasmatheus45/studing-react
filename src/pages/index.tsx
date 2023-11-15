import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavigationButton from "@/components/NavigationButton";
import { BodyContainer, Container, ScreenTitle } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <ScreenTitle>Titulo da Tela</ScreenTitle>
      <BodyContainer>
        <NavigationButton title="Navegar para home" screenLink="/HomeTest" />
      </BodyContainer>
    </Container>
  );
}
