import styled from "styled-components";

export const UserIconWithname = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImage height={160} width={160} alt={name} src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #40514e;
`;
