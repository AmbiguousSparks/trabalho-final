import { FaApple, FaGoogle } from "react-icons/fa";
import { DS_Colors } from "../../DS/colors";
import { DS_Button, DS_Input } from "../../DS/components";
import { H1Typography } from "../../DS/typography/h1";
import { LinkTypography } from "../../DS/typography/link";
import { StyledDiv, StyledDivButton } from "./styles";
import { FaSquareFacebook } from "react-icons/fa6";

export function Login() {
    return (
        <StyledDiv>
            <H1Typography color={DS_Colors.white}>Bem-vindo de volta</H1Typography>

            <LinkTypography>Faça login para continuar</LinkTypography>

            <DS_Input type="text" label="Usuário"></DS_Input>
            <DS_Input type="password" label="Senha"></DS_Input>

            <StyledDivButton>
                <DS_Button state="primary" size="large">Entrar</DS_Button>

                <LinkTypography>Esqueceu a senha?</LinkTypography>

                <DS_Button leftIcon={<FaSquareFacebook size={30} />} state="secondary" size="large">Continuar com o Facebook</DS_Button>
                <DS_Button leftIcon={<FaGoogle size={30} />} state="secondary" size="large">Continuar com o Google</DS_Button>
                <DS_Button leftIcon={<FaApple size={30} />} state="secondary" size="large">Continuar com a Apple</DS_Button>

                <LinkTypography>Criar conta</LinkTypography>

            </StyledDivButton>

        </StyledDiv>
    )
}