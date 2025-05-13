import styled from "styled-components";
import { DS_Colors } from "../../DS/colors";
import { DS_Spacing } from "../../DS/spacing";

export const StyledDiv = styled.div`
    background-color: ${DS_Colors.accent};
    width: 30%;
    height: 812px;
    display: flex;
    margin: 0 auto;
    padding: ${DS_Spacing.s3};
    flex-direction: column;
    gap: ${DS_Spacing.s2};
`

export const StyledDivButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${DS_Spacing.s2};
`;