import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from '@chakra-ui/react';

const NotFound = () => (
  <Alert
    status="error"
    flexDirection="column"
    minH="3xs"
    as={Flex}
    justifyContent="center"
    rowGap="8px"
    rounded="10px"
  >
    <AlertIcon boxSize={10} />
    <AlertTitle>잘못된 요청입니다</AlertTitle>
    <AlertDescription>페이지의 주소가 잘못 입력되었거나,</AlertDescription>
    <AlertDescription>
      변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
    </AlertDescription>
    <AlertDescription>
      입력하신 페이지 주소를 다시 한번 확인해 주세요.
    </AlertDescription>
  </Alert>
);

export default NotFound;
