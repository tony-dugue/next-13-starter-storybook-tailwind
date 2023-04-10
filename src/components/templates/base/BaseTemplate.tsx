import tw from 'tailwind-styled-components';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <Title>{sampleTextProp}</Title>;
};

export default BaseTemplate;

const Title = tw.h1`bg-gradient-to-r from-red-500 to-blue-500`;
