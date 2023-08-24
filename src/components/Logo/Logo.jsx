import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  margin: ${(props) => props.margin || "0"};
`;

function Logo({ src, alt, width, height, margin }) {
  return (
    <StyledLogo
      src={src}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
    />
  );
}

export default Logo;
