import styled from "styled-components";

import { PrimaryButton } from "../attoms/button/PrimaryButton";
import { Input } from "../attoms/input/Input";

export const SerchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="入力しろ" />
        <SButtonWrapper>
          <PrimaryButton>ぷるるるるるるっ</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
